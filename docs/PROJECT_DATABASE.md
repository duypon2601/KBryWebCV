# Project Database System

Hệ thống quản lý thông tin projects với Supabase.

## Cấu trúc

```
src/
├── types/
│   └── project.ts          # TypeScript interfaces cho Project
├── services/
│   └── projectService.ts   # Functions tương tác với database
├── hooks/
│   └── useProjects.ts      # React hooks để sử dụng trong components
supabase/
└── migrations/
    └── 001_create_projects_table.sql  # SQL script tạo bảng
```

## Setup Database

### 1. Chạy SQL Migration

Truy cập Supabase SQL Editor và chạy file `001_create_projects_table.sql`:
- Vào https://app.supabase.com/project/YOUR_PROJECT_ID/sql
- Copy nội dung file SQL và chạy
- Hoặc sử dụng Supabase CLI: `supabase db push`

### 2. Kiểm tra Storage Bucket

Đảm bảo bucket `projectkbry` đã tồn tại trong Supabase Storage:
- Vào Storage → Create new bucket → Tên: `projectkbry`
- Public bucket để cho phép truy cập public URLs

## Sử dụng

### 1. Trong React Components

```typescript
import { useFeaturedProjects, useProjectMutations } from '@/hooks/useProjects';

function MyComponent() {
  // Fetch featured projects
  const { projects, loading, error, refetch } = useFeaturedProjects();
  
  // Mutations
  const { createProject, updateProject, deleteProject } = useProjectMutations();
  
  // Create new project
  const handleCreate = async () => {
    const newProject = await createProject({
      title: 'New Project',
      description: 'Description',
      genre: 'Electronic',
      year: '2024',
      image_url: 'https://...',
      category: 'featured'
    });
    
    if (newProject) {
      refetch(); // Refresh list
    }
  };
  
  // Update project
  const handleUpdate = async (id: string) => {
    await updateProject(id, {
      title: 'Updated Title'
    });
    refetch();
  };
  
  // Delete project
  const handleDelete = async (id: string) => {
    await deleteProject(id);
    refetch();
  };
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {projects.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
}
```

### 2. Sử dụng Service Layer trực tiếp

```typescript
import * as projectService from '@/services/projectService';

// Get all projects
const projects = await projectService.getProjects();

// Get featured projects only
const featured = await projectService.getFeaturedProjects();

// Get single project
const project = await projectService.getProject('project-id');

// Create project
const newProject = await projectService.createProject({
  title: 'Title',
  description: 'Description',
  genre: 'Genre',
  year: '2024',
  image_url: 'url',
  category: 'featured'
});

// Update project
const updated = await projectService.updateProject('project-id', {
  title: 'New Title'
});

// Delete project
await projectService.deleteProject('project-id');
```

### 3. Filters

```typescript
import { useProjects } from '@/hooks/useProjects';

// Filter by category
const { projects } = useProjects({ category: 'featured' });

// Filter by published status
const { projects } = useProjects({ is_published: true });

// Filter by year
const { projects } = useProjects({ year: '2024' });

// Multiple filters
const { projects } = useProjects({
  category: 'portfolio',
  is_published: true,
  year: '2024'
});
```

## Database Schema

```sql
projects (
  id                UUID PRIMARY KEY,
  created_at        TIMESTAMPTZ,
  updated_at        TIMESTAMPTZ,
  title             TEXT NOT NULL,
  description       TEXT,
  genre             TEXT NOT NULL,
  year              TEXT NOT NULL,
  image_url         TEXT NOT NULL,
  category          TEXT ('featured' | 'portfolio' | 'other'),
  order             INTEGER,
  is_published      BOOLEAN,
  tags              TEXT[],
  metadata          JSONB
)
```

## Types

### Project
```typescript
interface Project {
  id: string;
  created_at?: string;
  updated_at?: string;
  title: string;
  description: string;
  genre: string;
  year: string;
  image_url: string;
  category?: 'featured' | 'portfolio' | 'other';
  order?: number;
  is_published?: boolean;
  tags?: string[];
  metadata?: Record<string, unknown>;
}
```

### ProjectInsert
```typescript
// Omits auto-generated fields (id, created_at, updated_at)
interface ProjectInsert extends Omit<Project, 'id' | 'created_at' | 'updated_at'> {
  id?: string; // Optional if you want to provide custom ID
}
```

### ProjectUpdate
```typescript
// All fields optional except id and created_at
type ProjectUpdate = Partial<Omit<Project, 'id' | 'created_at'>>;
```

## Security (RLS Policies)

- **Public (anon)**: Có thể xem projects với `is_published = true`
- **Authenticated**: Có thể CRUD tất cả projects

Để thay đổi policies, chỉnh sửa trong Supabase Dashboard hoặc SQL migration.

## Ví dụ Integration với HomeSection

```typescript
import { useFeaturedProjects } from '@/hooks/useProjects';
import { toFeaturedProject } from '@/types/project';

function HomeSection() {
  const { projects, loading } = useFeaturedProjects();
  
  // Convert to format used in component
  const featuredProjects = projects.slice(0, 3).map(toFeaturedProject);
  
  return (
    <div>
      {loading ? <Spinner /> : (
        featuredProjects.map((project, idx) => (
          <Card key={idx} project={project} />
        ))
      )}
    </div>
  );
}
```
