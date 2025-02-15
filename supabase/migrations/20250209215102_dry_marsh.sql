/*
  # Fix auth users join relationship

  1. Changes
    - Drop existing constraints and policies
    - Properly configure auth.users relation with correct schema reference
    - Add proper PostgREST comments for join handling
    - Re-create policies with proper permissions

  2. Security
    - Maintain RLS policies
    - Ensure proper access control
*/

-- Drop existing constraints and policies
DROP POLICY IF EXISTS "Authors can CRUD their own posts" ON posts;
DROP POLICY IF EXISTS "Public can view published posts" ON posts;
ALTER TABLE posts DROP CONSTRAINT IF EXISTS posts_author_id_fkey;

-- Ensure author_id is UUID and properly referenced
ALTER TABLE posts 
  ALTER COLUMN author_id TYPE uuid USING author_id::uuid;

-- Add foreign key constraint with auth.users using full schema reference
ALTER TABLE posts
  ADD CONSTRAINT posts_author_id_fkey
  FOREIGN KEY (author_id)
  REFERENCES auth.users(id)
  ON DELETE CASCADE;

-- Add proper comment for PostgREST to recognize the relationship
COMMENT ON COLUMN posts.author_id IS 'References auth.users.id';

-- Add explicit schema comment for PostgREST
COMMENT ON TABLE posts IS 'Blog posts with auth.users foreign key';

-- Re-create policies
CREATE POLICY "Authors can CRUD their own posts" ON posts
  FOR ALL USING (auth.uid() = author_id);

CREATE POLICY "Public can view published posts" ON posts
  FOR SELECT USING (status = 'published');

-- Grant necessary permissions
GRANT SELECT ON posts TO anon;
GRANT SELECT ON posts TO authenticated;
GRANT INSERT, UPDATE, DELETE ON posts TO authenticated;

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;