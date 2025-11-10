-- Seed data for portfolio projects
-- Run this in Supabase SQL Editor if you don't have any projects yet

-- First, check if we have any projects
SELECT COUNT(*) FROM projects;

-- If count is 0, insert sample projects
INSERT INTO projects (title, description, genre, year, image_url, category, "order", is_published, metadata)
VALUES
  (
    'Dự án 1',
    'Dự án âm nhạc đầu tiên',
    'Music Production',
    '2024',
    '/img.png',
    'portfolio',
    1,
    true,
    '{"duration": "4:32", "video_url": "https://www.youtube.com/watch?v=ysz5S6PUM-U"}'::jsonb
  ),
  (
    'Dự án 2',
    'Dự án âm nhạc thứ hai',
    'Electronic Music',
    '2024',
    '/image.png',
    'portfolio',
    2,
    true,
    '{"duration": "45:12", "video_url": "https://www.youtube.com/watch?v=jNQXAC9IVRw"}'::jsonb
  ),
  (
    'Dự án 3',
    'Dự án âm nhạc thứ ba',
    'Ambient',
    '2023',
    '/img-2.png',
    'portfolio',
    3,
    true,
    '{"duration": "38:45", "video_url": "https://www.youtube.com/watch?v=oHg5SJYRHA0"}'::jsonb
  ),
  (
    'Dự án 4',
    'Dự án âm nhạc thứ tư',
    'Live Performance',
    '2023',
    '/img-3.png',
    'portfolio',
    4,
    true,
    '{"duration": "12:20", "video_url": "https://www.youtube.com/watch?v=aqz-KE-bpKQ"}'::jsonb
  ),
  (
    'Dự án 5',
    'Dự án âm nhạc thứ năm',
    'Visual Score',
    '2023',
    '/img-4.png',
    'portfolio',
    5,
    true,
    '{"duration": "8:15", "video_url": "https://www.youtube.com/watch?v=ScMzIvxBSi4"}'::jsonb
  ),
  (
    'Dự án 6',
    'Dự án âm nhạc thứ sáu',
    'Experimental',
    '2022',
    '/img-5.png',
    'portfolio',
    6,
    true,
    '{"duration": "22:30", "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}'::jsonb
  )
ON CONFLICT DO NOTHING;

-- Verify the data
SELECT id, title, category, year, is_published, created_at FROM projects ORDER BY "order";
