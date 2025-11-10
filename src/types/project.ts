// Project types for database storage and retrieval

export interface Project {
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

export interface ProjectInsert extends Omit<Project, 'id' | 'created_at' | 'updated_at'> {
  id?: string;
}

export type ProjectUpdate = Partial<Omit<Project, 'id' | 'created_at'>>;

export interface ProjectFilters {
  category?: 'featured' | 'portfolio' | 'other';
  is_published?: boolean;
  year?: string;
  tags?: string[];
}

// Featured project specific type (used in HomeSection)
export interface FeaturedProject {
  title: string;
  genre: string;
  year: string;
  imageUrl: string;
}

// Convert database Project to FeaturedProject format
export function toFeaturedProject(project: Project): FeaturedProject {
  return {
    title: project.title,
    genre: project.genre,
    year: project.year,
    imageUrl: project.image_url
  };
}

// Convert FeaturedProject to Project format for database
export function fromFeaturedProject(
  featured: FeaturedProject,
  category: 'featured' | 'portfolio' = 'featured'
): ProjectInsert {
  return {
    title: featured.title,
    description: '',
    genre: featured.genre,
    year: featured.year,
    image_url: featured.imageUrl,
    category,
    is_published: true
  };
}
