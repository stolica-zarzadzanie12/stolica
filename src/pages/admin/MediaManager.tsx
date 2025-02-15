import React, { useState, useEffect } from 'react';
import { Trash2, Download } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import ImageUpload from '../../components/ImageUpload';
import AdminLayout from '../../components/AdminLayout';

interface MediaFile {
  name: string;
  url: string;
  created_at: string;
  size: number;
}

const MediaManager = () => {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('images')
        .list('uploads', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'created_at', order: 'desc' }
        });

      if (error) throw error;

      const filesWithUrls = await Promise.all(
        (data || []).map(async (file) => {
          const { data: { publicUrl } } = supabase.storage
            .from('images')
            .getPublicUrl(`uploads/${file.name}`);

          return {
            name: file.name,
            url: publicUrl,
            created_at: file.created_at,
            size: file.metadata?.size || 0
          };
        })
      );

      setFiles(filesWithUrls);
    } catch (err) {
      console.error('Error fetching files:', err);
      setError('Nie udało się pobrać listy plików');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (fileName: string) => {
    if (!window.confirm('Czy na pewno chcesz usunąć ten plik?')) return;

    try {
      const { error } = await supabase.storage
        .from('images')
        .remove([`uploads/${fileName}`]);

      if (error) throw error;

      setFiles(files.filter(file => file.name !== fileName));
    } catch (err) {
      console.error('Error deleting file:', err);
      setError('Nie udało się usunąć pliku');
    }
  };

  const handleUploadComplete = (url: string) => {
    fetchFiles(); // Odśwież listę plików po przesłaniu nowego
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('URL skopiowany do schowka!');
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Zarządzanie mediami</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Prześlij nowe zdjęcie</h2>
          <ImageUpload 
            onUploadComplete={handleUploadComplete}
            maxSize={5}
            allowedTypes={['image/jpeg', 'image/png', 'image/webp']}
          />
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold p-6 border-b">Przesłane pliki</h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-[#DAA520] border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {files.map((file) => (
                <div key={file.name} className="border rounded-lg overflow-hidden">
                  <img
                    src={file.url}
                    alt={file.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 truncate mb-2">{file.name}</p>
                    <p className="text-xs text-gray-500 mb-4">
                      {new Date(file.created_at).toLocaleDateString('pl-PL')}
                    </p>
                    <div className="flex justify-between">
                      <button
                        onClick={() => copyToClipboard(file.url)}
                        className="text-[#DAA520] hover:text-[#FFD700] transition-colors duration-300"
                        title="Kopiuj URL"
                      >
                        <Download className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(file.name)}
                        className="text-red-500 hover:text-red-600 transition-colors duration-300"
                        title="Usuń plik"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && files.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Brak przesłanych plików
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default MediaManager;