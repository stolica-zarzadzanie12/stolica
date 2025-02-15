-- Update service_pages table structure
DO $$ 
BEGIN
  -- Add any missing columns
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'service_pages' AND column_name = 'keywords'
  ) THEN
    ALTER TABLE service_pages ADD COLUMN keywords text[] NOT NULL DEFAULT '{}';
  END IF;

  -- Update column constraints if needed
  ALTER TABLE service_pages 
    ALTER COLUMN title SET NOT NULL,
    ALTER COLUMN meta_title SET NOT NULL,
    ALTER COLUMN meta_description SET NOT NULL,
    ALTER COLUMN content SET NOT NULL;

  -- Ensure timestamps are set correctly
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'service_pages' AND column_name = 'created_at'
  ) THEN
    ALTER TABLE service_pages ADD COLUMN created_at timestamptz DEFAULT now();
  END IF;

  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'service_pages' AND column_name = 'updated_at'
  ) THEN
    ALTER TABLE service_pages ADD COLUMN updated_at timestamptz DEFAULT now();
  END IF;

  -- Ensure RLS is enabled
  ALTER TABLE service_pages ENABLE ROW LEVEL SECURITY;

  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Allow public to view service pages" ON service_pages;
  DROP POLICY IF EXISTS "Allow authenticated users to manage service pages" ON service_pages;

  -- Recreate policies
  CREATE POLICY "Allow public to view service pages" ON service_pages
    FOR SELECT
    TO public
    USING (true);

  CREATE POLICY "Allow authenticated users to manage service pages" ON service_pages
    FOR ALL
    TO authenticated
    USING (true);
END $$;

-- Add comment
COMMENT ON TABLE service_pages IS 'Service pages content with SEO optimization';