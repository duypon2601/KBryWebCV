// Example: Cách thêm sự kiện mới vào Timeline

/**
 * BƯỚC 1: Thêm sự kiện mới vào mảng timelineData
 */

// Ví dụ thêm sự kiện "Spotify Featured Artist"
{
  year: "2023",
  title: "Spotify Featured Artist",
  location: "Spotify Global",
  description: [
    "Featured in Spotify's Top 100 Electronic playlist",
    "Reached 1 million streams in first month",
    "Playlist placement in 50+ countries",
  ],
  icon: <AudioOutlined />,
  color: "#1db954", // Spotify green
  image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=250&fit=crop",
  category: 'award',
}

/**
 * BƯỚC 2: Cập nhật statistics nếu cần
 */

const stats = {
  totalYears: 8,  // Tăng từ 7 lên 8
  totalProjects: 275,  // Tăng từ 250
  awards: timelineData.filter(item => item.category === 'award').length,  // Auto tính
  collaborations: 65,  // Tăng từ 50
};

/**
 * BƯỚC 3: Chọn màu phù hợp cho từng loại sự kiện
 */

const colorPalette = {
  work: "#f5a623",        // Orange - Công việc chính thức
  education: "#52c41a",   // Green - Học tập
  award: "#9d9abf",       // Purple - Giải thưởng
  freelance: "#1890ff",   // Blue - Freelance
  collaboration: "#ff4d4f", // Red - Hợp tác đặc biệt
  milestone: "#faad14",   // Gold - Cột mốc quan trọng
};

/**
 * BƯỚC 4: Chọn icon phù hợp
 */

import {
  AudioOutlined,      // Âm thanh, music
  BookOutlined,       // Học tập, certification
  CalendarOutlined,   // Sự kiện, timeline
  TrophyOutlined,     // Giải thưởng
  UserOutlined,       // Cá nhân, profile
  TeamOutlined,       // Nhóm, collaboration
  StarOutlined,       // Đặc biệt, featured
  RocketOutlined,     // Khởi đầu, launch
  FireOutlined,       // Hot, trending
  HeartOutlined,      // Passion project
  CrownOutlined,      // Achievement
  ThunderboltOutlined, // Fast, quick win
} from "@ant-design/icons";

/**
 * BƯỚC 5: Tips cho hình ảnh
 */

// Nguồn hình ảnh miễn phí chất lượng cao:
// - Unsplash: https://unsplash.com
// - Pexels: https://pexels.com
// - Pixabay: https://pixabay.com

// Format URL Unsplash với resize:
// https://images.unsplash.com/photo-[ID]?w=400&h=250&fit=crop&q=80

// Tips:
// - Sử dụng tỷ lệ 16:10 (400x250px)
// - Thêm &q=80 để tối ưu chất lượng
// - Sử dụng &fit=crop để crop chính xác

/**
 * BƯỚC 6: Mẫu template đầy đủ
 */

const newEventTemplate = {
  year: "YYYY hoặc YYYY - YYYY",
  title: "Tiêu đề ngắn gọn (3-7 từ)",
  location: "Địa điểm cụ thể hoặc 'Remote'",
  description: [
    "Thành tựu hoặc trách nhiệm chính - điểm 1",
    "Thành tựu hoặc trách nhiệm chính - điểm 2",
    "Thành tựu hoặc trách nhiệm chính - điểm 3 (optional)",
  ],
  icon: <CalendarOutlined />,  // Chọn icon phù hợp
  color: "#f5a623",           // Chọn màu từ palette
  image: "https://...",        // URL hình ảnh chất lượng cao
  category: 'work',           // work | education | award | freelance
};

/**
 * BƯỚC 7: Best practices cho description
 */

// ✅ GOOD
"Lead mixing engineer for 50+ commercial releases"
"Collaborated with Grammy-nominated artists"
"Implemented Dolby Atmos workflow"

// ❌ BAD (quá dài, không specific)
"I worked as a lead mixing engineer and was responsible for many different tasks including mixing, mastering, and collaborating with various artists"

/**
 * BƯỚC 8: Thứ tự sắp xếp
 */

// Timeline được hiển thị từ trên xuống (mới nhất -> cũ nhất)
// Nên sắp xếp events theo thứ tự:
// 1. Present/Current (nếu có)
// 2. Các năm gần nhất
// 3. Các năm xa hơn
// 4. Sự kiện lịch sử

/**
 * BƯỚC 9: Testing checklist
 */

// [ ] Kiểm tra tất cả các filter hoạt động đúng
// [ ] Verify hình ảnh load được
// [ ] Test responsive trên mobile
// [ ] Kiểm tra màu sắc nhất quán
// [ ] Đảm bảo icon hiển thị đúng
// [ ] Test hover effects
// [ ] Verify statistics được tính đúng

/**
 * BƯỚC 10: Troubleshooting
 */

// Nếu filter không hoạt động:
// - Đảm bảo category spelling chính xác (lowercase)
// - Check category type trong interface

// Nếu hình ảnh không load:
// - Test URL trực tiếp trong browser
// - Kiểm tra CORS headers
// - Thử URL từ nguồn khác

// Nếu màu không hiển thị:
// - Verify hex code có dấu #
// - Check CSS override
// - Inspect element trong DevTools

export default newEventTemplate;
