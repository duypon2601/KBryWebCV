import { useState, useEffect } from 'react';
import { getPageContent, updatePageContent } from '../services/pageContentService';
import { message } from 'antd';

export function usePageContent<T extends Record<string, unknown>>(
  pageName: string,
  defaultContent: T
) {
  const [content, setContent] = useState<T>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load content from database on mount
  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const data = await getPageContent(pageName);
        if (data) {
          setContent({ ...defaultContent, ...data } as T);
        }
      } catch (error) {
        console.error(`Failed to load content for ${pageName}:`, error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageName]); // Only re-run if pageName changes

  // Save content to database
  const saveContent = async (newContent: T): Promise<boolean> => {
    setSaving(true);
    try {
      const success = await updatePageContent(pageName, newContent);
      if (success) {
        setContent(newContent);
        message.success('Lưu thành công!');
        return true;
      } else {
        message.error('Không thể lưu nội dung');
        return false;
      }
    } catch (error) {
      console.error(`Failed to save content for ${pageName}:`, error);
      message.error('Có lỗi xảy ra khi lưu');
      return false;
    } finally {
      setSaving(false);
    }
  };

  // Update content locally (without saving to DB)
  const updateContent = (updates: Partial<T>) => {
    setContent(prev => ({ ...prev, ...updates }));
  };

  return {
    content,
    setContent,
    updateContent,
    saveContent,
    loading,
    saving,
  };
}
