/*
  # Update posts view with likes count

  1. Changes
    - Updates posts_with_authors view to include likes count
    - Preserves existing categories and tags aggregation
    - Adds left join with post_likes table
    
  2. Notes
    - Does not recreate post_likes table since it already exists
    - Maintains existing functionality while adding likes count
*/

-- Drop existing view
DROP VIEW IF EXISTS posts_with_authors;

-- Recreate view with likes count
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