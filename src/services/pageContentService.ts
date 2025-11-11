// Page content service for database operations
import { supabase } from '../lib/supabase';

const TABLE_NAME = 'page_content';

export interface PageContent {
  id: string;
  page_name: string;
  content: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

/**
 * Get content for a specific page
 */
export async function getPageContent(pageName: string): Promise<Record<string, unknown> | null> {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('content')
      .eq('page_name', pageName)
      .single();

    if (error) {
      console.error(`Error fetching content for page ${pageName}:`, error);
      return null;
    }

    return data?.content || null;
  } catch (error) {
    console.error(`Failed to fetch content for page ${pageName}:`, error);
    return null;
  }
}

/**
 * Update content for a specific page
 */
export async function updatePageContent(
  pageName: string,
  content: Record<string, unknown>
): Promise<boolean> {
  try {
    const { error } = await supabase
      .from(TABLE_NAME)
      .upsert(
        {
          page_name: pageName,
          content,
          updated_at: new Date().toISOString()
        },
        {
          onConflict: 'page_name'
        }
      );

    if (error) {
      console.error(`Error updating content for page ${pageName}:`, error);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Failed to update content for page ${pageName}:`, error);
    return false;
  }
}

/**
 * Get all page content
 */
export async function getAllPageContent(): Promise<PageContent[]> {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .order('page_name');

    if (error) {
      console.error('Error fetching all page content:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch all page content:', error);
    return [];
  }
}

/**
 * Delete content for a specific page
 */
export async function deletePageContent(pageName: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .eq('page_name', pageName);

    if (error) {
      console.error(`Error deleting content for page ${pageName}:`, error);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Failed to delete content for page ${pageName}:`, error);
    return false;
  }
}
