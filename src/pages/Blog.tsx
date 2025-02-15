import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag, Calendar, User, Settings, Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  likes_count: number;
  author_email?: string;
  categories: { name: string; slug: string }[];
  tags: { name: string; slug: string }[];
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [categories, setCategories] = useState<{ name: string; slug: string }[]>([]);
  const [tags, setTags] = useState<{ name: string; slug: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAdmin(!!session);
    };
    checkAdmin();
  }, []);

  useEffect(() => {
    fetchPosts();
    fetchCategories();
    fetchTags();
  }, [searchQuery, selectedCategory, selectedTag]);

  const fetchPosts = async () => {
    setIsLoading(true);
    let query = supabase
      .from('posts_with_authors')
      .select('*, categories:post_categories(categories(*)), tags:post_tags(tags(*))')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (searchQuery) {
      query = query.textSearch('title', searchQuery);
    }

    if (selectedCategory) {
      query = query.contains('categories', [{ slug: selectedCategory }]);
    }

    if (selectedTag) {
      query = query.contains('tags', [{ slug: selectedTag }]);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data || []);
    }
    setIsLoading(false);
  };

  const fetchCategories = async () => {
    const { data } = await supabase
      .from('categories')
      .select('name, slug')
      .order('name');
    setCategories(data || []);
  };

  const fetchTags = async () => {
    const { data } = await supabase
      .from('tags')
      .select('name, slug')
      .order('name');
    setTags(data || []);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Meta
        title="Blog | Stolica - Zarządzanie Nieruchomościami"
        description="✓ Eksperckie artykuły o zarządzaniu nieruchomościami ✓ Praktyczne porady dla właścicieli i zarządców ✓ Optymalizacja kosztów ✓ Aspekty prawne ✓ Najnowsze trendy w branży"
        type="article"
      />
      <Header />
      <div className="pt-20">
        <div className="bg-[#DAA520] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-4xl font-bold">
                <h1>Blog o zarządzaniu nieruchomościami</h1>
              </div>
              {isAdmin && (
                <Link
                 to="/admin/blog"
                 className="flex items-center space-x-2 px-6 py-3 bg-white text-[#DAA520] rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg font-medium"
                 aria-label="Przejdź do zarządzania blogiem"
                >
                  <Settings className="h-5 w-5" />
                  <span>Panel administracyjny</span>
                </Link>
              )}
            </div>
            <p className="text-center max-w-2xl mx-auto">
              Najnowsze artykuły, porady i aktualności ze świata zarządzania nieruchomościami
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Szukaj..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Kategorie</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => setSelectedCategory(
                        selectedCategory === category.slug ? null : category.slug
                      )}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.slug
                          ? 'bg-[#DAA520] text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Tagi</h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag.slug}
                      onClick={() => setSelectedTag(
                        selectedTag === tag.slug ? null : tag.slug
                      )}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        selectedTag === tag.slug
                          ? 'bg-[#DAA520] text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#DAA520] border-t-transparent"></div>
                </div>
              ) : posts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      {post.featured_image && (
                        <img
                          src={post.featured_image}
                          alt={`Zdjęcie do artykułu: ${post.title}`}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2">
                          <Link
                            to={`/blog/${post.slug}`}
                            className="hover:text-[#DAA520] transition-colors duration-200"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.published_at ? new Date(post.published_at).toLocaleDateString('pl-PL') : '-'}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author_email?.split('@')[0] || 'Admin'}</span>
                          </div>
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            <span>{post.likes_count || 0}</span>
                          </div>
                        </div>
                        {post.categories.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {post.categories.map((category, categoryIndex) => (
                              <span 
                                key={`${post.id}-category-${categoryIndex}-${category.slug}`}
                                className="bg-gray-100 px-2 py-1 rounded-md text-sm"
                              >
                                {category.name}
                              </span>
                            ))}
                          </div>
                        )}
                        {post.tags && post.tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {post.tags.map((tag, tagIndex) => (
                              <span
                                key={`${post.id}-tag-${tagIndex}-${tag.slug}`}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100"
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">Nie znaleziono artykułów.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;