-- Create projects table in Supabase
-- Run this SQL in Supabase SQL Editor: https://app.supabase.com/project/_/sql

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Core project information
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  genre TEXT NOT NULL,
  year TEXT NOT NULL,
  image_url TEXT NOT NULL,
  
  -- Classification
  category TEXT DEFAULT 'portfolio' CHECK (category IN ('featured', 'portfolio', 'other')),
  
  -- Ordering and visibility
  "order" INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  
  -- Additional metadata
  tags TEXT[] DEFAULT '{}',
  metadata JSONB DEFAULT '{}'
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_is_published ON projects(is_published);
CREATE INDEX IF NOT EXISTS idx_projects_year ON projects(year);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects("order");
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_tags ON projects USING GIN(tags);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to call the function before updates
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow public read access to published projects
CREATE POLICY "Public can view published projects"
  ON projects FOR SELECT
  USING (is_published = true);

-- Allow authenticated users to view all projects
CREATE POLICY "Authenticated users can view all projects"
  ON projects FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert projects
CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update projects
CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete projects
CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Insert some sample data (optional - remove if not needed)
INSERT INTO projects (title, description, genre, year, image_url, category, "order") VALUES
  ('Neon Dreams', 'An electronic synthwave journey through neon-lit cityscapes', 'Electronic • Synthwave', '2024', 'https://c.animaapp.com/BleKbnjN/img/img-2@2x.png', 'featured', 1),
  ('Midnight Score', 'A cinematic orchestral composition for film and media', 'Cinematic • Orchestral', '2024', 'https://c.animaapp.com/BleKbnjN/img/img-3@2x.png', 'featured', 2),
  ('Digital Echoes', 'Ambient electronic soundscapes for meditation and focus', 'Ambient • Electronic', '2024', 'https://c.animaapp.com/BleKbnjN/img/img-4@2x.png', 'featured', 3)
ON CONFLICT DO NOTHING;

-- Grant permissions (if needed)
GRANT SELECT, INSERT, UPDATE, DELETE ON projects TO authenticated;
GRANT SELECT ON projects TO anon;

COMMENT ON TABLE projects IS 'Stores project information for portfolio and featured sections';
COMMENT ON COLUMN projects.category IS 'Project category: featured (homepage), portfolio (portfolio page), or other';
COMMENT ON COLUMN projects."order" IS 'Display order (lower numbers appear first)';
COMMENT ON COLUMN projects.is_published IS 'Whether the project is visible to public users';
COMMENT ON COLUMN projects.metadata IS 'Additional flexible data stored as JSON';
