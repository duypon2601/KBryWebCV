# Footer Component

Component Footer chung cho website K'Brỳ Organizer.

## Tính năng

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Quick Links navigation
- ✅ Social media links
- ✅ Call-to-action section
- ✅ Contact information
- ✅ Hover effects và animations
- ✅ Automatic copyright year

## Sử dụng

Footer được tích hợp tự động trong `App.tsx` và hiển thị trên tất cả các trang **NGOẠI TRỪ** trang `/home`.

### Các trang có Footer:
- `/about-me` - About Me
- `/portfolio` - Portfolio
- `/journey` - Journey
- `/contact` - Contact
- `/admin/projects` - Admin Projects

### Các trang KHÔNG có Footer:
- `/home` - Home (trang chủ)

## Cấu trúc

Footer bao gồm 4 phần chính:

### 1. About Section
- Logo/Brand name
- Tagline
- Mô tả ngắn

### 2. Quick Links
- Home
- About Me
- Portfolio
- Journey
- Contact

### 3. Connect Section
- Email contact
- Social media icons (Facebook, Instagram, YouTube, GitHub)

### 4. Call-to-Action
- Heading: "Let's Create Something Amazing"
- Button: "Get In Touch" (link to `/contact`)

### 5. Copyright
- Dynamic year
- Copyright text

## Customization

### Thay đổi màu sắc:
```tsx
// Primary color: #f5a623 (vàng cam)
// Background: #2c2c2c (xám đậm)
// Text: #eaeaea (trắng xám)
// Secondary text: #a9a9a9 (xám nhạt)
```

### Thay đổi social media links:
Sửa trong `Footer.tsx`:
```tsx
<Button
  href="https://YOUR_LINK_HERE"
  target="_blank"
  // ...
/>
```

### Thay đổi email:
Sửa trong `Footer.tsx`:
```tsx
<Paragraph>
  <MailOutlined />
  YOUR_EMAIL@example.com
</Paragraph>
```

## Styles

CSS được định nghĩa trong `Footer.css`:
- `.footer-link` - Styling cho navigation links
- `.footer-social-btn` - Styling cho social media buttons
- `.footer-cta-section` - Styling cho CTA section

## Logic hiển thị

Trong `App.tsx`:
```tsx
const showFooter = location.pathname !== '/home';
return (
  <>
    <Header />
    <Content>...</Content>
    {showFooter && <Footer />}
  </>
);
```

## Dependencies

- `react-router-dom` - For navigation links
- `antd` - UI components (Layout, Typography, Button, Icons)

## Notes

- Footer tự động ẩn ở trang home để tránh conflict với home section design
- Social media buttons có hover effect (transform + color change)
- Quick links có hover effect (color change to primary color)
- Copyright year tự động cập nhật theo năm hiện tại
