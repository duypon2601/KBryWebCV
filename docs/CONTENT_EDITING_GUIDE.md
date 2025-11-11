# Hướng dẫn chỉnh sửa nội dung trang

## Tổng quan

Hệ thống chỉnh sửa nội dung cho phép bạn chỉnh sửa các thông tin tĩnh trên website ở chế độ development, và lưu trực tiếp vào file code để commit lên Git.

## Cách hoạt động

### 1. **Vào chế độ chỉnh sửa**
- Mở website ở local: `http://localhost:5173`
- Click nút **"Đăng nhập"** ở góc trên bên phải
- Nhập mật khẩu (mặc định: `admin123`)
- Các trường có thể chỉnh sửa sẽ hiển thị

### 2. **Chỉnh sửa nội dung**
Các trang có thể chỉnh sửa:
- **Trang Home** (`/home`): Tiêu đề, mô tả, giới thiệu
- **Trang About** (`/about-me`): Thông tin cá nhân, triết lý, học vấn
- **Featured Section** (sidebar): Tên, chức danh, liên kết social media

### 3. **Lưu thay đổi**

Sau khi chỉnh sửa, bạn có 2 cách lưu:

#### **Cách 1: Copy code (Khuyến nghị)**
1. Click nút **"Copy code"** (màu xanh lá) ở góc dưới bên phải
2. Nội dung mới sẽ được copy vào clipboard
3. Mở file tương ứng trong `src/data/`:
   - Home: `src/data/homeContent.ts`
   - About: `src/data/aboutContent.ts`  
   - Featured: `src/data/featuredContent.ts`
4. **Xóa toàn bộ nội dung file** và paste code mới vào
5. Save file
6. Reload trang để thấy thay đổi

#### **Cách 2: Download file**
1. Click nút **"Download"** 
2. File TypeScript sẽ được tải xuống
3. Copy nội dung và paste vào file tương ứng trong `src/data/`

### 4. **Commit thay đổi**
```bash
git add src/data/
git commit -m "Update page content"
git push
```

## Cấu trúc file content

### Home Content (`src/data/homeContent.ts`)
```typescript
export const homeContent = {
  title: 'Về Tôi',
  description: '...',
  introduction: '...',
  callToAction: {
    title: "Let's Create Together",
    description: '...'
  }
} as const;
```

### About Content (`src/data/aboutContent.ts`)
```typescript
export const aboutContent = {
  aboutMe: "...",
  inspiration: "...",
  philosophy: "...",
  quote: "...",
  education: {
    school: "...",
    degree: "...",
    description: "...",
    year: "..."
  }
} as const;
```

### Featured Content (`src/data/featuredContent.ts`)
```typescript
export const featuredContent = {
  name: "K'BRỲ",
  title: "...",
  youtubePersonal: "...",
  youtubeBand: "...",
  facebookPersonal: "...",
  facebookFanpage: "...",
  spotify: "..."
} as const;
```

## Lưu ý quan trọng

⚠️ **Chỉ dành cho môi trường development**
- Tính năng này chỉ hoạt động khi chạy ở local (`npm run dev`)
- Không hoạt động trên production

⚠️ **Projects không lưu vào file**
- Dữ liệu projects được lưu trong Supabase database
- Chỉ có thông tin tĩnh (text, links) mới lưu vào file code

⚠️ **Nhớ commit sau khi chỉnh sửa**
- Nội dung chỉ được lưu vào file local
- Cần commit và push lên Git để cập nhật production

## Thay đổi mật khẩu admin

Mở file `src/contexts/EditContext.tsx` và sửa dòng:

```typescript
const ADMIN_PASSWORD = 'admin123'; // Đổi thành mật khẩu của bạn
```

## Troubleshooting

**Q: Tôi đã chỉnh sửa nhưng không thấy thay đổi?**
- Kiểm tra xem bạn đã paste code vào đúng file trong `src/data/` chưa
- Reload trang (Ctrl/Cmd + R)
- Xóa cache trình duyệt

**Q: Nút "Copy code" không hoạt động?**
- Kiểm tra quyền truy cập clipboard của trình duyệt
- Thử dùng nút "Download" thay thế

**Q: Sau khi deploy lên production, nội dung không cập nhật?**
- Đảm bảo bạn đã commit và push code lên Git
- Deploy lại ứng dụng từ Git repository mới nhất
