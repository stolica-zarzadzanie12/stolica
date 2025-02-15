export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      post_likes: {
        Row: {
          id: string
          post_id: string
          user_ip: string
          created_at: string | null
        }
        Insert: {
          id?: string
          post_id: string
          user_ip: string
          created_at?: string | null
        }
        Update: {
          id?: string
          post_id?: string
          user_ip?: string
          created_at?: string | null
        }
      }
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          meta_title: string | null
          meta_description: string | null
          featured_image: string | null
          author_id: string
          status: string
          published_at: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt?: string | null
          meta_title?: string | null
          meta_description?: string | null
          featured_image?: string | null
          author_id: string
          status?: string
          published_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string | null
          meta_title?: string | null
          meta_description?: string | null
          featured_image?: string | null
          author_id?: string
          status?: string
          published_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          created_at?: string | null
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          slug: string
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          slug: string
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          created_at?: string | null
        }
      }
      post_categories: {
        Row: {
          post_id: string
          category_id: string
        }
        Insert: {
          post_id: string
          category_id: string
        }
        Update: {
          post_id?: string
          category_id?: string
        }
      }
      post_tags: {
        Row: {
          post_id: string
          tag_id: string
        }
        Insert: {
          post_id: string
          tag_id: string
        }
        Update: {
          post_id?: string
          tag_id?: string
        }
      }
      comments: {
        Row: {
          id: string
          post_id: string
          author_name: string
          author_email: string
          content: string
          status: string
          created_at: string | null
        }
        Insert: {
          id?: string
          post_id: string
          author_name: string
          author_email: string
          content: string
          status?: string
          created_at?: string | null
        }
        Update: {
          id?: string
          post_id?: string
          author_name?: string
          author_email?: string
          content?: string
          status?: string
          created_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_slug: {
        Args: {
          title: string
        }
        Returns: string
      }
      search_posts: {
        Args: {
          search_query: string
        }
        Returns: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          meta_title: string | null
          meta_description: string | null
          featured_image: string | null
          author_id: string
          status: string
          published_at: string | null
          created_at: string | null
          updated_at: string | null
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}