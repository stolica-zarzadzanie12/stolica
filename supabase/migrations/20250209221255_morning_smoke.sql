/*
  # Fix posts view with authors

  1. Changes
    - Create view for posts with authors, categories and tags
    - Add proper permissions
    - Add comments for documentation
*/

-- Drop existing view if exists
DROP VIEW IF EXISTS posts_with_authors;

-- Create new view with proper auth handling
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
  ) as tags
FROM posts p
LEFT JOIN auth.users u ON p.author_id = u.id
LEFT JOIN post_categories pc ON p.id = pc.post_id
LEFT JOIN categories c ON pc.category_id = c.id
LEFT JOIN post_tags pt ON p.id = pt.post_id
LEFT JOIN tags t ON pt.tag_id = t.id
GROUP BY p.id, u.email;

-- Grant proper permissions to the view
GRANT SELECT ON posts_with_authors TO anon;
GRANT SELECT ON posts_with_authors TO authenticated;

-- Add documentation
COMMENT ON VIEW posts_with_authors IS 'Posts with author information and related data';