import { supabase } from '../lib/supabase';
import type { TimelineItem } from '../types/timeline';

export const timelineService = {
  /**
   * Get all timeline items
   */
  async getAll(): Promise<TimelineItem[]> {
    const { data, error } = await supabase
      .from('timeline_items')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching timeline items:', error);
      throw error;
    }

    return data || [];
  },

  /**
   * Get timeline items by category
   */
  async getByCategory(category: 'work' | 'education' | 'award' | 'freelance'): Promise<TimelineItem[]> {
    const { data, error } = await supabase
      .from('timeline_items')
      .select('*')
      .eq('category', category)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching timeline items by category:', error);
      throw error;
    }

    return data || [];
  },

  /**
   * Get a single timeline item by ID
   */
  async getById(id: string): Promise<TimelineItem | null> {
    const { data, error } = await supabase
      .from('timeline_items')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching timeline item:', error);
      throw error;
    }

    return data;
  },

  /**
   * Create a new timeline item
   */
  async create(item: Omit<TimelineItem, 'id' | 'created_at' | 'updated_at'>): Promise<TimelineItem> {
    const { data, error } = await supabase
      .from('timeline_items')
      .insert([item])
      .select()
      .single();

    if (error) {
      console.error('Error creating timeline item:', error);
      throw error;
    }

    return data;
  },

  /**
   * Update a timeline item
   */
  async update(id: string, updates: Partial<TimelineItem>): Promise<TimelineItem> {
    const { data, error } = await supabase
      .from('timeline_items')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating timeline item:', error);
      throw error;
    }

    return data;
  },

  /**
   * Delete a timeline item
   */
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('timeline_items')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting timeline item:', error);
      throw error;
    }
  },
};
