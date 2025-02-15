/*
  # Implement CMS system

  1. New Tables
    - `page_sections` - Stores editable sections of pages
    - `media_library` - Stores information about uploaded media files
    - `navigation_items` - Stores menu structure
    - `page_versions` - Stores page version history
    - `form_submissions` - Stores contact form submissions

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for public access where needed

  3. Changes
    - Add new tables and relationships
    - Add functions for managing content
    - Add policies for content management
*/

-- Create media_library table
CREATE TABLE media_library (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  filename text NOT NULL,
  original_name text NOT NULL,
  mime_type text NOT NULL,
  size integer NOT NULL,
  width integer,
  height integer,
  url text NOT NULL,
  alt_text text,
  caption text,
  uploaded_by uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create page_sections table
CREATE TABLE page_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid REFERENCES service_pages ON DELETE CASCADE,
  section_key text NOT NULL,
  title text,
  content text,
  media_id uuid REFERENCES media_library,
  sort_order integer NOT NULL DEFAULT 0,
  is_visible boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(page_id, section_key)
);

-- Create navigation_items table
CREATE TABLE navigation_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id uuid REFERENCES navigation_items(id),
  title text NOT NULL,
  url text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  is_visible boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create page_versions table
CREATE TABLE page_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid REFERENCES service_pages ON DELETE CASCADE,
  title text NOT NULL,
  content text NOT NULL,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  keywords text[] NOT NULL,
  version_number integer NOT NULL,
  created_by uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_published boolean NOT NULL DEFAULT false
);

-- Create form_submissions table
CREATE TABLE form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL,
  data jsonb NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE media_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Policies for media_library
CREATE POLICY "Public can view media" ON media_library
  FOR SELECT TO public USING (true);

CREATE POLICY "Authenticated users can manage media" ON media_library
  FOR ALL TO authenticated USING (true);

-- Policies for page_sections
CREATE POLICY "Public can view visible sections" ON page_sections
  FOR SELECT TO public USING (is_visible = true);

CREATE POLICY "Authenticated users can manage sections" ON page_sections
  FOR ALL TO authenticated USING (true);

-- Policies for navigation_items
CREATE POLICY "Public can view visible menu items" ON navigation_items
  FOR SELECT TO public USING (is_visible = true);

CREATE POLICY "Authenticated users can manage menu items" ON navigation_items
  FOR ALL TO authenticated USING (true);

-- Policies for page_versions
CREATE POLICY "Authenticated users can view versions" ON page_versions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can create versions" ON page_versions
  FOR INSERT TO authenticated WITH CHECK (true);

-- Policies for form_submissions
CREATE POLICY "Public can create submissions" ON form_submissions
  FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions" ON form_submissions
  FOR SELECT TO authenticated USING (true);

-- Function to create a new page version
CREATE OR REPLACE FUNCTION create_page_version()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO page_versions (
    page_id,
    title,
    content,
    meta_title,
    meta_description,
    keywords,
    version_number,
    created_by,
    is_published
  )
  SELECT
    NEW.id,
    NEW.title,
    NEW.content,
    NEW.meta_title,
    NEW.meta_description,
    NEW.keywords,
    COALESCE(
      (SELECT MAX(version_number) + 1
       FROM page_versions
       WHERE page_id = NEW.id),
      1
    ),
    auth.uid(),
    true;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create version on page update
CREATE TRIGGER create_page_version_trigger
  AFTER INSERT OR UPDATE ON service_pages
  FOR EACH ROW
  EXECUTE FUNCTION create_page_version();

-- Add indexes for better performance
CREATE INDEX idx_page_sections_page_id ON page_sections(page_id);
CREATE INDEX idx_page_versions_page_id ON page_versions(page_id);
CREATE INDEX idx_navigation_items_parent_id ON navigation_items(parent_id);
CREATE INDEX idx_media_library_uploaded_by ON media_library(uploaded_by);

-- Add comments
COMMENT ON TABLE media_library IS 'Stores information about uploaded media files';
COMMENT ON TABLE page_sections IS 'Stores editable sections of pages';
COMMENT ON TABLE navigation_items IS 'Stores menu structure';
COMMENT ON TABLE page_versions IS 'Stores page version history';
COMMENT ON TABLE form_submissions IS 'Stores contact form submissions';

-- Insert initial navigation items
INSERT INTO navigation_items (title, url, sort_order) VALUES
('Strona główna', '/', 1),
('O nas', '/#about', 2),
('Usługi', '/#services', 3),
('Blog', '/blog', 4),
('Kontakt', '/contact', 5);