-- Create page_content table to store editable content for pages
CREATE TABLE IF NOT EXISTS page_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_name VARCHAR(50) UNIQUE NOT NULL, -- 'home', 'about', 'featured_projects', etc.
  content JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on page_name for faster lookups
CREATE INDEX IF NOT EXISTS idx_page_content_page_name ON page_content(page_name);

-- Insert default content for home page
INSERT INTO page_content (page_name, content) 
VALUES (
  'home',
  '{
    "title": "Về Tôi",
    "description": "Tôi là một chuyên viên tổ chức và dàn dựng chương trình văn hóa – nghệ thuật, với hơn 5 năm gắn bó cùng sân khấu và không gian sáng tạo. Tôi tin rằng mỗi sự kiện là một câu chuyện, và nhiệm vụ của tôi là kể nó bằng cảm xúc, sự chỉn chu và tinh thần \"trách nhiệm – thân thiện – tôn trọng\".",
    "introduction": "Mỗi tác phẩm là một nhịp cầu kết nối tâm hồn – tôi khai thác vẻ đẹp đa chiều của văn hóa và nghệ thuật để kể những câu chuyện đầy cảm xúc, gần gũi mà sâu sắc. Đây không chỉ là hành trình sáng tạo, mà còn là cách tôi lan tỏa cảm hứng và giá trị nhân văn đến cộng đồng."
  }'::jsonb
)
ON CONFLICT (page_name) DO NOTHING;

-- Insert default content for about page
INSERT INTO page_content (page_name, content)
VALUES (
  'about',
  '{
    "aboutMe": "Music has been my universal language since childhood. Growing up in a household filled with vinyl records and late-night jam sessions, I discovered that melodies could express what words couldn''t capture.",
    "inspiration": "My sound draws inspiration from jazz legends like Miles Davis, the raw energy of indie rock, and the intricate production techniques of modern electronic music. This eclectic mix creates a unique sonic landscape that bridges generations and genres.",
    "philosophy": "I believe music should tell stories, evoke emotions, and create connections between strangers. Every track I produce is a chapter in an ongoing narrative about human experience, love, loss, and the beautiful chaos of existence.",
    "quote": "\"Music is the soundtrack to life''s most important moments. My goal is to create those moments for others.\"",
    "education": {
      "school": "Berklee College of Music",
      "degree": "Bachelor''s in Music Production & Engineering",
      "description": "Studied under renowned producers and learned the technical foundations that shape my sound today. Specialized in electronic music composition and live sound engineering.",
      "year": "2018-2022"
    }
  }'::jsonb
)
ON CONFLICT (page_name) DO NOTHING;

-- Insert default content for featured projects section
INSERT INTO page_content (page_name, content)
VALUES (
  'featured_projects',
  '{
    "name": "K''BRỲ",
    "title": "Chuyên viên Tổ chức, dàn dựng chương trình văn hóa, nghệ thuật",
    "youtubePersonal": "https://www.youtube.com/@b.k2541",
    "youtubeBand": "https://www.youtube.com/@noplaninmusic",
    "facebookPersonal": "https://www.facebook.com/bryfingerstyle",
    "facebookFanpage": "https://www.facebook.com/noplaninmusic/",
    "spotify": "https://open.spotify.com/artist/6D9IldP8aT38RwBsX2jvkg?si=urmw8W72RX2wPu3-m9DW_Q&nd=1&dlsi=68ca5ff1c27e4a50"
  }'::jsonb
)
ON CONFLICT (page_name) DO NOTHING;

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_page_content_updated_at 
  BEFORE UPDATE ON page_content 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
