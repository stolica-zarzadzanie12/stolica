/*
  # Fix posts author policy and foreign key

  1. Changes
    - Remove existing RLS policy that uses author_id
    - Drop foreign key constraint if exists
    - Add foreign key constraint to auth.users
    - Re-create RLS policy
    
  2. Details
    - Ensures proper reference to auth.users table
    - Maintains data integrity
    - Preserves security policies
*/

-- Remove existing policy
DROP POLICY IF EXISTS "Authors can CRUD their own posts" ON posts;

-- Remove existing foreign key if exists
DO $$ BEGIN
  IF EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'posts_author_id_fkey'
  ) THEN
    ALTER TABLE posts DROP CONSTRAINT posts_author_id_fkey;
  END IF;
END $$;

-- Add foreign key constraint with auth.users
ALTER TABLE posts
  ADD CONSTRAINT posts_author_id_fkey
  FOREIGN KEY (author_id)
  REFERENCES auth.users(id);

-- Re-create the policy
CREATE POLICY "Authors can CRUD their own posts" ON posts
  FOR ALL USING (auth.uid() = author_id);