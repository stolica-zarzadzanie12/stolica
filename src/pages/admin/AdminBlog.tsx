import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit2, Trash2, Eye, Search } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Post {
  id: string;
  title: string;
  slug: string;
  status: string;
  published_at: string;
  author: {
    email: string;
  };
}

const AdminBlog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [searchQuery]);

  const fetchPosts = async () => {
    setIsLoading(true);
    let query = supabase
      .from('posts_with_authors')
      .select('*')
      .order('created_at', { ascending: false });

    if (searchQuery) {
      query = query.textSearch('title', searchQuery);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data || []);
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Czy na pewno chcesz usunąć ten artykuł?')) {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting post:', error);
      } else {
        fetchPosts();
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Zarządzanie blogiem</h1>
        <div className="flex space-x-4">
          <Link
            to="/admin/blog/new"
            className="inline-flex items-center px-4 py-2 bg-[#DAA520] text-white rounded-lg hover:bg-[#FFD700] transition-colors duration-300"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Nowy artykuł
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Szukaj artykułów..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#DAA520] border-t-transparent"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left">Tytuł</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Autor</th>
                  <th className="px-4 py-3 text-left">Data publikacji</th>
                  <th className="px-4 py-3 text-right">Akcje</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-medium">{post.title}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {post.status === 'published' ? 'Opublikowany' : 'Szkic'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      {post.author_email?.split('@')[0] || 'Admin'}
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString('pl-PL')
                        : '-'}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          to={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-2 text-gray-500 hover:text-[#DAA520] transition-colors duration-300"
                          title="Podgląd"
                        >
                          <Eye className="h-5 w-5" />
                        </Link>
                        <Link
                          to={`/admin/blog/edit/${post.id}`}
                          className="p-2 text-gray-500 hover:text-[#DAA520] transition-colors duration-300"
                          title="Edytuj"
                        >
                          <Edit2 className="h-5 w-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-gray-500 hover:text-red-600 transition-colors duration-300"
                          title="Usuń"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {posts.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                Nie znaleziono artykułów
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlog;