# Journey Timeline - Hướng dẫn sử dụng

## Tổng quan

Trang Journey Timeline hiển thị lịch sử sự nghiệp của bạn theo thời gian, với giao diện trực quan và tương tác cao.

## Các tính năng chính

### 1. **Statistics Dashboard**
- **Năm kinh nghiệm**: Hiển thị tổng số năm làm việc
- **Dự án hoàn thành**: Số lượng dự án đã thực hiện
- **Giải thưởng**: Số giải thưởng đã đạt được
- **Nghệ sĩ hợp tác**: Số lượng nghệ sĩ đã làm việc cùng

### 2. **Hệ thống lọc sự kiện**
Có 5 loại filter để xem các sự kiện:
- **All Events**: Hiển thị tất cả sự kiện
- **Work**: Chỉ hiển thị công việc
- **Education**: Chỉ hiển thị học tập
- **Awards**: Chỉ hiển thị giải thưởng
- **Freelance**: Chỉ hiển thị công việc tự do

### 3. **Timeline Layout**
- **Desktop**: Layout zigzag (sự kiện xen kẽ trái/phải)
- **Mobile**: Layout dọc (stack vertical)
- **Responsive**: Tự động điều chỉnh theo kích thước màn hình

### 4. **Interactive Elements**
- **Hover effects**: Card nổi lên khi hover
- **Image zoom**: Hình ảnh zoom in khi hover
- **Icon animation**: Icon quay 360° khi hover
- **Smooth animations**: Fade in khi scroll

## Cấu trúc dữ liệu

```typescript
interface TimelineItem {
  year: string;                    // Năm hoặc khoảng thời gian
  title: string;                    // Tiêu đề sự kiện
  location: string;                 // Địa điểm
  description: string[];            // Mô tả chi tiết (mảng)
  icon: React.ReactNode;           // Icon hiển thị
  color: string;                   // Màu chủ đạo
  image: string;                   // URL hình ảnh
  category: 'work' | 'education' | 'award' | 'freelance';
}
```

## Cách thêm sự kiện mới

1. Mở file `TimelineSection.tsx`
2. Thêm object mới vào mảng `timelineData`:

```typescript
{
  year: "2025",
  title: "Your Event Title",
  location: "Location Name",
  description: [
    "Description point 1",
    "Description point 2",
  ],
  icon: <CalendarOutlined />,
  color: "#f5a623",
  image: "https://your-image-url.com/image.jpg",
  category: 'work', // or 'education', 'award', 'freelance'
}
```

## Customization

### Thay đổi màu sắc
Các màu chính được sử dụng:
- Primary Orange: `#f5a623`
- Purple: `#9d9abf`
- Green: `#52c41a`
- Blue: `#1890ff`
- Background: `#2c2c2c`
- Border: `#4a4a4a`

### Thay đổi thống kê
Cập nhật object `stats` trong component:
```typescript
const stats = {
  totalYears: 7,
  totalProjects: 250,
  awards: timelineData.filter(item => item.category === 'award').length,
  collaborations: 50,
};
```

## Icons có sẵn
- `<CalendarOutlined />` - Lịch
- `<TrophyOutlined />` - Giải thưởng
- `<AudioOutlined />` - Âm thanh
- `<BookOutlined />` - Sách/Học tập
- `<UserOutlined />` - Người dùng
- `<FilterOutlined />` - Bộ lọc

## Best Practices

1. **Hình ảnh**: Sử dụng tỷ lệ 16:10, kích thước tối thiểu 400x250px
2. **Mô tả**: Giữ mỗi điểm mô tả ngắn gọn (1-2 dòng)
3. **Màu sắc**: Sử dụng màu nhất quán cho từng loại sự kiện
4. **Thứ tự**: Sắp xếp từ mới nhất đến cũ nhất (đảo ngược thời gian)

## Responsive Breakpoints

- **Desktop**: > 768px - Zigzag layout
- **Tablet**: 576px - 768px - Adjusted layout
- **Mobile**: < 576px - Vertical stack

## Performance Tips

1. Tối ưu hình ảnh trước khi upload
2. Sử dụng lazy loading cho hình ảnh
3. Giới hạn số lượng sự kiện (10-15 events)
4. Cache hình ảnh từ CDN

## Troubleshooting

### Hình ảnh không hiển thị
- Kiểm tra URL hình ảnh có chính xác
- Đảm bảo CORS được cấu hình đúng
- Thử sử dụng URL từ Unsplash hoặc CDN khác

### Animation không mượt
- Giảm số lượng sự kiện hiển thị
- Tắt animation trên mobile nếu cần
- Kiểm tra performance với DevTools

### Filter không hoạt động
- Đảm bảo mỗi item có `category` được set đúng
- Kiểm tra state `filter` có được update
- Xem console log để debug

## Future Enhancements

- [ ] Thêm search functionality
- [ ] Export timeline as PDF
- [ ] Dark/Light theme toggle
- [ ] Timeline navigation sidebar
- [ ] Infinite scroll
- [ ] Share to social media
- [ ] Print-friendly version
