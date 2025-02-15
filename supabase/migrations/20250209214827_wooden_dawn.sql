/*
  # Fix posts author relationship

  1. Changes
    - Drop existing constraints and policies
    - Update author_id column
    - Add proper foreign key relationship to auth.users
    - Add RLS policies for authors
    - Enable proper join capabilities

  2. Security
    - Maintain RLS policies
    - Ensure proper access control
*/

-- Drop existing foreign key if exists
ALTER TABLE posts DROP CONSTRAINT IF EXISTS posts_author_id_fkey;

-- Drop existing policy
DROP POLICY IF EXISTS "Authors can CRUD their own posts" ON posts;

-- Update author_id column to use proper UUID type
ALTER TABLE posts 
  ALTER COLUMN author_id TYPE uuid USING author_id::uuid;

-- Add foreign key constraint with auth.users
ALTER TABLE posts
  ADD CONSTRAINT posts_author_id_fkey
  FOREIGN KEY (author_id)
  REFERENCES auth.users(id)
  ON DELETE CASCADE;

-- Enable proper join capabilities
COMMENT ON COLUMN posts.author_id IS 'References auth.users(id)';

-- Re-create the policy
CREATE POLICY "Authors can CRUD their own posts" ON posts
  FOR ALL USING (auth.uid() = author_id);