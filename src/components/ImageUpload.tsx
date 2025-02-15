import React, { useState, useCallback } from 'react';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ImageUploadProps {
  onUploadComplete?: (url: string) => void;
  maxSize?: number; // in MB
  allowedTypes?: string[];
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onUploadComplete,
  maxSize = 5, // Default 5MB
  allowedTypes = ['image/jpeg', 'image/png', 'image/webp'],
  className = ''
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset states
    setError(null);
    setPreview(null);

    // Validate file type
    if (!allowedTypes.includes(file.type)) {
      setError(`Dozwolone typy plików: ${allowedTypes.join(', ')}`);
      return;
    }

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`Maksymalny rozmiar pliku to ${maxSize}MB`);
      return;
    }

    setIsUploading(true);

    try {
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError, data } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      if (onUploadComplete) {
        onUploadComplete(publicUrl);
      }
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Wystąpił błąd podczas przesyłania pliku');
      setPreview(null);
    } finally {
      setIsUploading(false);
    }
  }, [maxSize, allowedTypes, onUploadComplete]);

  return (
    <div className={`space-y-4 ${className}`}>
      <label className="block w-full cursor-pointer">
        <input
          type="file"
          accept={allowedTypes.join(',')}
          onChange={handleFileChange}
          className="hidden"
          disabled={isUploading}
        />
        <div className={`flex items-center justify-center space-x-2 p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#DAA520] transition-colors duration-300 ${
          isUploading ? 'opacity-50 cursor-not-allowed' : ''
        }`}>
          {isUploading ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin text-[#DAA520]" />
              <span>Przesyłanie...</span>
            </>
          ) : (
            <>
              <ImageIcon className="h-6 w-6 text-gray-400" />
              <span className="text-gray-600">Kliknij lub upuść plik tutaj</span>
            </>
          )}
        </div>
      </label>

      {error && (
        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
          <X className="h-5 w-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {preview && (
        <div className="relative">
          <img
            src={preview}
            alt="Podgląd"
            className="w-full h-48 object-cover rounded-lg"
          />
          <button
            onClick={() => setPreview(null)}
            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Usuń podgląd"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      )}

      <div className="text-sm text-gray-500">
        <p>Maksymalny rozmiar: {maxSize}MB</p>
        <p>Dozwolone formaty: {allowedTypes.map(type => type.split('/')[1]).join(', ')}</p>
      </div>
    </div>
  );
};

export default ImageUpload;