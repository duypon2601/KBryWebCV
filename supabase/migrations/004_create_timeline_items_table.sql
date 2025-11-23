-- Create timeline_items table
CREATE TABLE IF NOT EXISTS timeline_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    year TEXT NOT NULL,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    description JSONB NOT NULL,
    icon TEXT NOT NULL,
    color TEXT NOT NULL,
    image TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('work', 'education', 'award', 'freelance')),
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on category for faster filtering
CREATE INDEX idx_timeline_items_category ON timeline_items(category);

-- Create index on display_order for sorting
CREATE INDEX idx_timeline_items_display_order ON timeline_items(display_order);

-- Enable Row Level Security
ALTER TABLE timeline_items ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access to timeline_items"
    ON timeline_items
    FOR SELECT
    TO public
    USING (true);

-- Create policy to allow authenticated users to insert
CREATE POLICY "Allow authenticated users to insert timeline_items"
    ON timeline_items
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Create policy to allow authenticated users to update
CREATE POLICY "Allow authenticated users to update timeline_items"
    ON timeline_items
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create policy to allow authenticated users to delete
CREATE POLICY "Allow authenticated users to delete timeline_items"
    ON timeline_items
    FOR DELETE
    TO authenticated
    USING (true);
