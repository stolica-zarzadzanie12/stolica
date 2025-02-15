import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, ArrowLeft, Image, Tag, Plus, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import ImageUpload from '../../components/ImageUpload';
import Editor from '../../components/Editor';

interface Category {
  id: string;
  name: string;
}

interface Tag {
  id: string;
  name: string;
}

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    meta_title: '',
    meta_description: '',
    featured_image: '',
    status: 'draft',
    published_at: '',
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newCategory, setNewCategory] = useState('');
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    if (id) {
      fetchPost();
    }
    fetchCategories();
    fetchTags();
  }, [id]);

  const fetchPost = async () => {
    const { data: post, error } = await supabase
      .from('posts')
      .select(`
        *,
        post_categories(category_id),
        post_tags(tag_id)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching post:', error);
      setError('Nie udało się pobrać artykułu');
    } else if (post) {
      setFormData({
        title: post.title,
        slug: post.slug,
        content: post.content,
        excerpt: post.excerpt || '',
        meta_title: post.meta_title || '',
        meta_description: post.meta_description || '',
        featured_image: post.featured_image || '',
        status: post.status,
        published_at: post.published_at || '',
      });
      setSelectedCategories(post.post_categories.map((pc: any) => pc.category_id));
      setSelectedTags(post.post_tags.map((pt: any) => pt.tag_id));
    }
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');
    if (error) {
      console.error('Error fetching categories:', error);
      setError('Nie udało się pobrać kategorii');
    } else {
      setCategories(data || []);
    }
  };

  const fetchTags = async () => {
    const { data, error } = await supabase
      .from('tags')
      .select('*')
      .order('name');
    if (error) {
      console.error('Error fetching tags:', error);
      setError('Nie udało się pobrać tagów');
    } else {
      setTags(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Sprawdź czy użytkownik jest zalogowany
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('Nie jesteś zalogowany');
      }

      const postData = {
        ...formData,
        published_at: formData.status === 'published' ? new Date().toISOString() : null,
      };

      let postId = id;

      if (!id) {
        // Create new post
        const { data: newPost, error: postError } = await supabase
          .from('posts')
          .insert([{ ...postData, author_id: user.id }])
          .select()
          .single();

        if (postError) {
          console.error('Error creating post:', postError);
          throw new Error('Nie udało się utworzyć artykułu');
        }
        postId = newPost.id;
      } else {
        // Update existing post
        const { error: updateError } = await supabase
          .from('posts')
          .update(postData)
          .eq('id', id);

        if (updateError) {
          console.error('Error updating post:', updateError);
          throw new Error('Nie udało się zaktualizować artykułu');
        }
      }

      // Update categories
      if (postId) {
        const { error: deleteCategories } = await supabase
          .from('post_categories')
          .delete()
          .eq('post_id', postId);

        if (deleteCategories) {
          console.error('Error deleting categories:', deleteCategories);
          throw new Error('Błąd podczas aktualizacji kategorii');
        }

        if (selectedCategories.length > 0) {
          const { error: insertCategories } = await supabase
            .from('post_categories')
            .insert(
              selectedCategories.map((categoryId) => ({
                post_id: postId,
                category_id: categoryId,
              }))
            );

          if (insertCategories) {
            console.error('Error inserting categories:', insertCategories);
            throw new Error('Błąd podczas dodawania kategorii');
          }
        }

        // Update tags
        const { error: deleteTags } = await supabase
          .from('post_tags')
          .delete()
          .eq('post_id', postId);

        if (deleteTags) {
          console.error('Error deleting tags:', deleteTags);
          throw new Error('Błąd podczas aktualizacji tagów');
        }

        if (selectedTags.length > 0) {
          const { error: insertTags } = await supabase
            .from('post_tags')
            .insert(
              selectedTags.map((tagId) => ({
                post_id: postId,
                tag_id: tagId,
              }))
            );

          if (insertTags) {
            console.error('Error inserting tags:', insertTags);
            throw new Error('Błąd podczas dodawania tagów');
          }
        }
      }

      navigate('/admin/blog');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Wystąpił nieoczekiwany błąd';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;

    const { data, error } = await supabase
      .from('categories')
      .insert([{ name: newCategory.trim(), slug: generateSlug(newCategory) }])
      .select()
      .single();

    if (error) {
      console.error('Error adding category:', error);
      setError('Nie udało się dodać kategorii');
    } else if (data) {
      setCategories([...categories, data]);
      setNewCategory('');
    }
  };

  const handleAddTag = async () => {
    if (!newTag.trim()) return;

    const { data, error } = await supabase
      .from('tags')
      .insert([{ name: newTag.trim(), slug: generateSlug(newTag) }])
      .select()
      .single();

    if (error) {
      console.error('Error adding tag:', error);
      setError('Nie udało się dodać tagu');
    } else if (data) {
      setTags([...tags, data]);
      setNewTag('');
    }
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/admin/blog')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold">
            {id ? 'Edytuj artykuł' : 'Nowy artykuł'}
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tytuł
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      title: e.target.value,
                      slug: generateSlug(e.target.value),
                    });
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: generateSlug(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Treść
                </label>
                <Editor
                  value={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-4">SEO</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meta tytuł
                  </label>
                  <input
                    type="text"
                    value={formData.meta_title}
                    onChange={(e) =>
                      setFormData({ ...formData, meta_title: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meta opis
                  </label>
                  <textarea
                    rows={3}
                    value={formData.meta_description}
                    onChange={(e) =>
                      setFormData({ ...formData, meta_description: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                >
                  <option value="draft">Szkic</option>
                  <option value="published">Opublikowany</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Zajawka
                </label>
                <textarea
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Zdjęcie wyróżniające</h3>
                <Image className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                <ImageUpload
                  onUploadComplete={(url) =>
                    setFormData({ ...formData, featured_image: url })
                  }
                />
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">lub</span>
                  <input
                    type="text"
                    value={formData.featured_image}
                    onChange={(e) =>
                      setFormData({ ...formData, featured_image: e.target.value })
                    }
                    placeholder="URL zdjęcia"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                  />
                </div>
              </div>
              {formData.featured_image && (
                <img
                  src={formData.featured_image}
                  alt="Podgląd"
                  className="mt-4 rounded-lg max-h-48 object-cover"
                />
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Kategorie</h3>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      placeholder="Nowa kategoria"
                      className="px-2 py-1 border border-gray-300 rounded-lg text-sm"
                    />
                    <button
                      type="button"
                      onClick={handleAddCategory}
                      className="p-1 text-gray-500 hover:text-[#DAA520]"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, category.id]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter((id) => id !== category.id)
                            );
                          }
                        }}
                        className="rounded border-gray-300 text-[#DAA520] focus:ring-[#DAA520]"
                      />
                      <span className="ml-2 text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Tagi</h3>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Nowy tag"
                      className="px-2 py-1 border border-gray-300 rounded-lg text-sm"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="p-1 text-gray-500 hover:text-[#DAA520]"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  {tags.map((tag) => (
                    <label key={tag.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedTags([...selectedTags, tag.id]);
                          } else {
                            setSelectedTags(
                              selectedTags.filter((id) => id !== tag.id)
                            );
                          }
                        }}
                        className="rounded border-gray-300 text-[#DAA520] focus:ring-[#DAA520]"
                      />
                      <span className="ml-2 text-gray-700">{tag.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center space-x-2 bg-[#DAA520] text-white py-4 px-6 rounded-lg transition-all duration-300 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#FFD700]'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 w-5 animate-spin" />
                  <span>Zapisywanie...</span>
                </>
              ) : (
                <>
                  <Save className="w-5 w-5" />
                  <span>Zapisz</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPost;