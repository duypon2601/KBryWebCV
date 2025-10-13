import { useState } from 'react';
import { supabase, IMAGE_BUCKET } from '../lib/supabase';

interface UploadResult {
  url: string | null;
  error: string | null;
}

export const useImageUpload = () => {
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file: File): Promise<UploadResult> => {
    try {
      setUploading(true);

      if (!supabase) {
        return { url: null, error: 'Supabase client is not initialized. Check env variables.' };
      }

      // Tạo tên file unique
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `projects/${fileName}`;

      // Upload file lên Supabase Storage
      const { error } = await supabase.storage
        .from(IMAGE_BUCKET)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Upload error:', error);
        return { url: null, error: error.message };
      }

      // Lấy public URL
      const { data: { publicUrl } } = supabase.storage
        .from(IMAGE_BUCKET)
        .getPublicUrl(filePath);

      return { url: publicUrl, error: null };
    } catch (error) {
      console.error('Upload error:', error);
      return { 
        url: null, 
        error: error instanceof Error ? error.message : 'Upload failed' 
      };
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (url: string): Promise<boolean> => {
    try {
      if (!supabase) {
        return false;
      }
      // Extract file path from URL
      const urlParts = url.split('/');
      const filePath = urlParts.slice(-2).join('/'); // projects/filename.ext
      
      const { error } = await supabase.storage
        .from(IMAGE_BUCKET)
        .remove([filePath]);

      if (error) {
        console.error('Delete error:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Delete error:', error);
      return false;
    }
  };

  return {
    uploadImage,
    deleteImage,
    uploading
  };
};

