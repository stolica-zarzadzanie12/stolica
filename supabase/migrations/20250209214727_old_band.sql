/*
  # Fix posts author relation

  1. Changes
    - Add proper foreign key relationship between posts and auth.users
    - Update posts table to use proper UUID type for author_id
    - Add RLS policy for authors

  2. Security
    - Ensure proper access control for authors
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

-- Re-create the policy
CREATE POLICY "Authors can CRUD their own posts" ON posts
  FOR ALL USING (auth.uid() = author_id);