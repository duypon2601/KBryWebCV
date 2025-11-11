# Hướng dẫn thêm Project vào Database

## Cách thêm project mới

### 1. Từ giao diện web (Recommended)

1. **Bật chế độ chỉnh sửa**:
   - Nhấp vào nút Edit ở góc phải trên cùng

2. **Mở form thêm project**:
   - Vào trang Portfolio
   - Nhấp nút "Thêm dự án" (màu vàng)

3. **Điền thông tin**:
   - **Tiêu đề**: Tên dự án (VD: "Neon Dreams")
   - **Thể loại / Genre**: Thể loại âm nhạc (VD: "Electronic Music", "Ambient", "Live Performance")
   - **Category**: Chọn category cho project
     - **Featured**: Hiển thị ở trang chủ (HomeSection)
     - **Portfolio**: Hiển thị ở trang Portfolio
     - **Other**: Các project khác
   - **Thời lượng**: Định dạng MM:SS (VD: "4:32")
   - **Năm**: 4 chữ số (VD: "2024")
   - **Link video**: URL YouTube đầy đủ (VD: "https://www.youtube.com/watch?v=...")
   - **Hình ảnh**: Upload file hoặc nhập URL

4. **Upload hình ảnh** (2 cách):
   - **Cách 1**: Nhấp "Upload hình ảnh" → Chọn file (< 2MB)
   - **Cách 2**: Nhập trực tiếp URL hình ảnh

5. **Lưu project**:
   - Nhấp nút "Thêm"
   - Đợi thông báo thành công
   - Project sẽ tự động hiển thị

### 2. Thêm trực tiếp vào Supabase

1. **Vào Supabase Dashboard**:
   - https://app.supabase.com/project/YOUR_PROJECT_ID/editor

2. **Chọn bảng `projects`**

3. **Insert new row** với các trường:
   ```sql
   INSERT INTO projects (
     title,
     description,
     genre,
     year,
     image_url,
     category,
     "order",
     is_published,
     metadata
   ) VALUES (
     'Tên dự án',
     'Mô tả ngắn',
     'Music Production',
     '2024',
     'https://example.com/image.jpg',
     'portfolio',
     0,
     true,
     '{"duration": "4:32", "video_url": "https://youtube.com/..."}'
   );
   ```

### 3. Sử dụng SQL Script

Tạo file SQL và chạy trong Supabase SQL Editor:

```sql
-- Thêm một project
INSERT INTO projects (
  title, description, genre, year, image_url, category, "order", is_published, metadata
) VALUES (
  'Project Title',
  'Project description',
  'Electronic Music',
  '2024',
  'https://example.com/image.jpg',
  'portfolio',
  1,
  true,
  jsonb_build_object(
    'duration', '4:32',
    'video_url', 'https://www.youtube.com/watch?v=xxxxx'
  )
);

-- Thêm nhiều projects cùng lúc
INSERT INTO projects (title, description, genre, year, image_url, category, "order", metadata) VALUES
  ('Project 1', '', 'Music', '2024', 'url1', 'portfolio', 1, '{"duration": "4:32", "video_url": "url1"}'),
  ('Project 2', '', 'Music', '2024', 'url2', 'portfolio', 2, '{"duration": "3:15", "video_url": "url2"}'),
  ('Project 3', '', 'Music', '2023', 'url3', 'portfolio', 3, '{"duration": "5:20", "video_url": "url3"}');
```

## Quy tắc và Validation

### Thông tin bắt buộc:
- ✅ **title**: Không được để trống
- ✅ **genre**: Thể loại âm nhạc (VD: "Electronic Music", "Ambient")
- ✅ **category**: Phải chọn một trong ba (featured/portfolio/other)
- ✅ **year**: 4 chữ số (2020-2099)
- ✅ **time/duration**: Định dạng MM:SS hoặc M:SS
- ✅ **video**: URL YouTube hợp lệ
- ✅ **image_url**: URL hình ảnh hợp lệ

### Quy tắc hình ảnh:
- File size: < 2MB
- Format: JPG, PNG, GIF, WebP
- Khuyến nghị: 16:9 aspect ratio
- Tối thiểu: 800x450px

### Categories:
- `featured`: Projects hiển thị ở HomeSection (trang chủ)
- `portfolio`: Projects hiển thị ở Portfolio page (có thể filter theo genre)
- `other`: Projects khác (không hiển thị trên website)

### Genres (Thể loại):
- Genres được sử dụng để filter projects trong PortfolioSection
- Mỗi project có thể có genre riêng (VD: "Music Production", "Electronic Music", "Ambient", "Live Performance")
- Các genre sẽ tự động xuất hiện như các nút filter trong Portfolio page
- Users có thể click vào genre để xem các projects thuộc thể loại đó

## Xóa và Sửa Project

### Sửa project:
1. Bật chế độ edit
2. Nhấp vào project card
3. Chỉnh sửa thông tin
4. Nhấp "Lưu"

### Xóa project:
1. Mở modal chỉnh sửa project
2. Nhấp nút "Xóa" (màu đỏ)
3. Xác nhận xóa

## Troubleshooting

### Lỗi upload hình ảnh:
- Kiểm tra file size < 2MB
- Kiểm tra format (JPG, PNG, GIF)
- Kiểm tra Supabase Storage bucket đã tạo chưa

### Không thấy project sau khi thêm:
- Kiểm tra `is_published = true`
- Kiểm tra `category` đúng ('portfolio' hoặc 'featured')
- Refresh trang

### Lỗi "Missing VITE_SUPABASE_URL":
- Kiểm tra file `.env` đã có đầy đủ thông tin
- Restart dev server sau khi cập nhật `.env`

## API Usage (cho developers)

```typescript
import { createProject } from '@/services/projectService';

// Thêm project
const newProject = await createProject({
  title: 'New Project',
  description: 'Description',
  genre: 'Electronic',
  year: '2024',
  image_url: 'https://...',
  category: 'portfolio',
  order: 1,
  is_published: true,
  metadata: {
    duration: '4:32',
    video_url: 'https://youtube.com/...'
  }
});
```

## Lưu ý quan trọng

⚠️ **Backup**: Nên backup database trước khi xóa nhiều projects
⚠️ **Permissions**: Chỉ authenticated users có thể thêm/sửa/xóa
⚠️ **Storage**: Hình ảnh được lưu trong Supabase Storage bucket `projectkbry`
⚠️ **URLs**: Video URLs phải là YouTube URLs hợp lệ

## Thống kê và Quản lý

### Xem tất cả projects:
```sql
SELECT * FROM projects ORDER BY "order", created_at DESC;
```

### Đếm projects theo category:
```sql
SELECT category, COUNT(*) FROM projects GROUP BY category;
```

### Tìm projects chưa publish:
```sql
SELECT * FROM projects WHERE is_published = false;
```
