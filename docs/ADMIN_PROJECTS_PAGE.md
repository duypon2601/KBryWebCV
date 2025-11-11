# Admin Projects Page - Hướng dẫn sử dụng

## Truy cập trang Admin

1. **Mở URL**: `http://localhost:5173/admin/projects` (hoặc domain của bạn)

2. **Đăng nhập**: 
   - Click nút **"Đăng nhập"** ở góc trên bên phải
   - Nhập mật khẩu (mặc định: `admin123`)
   - Sau khi đăng nhập thành công, bạn sẽ thấy nút "Đăng xuất"

3. **Bắt đầu quản lý**: Bạn có thể xem, thêm, sửa, xóa projects sau khi đăng nhập

## Tính năng

### 1. **Dashboard Statistics**
Hiển thị 4 thẻ thống kê:
- 📊 **Tổng số projects**: Tất cả projects trong database
- ⭐ **Featured**: Số projects thuộc category 'featured'
- 📁 **Portfolio**: Số projects thuộc category 'portfolio'  
- ✅ **Công khai**: Số projects đang được publish

### 2. **Bảng quản lý Projects**

#### Các cột:
- **Hình ảnh**: Thumbnail preview (100x60px)
- **Tiêu đề**: Tên project (có thể sắp xếp)
- **Năm**: Năm phát hành (có thể sắp xếp)
- **Thể loại**: Genre của project
- **Category**: Tag màu (Featured/Portfolio/Other) - có filter
- **Công khai**: Switch on/off để publish/unpublish
- **Hành động**: Xem, Sửa, Xóa

#### Tính năng bảng:
- ✅ Sắp xếp theo tiêu đề, năm
- ✅ Lọc theo category và trạng thái publish
- ✅ Phân trang (10/20/50 items per page)
- ✅ Scroll ngang khi màn hình nhỏ
- ✅ Hiển thị tổng số records

### 3. **Thao tác CRUD**

#### ➕ Thêm Project
1. Click nút **"Thêm Project"** (màu vàng)
2. Điền form:
   - Tiêu đề (bắt buộc)
   - Thời lượng: MM:SS format (VD: 4:32)
   - Năm: 4 chữ số (VD: 2024)
   - Link video: YouTube URL
   - Hình ảnh: Upload hoặc URL
3. Click **"Thêm"**
4. Đợi thông báo thành công

#### ✏️ Sửa Project
1. Click nút **"Sửa"** trên dòng project
2. Modal mở với dữ liệu đã điền
3. Chỉnh sửa thông tin
4. Click **"Lưu"**

#### 👁️ Xem Project
1. Click nút **"Xem"** 
2. Mở video/link trong tab mới

#### 🔄 Toggle Publish
- Click switch **"Công khai"**
- Project sẽ hiện/ẩn trên trang public
- Thông báo xác nhận

#### 🗑️ Xóa Project
1. Click nút **"Xóa"** (màu đỏ)
2. Xác nhận trong popup
3. Project bị xóa vĩnh viễn

### 4. **Nút chức năng**

- 🔄 **Tải lại**: Refresh data từ database
- ➕ **Thêm Project**: Mở form thêm mới

## Giao diện

### Theme
- Background: Dark (#1e1e1e)
- Text: Light (#eaeaea)
- Primary color: Orange (#f5a623)

### Responsive
- Desktop: Full width table
- Tablet/Mobile: Horizontal scroll

## Workflow ví dụ

### Thêm project mới vào Featured Section:

1. Vào `/admin/projects`
2. Click "Thêm Project"
3. Điền thông tin:
   ```
   Tiêu đề: Summer Vibes 2024
   Thời lượng: 3:45
   Năm: 2024
   Video: https://youtube.com/watch?v=xxxxx
   Hình ảnh: [Upload file]
   ```
4. Click "Thêm"
5. Tìm project vừa tạo trong bảng
6. Đổi category thành "featured" (nếu cần)
7. Bật switch "Công khai"
8. Kiểm tra trang Home → Featured section

### Bulk operations:

#### Ẩn tất cả projects năm 2022:
1. Filter bảng theo năm 2022
2. Tắt switch "Công khai" từng project
3. Hoặc dùng SQL:
   ```sql
   UPDATE projects SET is_published = false WHERE year = '2022';
   ```

#### Xem tất cả unpublished projects:
1. Click filter "Công khai"
2. Chọn "Hidden"
3. Review và publish nếu cần

## Keyboard Shortcuts

- `Ctrl/Cmd + R`: Reload page
- `Esc`: Đóng modal

## Tips & Best Practices

### 🎯 Quản lý hiệu quả:

1. **Đặt tên rõ ràng**:
   - ✅ "Summer Festival 2024 - Opening"
   - ❌ "Project 1"

2. **Sử dụng categories đúng**:
   - `featured`: 3-5 projects quan trọng nhất (hiện ở Home)
   - `portfolio`: Tất cả projects (hiện ở Portfolio page)
   - `other`: Projects lưu trữ, draft

3. **Order field**:
   - Số nhỏ → hiển thị trước
   - Featured: 1, 2, 3...
   - Portfolio: 1-100

4. **Image optimization**:
   - Kích thước: 1280x720px (16:9)
   - Format: JPG (nén tốt) hoặc WebP
   - Size: < 500KB

5. **Backup trước khi xóa**:
   ```sql
   -- Export projects
   SELECT * FROM projects WHERE year = '2023';
   ```

### ⚠️ Lưu ý:

- **Không xóa** projects đang được reference
- **Test** trên staging trước khi publish
- **Backup** database định kỳ
- **Review** trước khi mass update

## Troubleshooting

### Lỗi không load được data:
- Kiểm tra console browser (F12)
- Verify Supabase connection
- Check `.env` variables

### Hình ảnh không hiện:
- Check Storage bucket permissions
- Verify image URL
- Try re-upload

### Không thể xóa:
- Check RLS policies
- Verify authentication
- Check foreign key constraints

## API Endpoints (Internal)

Trang này sử dụng:
- `GET /projects`: Load all projects
- `POST /projects`: Create new
- `PATCH /projects/:id`: Update
- `DELETE /projects/:id`: Delete
- `PATCH /projects/:id/toggle`: Toggle publish

## Security

- ✅ Only authenticated users can access
- ✅ RLS policies enforced
- ✅ Input validation
- ✅ Confirmation before delete
- ✅ Error handling

## Performance

- 📊 Pagination: 10 items default
- 🚀 Lazy loading images
- 💾 Optimistic updates
- 🔄 Auto-refetch after mutations

## Future Enhancements

- [ ] Bulk operations (select multiple)
- [ ] Drag & drop reordering
- [ ] Image editor
- [ ] Export to CSV/JSON
- [ ] Activity log
- [ ] Advanced search
- [ ] Duplicate project
- [ ] Archive feature
