/*
  # Add blog post likes functionality
  
  1. New Tables
    - `post_likes`
      - `id` (uuid, primary key)
      - `post_id` (uuid, references posts)
      - `user_ip` (text)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Add policy for public inserts
    - Add policy for authenticated users to view
*/

-- Create post_likes table
CREATE TABLE post_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES posts ON DELETE CASCADE,
  user_ip text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(post_id, user_ip)
);

-- Enable RLS
ALTER TABLE post_likes ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public to like posts" ON post_likes
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public to view likes" ON post_likes
  FOR SELECT
  TO public
  USING (true);

-- Add likes count to posts_with_authors view
DROP VIEW IF EXISTS posts_with_authors;

CREATE OR REPLACE VIEW posts_with_authors AS
SELECT 
  p.*,
  u.email as author_email,
  COALESCE(
    array_agg(DISTINCT jsonb_build_object('name', c.name, 'slug', c.slug)) FILTER (WHERE c.id IS NOT NULL),
    '{}'::jsonb[]
  ) as categories,
  COALESCE(
    array_agg(DISTINCT jsonb_build_object('name', t.name, 'slug', t.slug)) FILTER (WHERE t.id IS NOT NULL),
    '{}'::jsonb[]
  ) as tags,
  COUNT(DISTINCT pl.id) as likes_count
FROM posts p
LEFT JOIN auth.users u ON p.author_id = u.id
LEFT JOIN post_categories pc ON p.id = pc.post_id
LEFT JOIN categories c ON pc.category_id = c.id
LEFT JOIN post_tags pt ON p.id = pt.post_id
LEFT JOIN tags t ON pt.tag_id = t.id
LEFT JOIN post_likes pl ON p.id = pl.post_id
GROUP BY p.id, u.email;