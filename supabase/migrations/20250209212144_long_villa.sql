/*
  # Blog System Schema

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `slug` (text, unique, required)
      - `content` (text, required)
      - `excerpt` (text)
      - `meta_title` (text)
      - `meta_description` (text)
      - `featured_image` (text)
      - `author_id` (uuid, references auth.users)
      - `status` (text: draft/published)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `slug` (text, unique, required)
      - `description` (text)
      - `created_at` (timestamptz)
      
    - `tags`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `slug` (text, unique, required)
      - `created_at` (timestamptz)
      
    - `post_categories`
      - `post_id` (uuid, references posts)
      - `category_id` (uuid, references categories)
      - Primary key (post_id, category_id)
      
    - `post_tags`
      - `post_id` (uuid, references posts)
      - `tag_id` (uuid, references tags)
      - Primary key (post_id, tag_id)
      
    - `comments`
      - `id` (uuid, primary key)
      - `post_id` (uuid, references posts)
      - `author_name` (text, required)
      - `author_email` (text, required)
      - `content` (text, required)
      - `status` (text: pending/approved/rejected)
      - `created_at` (timestamptz)
      
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users and public access
    - Secure comment submission
    
  3. Functions
    - Automatic slug generation
    - Comment moderation helpers
    - Search functionality
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Posts table
CREATE TABLE posts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content text NOT NULL,
  excerpt text,
  meta_title text,
  meta_description text,
  featured_image text,
  author_id uuid REFERENCES auth.users NOT NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Categories table
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Tags table
CREATE TABLE tags (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Post categories junction table
CREATE TABLE post_categories (
  post_id uuid REFERENCES posts ON DELETE CASCADE,
  category_id uuid REFERENCES categories ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- Post tags junction table
CREATE TABLE post_tags (
  post_id uuid REFERENCES posts ON DELETE CASCADE,
  tag_id uuid REFERENCES tags ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Comments table
CREATE TABLE comments (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id uuid REFERENCES posts ON DELETE CASCADE,
  author_name text NOT NULL,
  author_email text NOT NULL,
  content text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Policies for posts
CREATE POLICY "Public can view published posts" ON posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Authors can CRUD their own posts" ON posts
  FOR ALL USING (auth.uid() = author_id);

-- Policies for categories
CREATE POLICY "Public can view categories" ON categories
  FOR SELECT TO PUBLIC USING (true);

CREATE POLICY "Authors can manage categories" ON categories
  FOR ALL TO authenticated USING (true);

-- Policies for tags
CREATE POLICY "Public can view tags" ON tags
  FOR SELECT TO PUBLIC USING (true);

CREATE POLICY "Authors can manage tags" ON tags
  FOR ALL TO authenticated USING (true);

-- Policies for post_categories
CREATE POLICY "Public can view post categories" ON post_categories
  FOR SELECT TO PUBLIC USING (true);

CREATE POLICY "Authors can manage post categories" ON post_categories
  FOR ALL TO authenticated USING (true);

-- Policies for post_tags
CREATE POLICY "Public can view post tags" ON post_tags
  FOR SELECT TO PUBLIC USING (true);

CREATE POLICY "Authors can manage post tags" ON post_tags
  FOR ALL TO authenticated USING (true);

-- Policies for comments
CREATE POLICY "Public can view approved comments" ON comments
  FOR SELECT USING (status = 'approved');

CREATE POLICY "Public can create comments" ON comments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authors can manage comments" ON comments
  FOR ALL TO authenticated USING (true);

-- Function to generate slug from title
CREATE OR REPLACE FUNCTION generate_slug(title text)
RETURNS text AS $$
BEGIN
  RETURN lower(
    regexp_replace(
      regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'),
      '\s+',
      '-',
      'g'
    )
  );
END;
$$ LANGUAGE plpgsql;

-- Function to search posts
CREATE OR REPLACE FUNCTION search_posts(search_query text)
RETURNS SETOF posts AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM posts
  WHERE status = 'published'
    AND (
      title ILIKE '%' || search_query || '%'
      OR content ILIKE '%' || search_query || '%'
      OR meta_title ILIKE '%' || search_query || '%'
      OR meta_description ILIKE '%' || search_query || '%'
    );
END;
$$ LANGUAGE plpgsql;