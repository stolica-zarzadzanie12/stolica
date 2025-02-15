import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, MessageCircle, Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Post {
  id: string;
  title: string;
  content: string;
  meta_title: string;
  meta_description: string;
  featured_image: string;
  published_at: string;
  likes_count: number;
  author: {
    email: string;
  };
  categories: { name: string; slug: string }[];
  tags: { name: string; slug: string }[];
}

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [hasLiked, setHasLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLikeLoading, setIsLikeLoading] = useState(true);
  const [newComment, setNewComment] = useState({
    author_name: '',
    author_email: '',
    content: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAdmin(!!session);
    };
    checkAdmin();
  }, []);

  useEffect(() => {
    fetchPost().then(() => {
      if (post?.id) {
        fetchComments();
      }
    });
  }, [slug]);

  useEffect(() => {
    if (post?.meta_title) {
      document.title = post.meta_title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.meta_description || '');
      }
    }
  }, [post]);

  const fetchPost = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('posts_with_authors')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error) {
      console.error('Error fetching post:', error);
    } else {
      setPost(data);
      if (data?.id) {
        fetchComments();
      }
    }
    setIsLoading(false);
  };

  const handleLike = async () => {
    if (!post?.id || hasLiked || isLikeLoading) return;

    setIsLikeLoading(true);
    try {
      const { error } = await supabase
        .from('post_likes')
        .insert([
          {
            post_id: post.id,
            user_ip: window.location.hostname
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          return;
        }
        throw error;
      }

      setHasLiked(true);
      setLikesCount(prev => prev + 1);
    } catch (err) {
      console.error('Error liking post:', err);
    } finally {
      setIsLikeLoading(false);
      await checkUserLike();
    }
  };

  const checkUserLike = async () => {
    if (!post?.id) return;
    
    setIsLikeLoading(true);
    try {
      const { data, error } = await supabase
        .from('post_likes')
        .select('id')
        .eq('post_id', post.id)
        .eq('user_ip', window.location.hostname);

      if (error) {
        console.error('Error checking like status:', error);
      } else {
        setHasLiked(data && data.length > 0);
      }
    } catch (err) {
      console.error('Error checking like status:', err);
    } finally {
      setIsLikeLoading(false);
    }
  };

  useEffect(() => {
    if (post) {
      setLikesCount(post.likes_count || 0);
      checkUserLike();
    }
  }, [post]);

  const fetchComments = async () => {
    if (!post?.id) return;

    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', post?.id)
      .eq('status', 'approved')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data || []);
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from('comments')
      .insert([
        {
          post_id: post?.id,
          ...newComment
        }
      ]);

    if (error) {
      console.error('Error submitting comment:', error);
    } else {
      setNewComment({
        author_name: '',
        author_email: '',
        content: ''
      });
      alert('Komentarz został dodany i czeka na moderację.');
    }

    setIsSubmitting(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-20 flex justify-center items-center h-[calc(100vh-5rem)]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#DAA520] border-t-transparent"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-20 container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Artykuł nie został znaleziony</h1>
          <Link
            to="/blog"
            className="inline-flex items-center text-[#DAA520] hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Wróć do bloga
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Meta
        title={post?.meta_title || post?.title || 'Blog | Stolica - Zarządzanie Nieruchomościami'}
        description={post?.meta_description || post?.excerpt || 'Artykuł na blogu Stolica - Zarządzanie Nieruchomościami'}
        image={post?.featured_image}
        type="article"
        url={`https://stolica-zarzadzanienieruchomosciami.pl/blog/${post?.slug}`}
        publishedTime={post?.published_at}
        modifiedTime={post?.updated_at}
        keywords={post?.tags?.map(tag => tag.name).join(', ')}
        author={post?.author_email?.split('@')[0] || 'Admin'}
      />
      <Header />
      <div className="pt-20">
        <div className="bg-[#DAA520] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
          </div>
        </div>
        {post.featured_image && (
          <div
            className="w-full h-[400px] bg-center bg-cover"
            style={{ backgroundImage: `url(${post.featured_image})` }}
          />
        )}
        
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-[#DAA520] hover:underline mb-8"
              aria-label="Powrót do listy artykułów"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Wróć do bloga
            </Link>
            
            <div className="flex items-center space-x-6 mb-8">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 transition-colors duration-300 ${
                  hasLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                } transition-colors duration-300`}
                disabled={hasLiked}
              >
                <Heart className={`h-6 w-6 ${hasLiked ? 'fill-current' : ''}`} />
                <span>{likesCount}</span>
              </button>
              {isLikeLoading && (
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#DAA520] border-t-transparent"></div>
              )}
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-4xl font-bold mb-6">{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {isAdmin && (
              <Link
                to={`/admin/blog/edit/${post.id}`}
                className="inline-block mb-6 px-4 py-2 bg-[#DAA520] text-white rounded-lg hover:bg-[#FFD700] transition-colors duration-300"
                aria-label={`Edytuj artykuł: ${post.title}`}
              >
                Edytuj artykuł
              </Link>
            )}

            <div className="flex items-center text-gray-500 space-x-6 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {new Date(post.published_at).toLocaleDateString('pl-PL')}
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Admin
              </div>
            </div>

            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.categories.map((category) => (
                  <span
                    key={category.slug}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            {post.tags.length > 0 && (
              <div className="border-t border-gray-200 pt-8 mb-12">
                <h2 className="text-lg font-semibold mb-4">Tagi</h2>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.slug}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Comments Section */}
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <MessageCircle className="h-6 w-6 mr-2" />
                Komentarze ({comments.length})
              </h3>

              {/* Comment List */}
              <div className="space-y-8 mb-12">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold">{comment.author_name}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.created_at).toLocaleDateString('pl-PL')}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-6">Dodaj komentarz</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Imię *
                    </label>
                    <input
                      type="text"
                      required
                      value={newComment.author_name}
                      onChange={(e) => setNewComment({
                        ...newComment,
                        author_name: e.target.value
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={newComment.author_email}
                      onChange={(e) => setNewComment({
                        ...newComment,
                        author_email: e.target.value
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Treść komentarza *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newComment.content}
                    onChange={(e) => setNewComment({
                      ...newComment,
                      content: e.target.value
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#DAA520] text-white py-3 rounded-lg font-medium hover:bg-[#FFD700] transition-colors duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Dodaj komentarz'}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  * Komentarz zostanie opublikowany po zatwierdzeniu przez moderatora
                </p>
              </form>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost