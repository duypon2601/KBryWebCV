// Project service for database operations
import { supabase } from '../lib/supabase';
import type { Project, ProjectInsert, ProjectUpdate, ProjectFilters } from '../types/project';

const TABLE_NAME = 'projects';

/**
 * Get all projects with optional filters
 */
export async function getProjects(filters?: ProjectFilters): Promise<Project[]> {
  try {
    let query = supabase.from(TABLE_NAME).select('*');

    if (filters?.category) {
      query = query.eq('category', filters.category);
    }

    if (filters?.is_published !== undefined) {
      query = query.eq('is_published', filters.is_published);
    }

    if (filters?.year) {
      query = query.eq('year', filters.year);
    }

    if (filters?.tags && filters.tags.length > 0) {
      query = query.contains('tags', filters.tags);
    }

    // Order by order field, then by created_at
    query = query.order('order', { ascending: true, nullsFirst: false });
    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
}

/**
 * Get a single project by ID
 */
export async function getProject(id: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching project:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch project:', error);
    return null;
  }
}

/**
 * Get featured projects (shortcut for category='featured')
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  return getProjects({ category: 'featured', is_published: true });
}

/**
 * Create a new project
 */
export async function createProject(project: ProjectInsert): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert([project])
      .select()
      .single();

    if (error) {
      console.error('Error creating project:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to create project:', error);
    return null;
  }
}

/**
 * Update an existing project
 */
export async function updateProject(
  id: string,
  updates: ProjectUpdate
): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating project:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to update project:', error);
    return null;
  }
}

/**
 * Delete a project
 */
export async function deleteProject(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting project:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Failed to delete project:', error);
    return false;
  }
}

/**
 * Bulk create projects
 */
export async function createProjects(projects: ProjectInsert[]): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert(projects)
      .select();

    if (error) {
      console.error('Error creating projects:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Failed to create projects:', error);
    return [];
  }
}

/**
 * Update project order
 */
export async function updateProjectOrder(id: string, order: number): Promise<boolean> {
  try {
    const { error } = await supabase
      .from(TABLE_NAME)
      .update({ order })
      .eq('id', id);

    if (error) {
      console.error('Error updating project order:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Failed to update project order:', error);
    return false;
  }
}

/**
 * Toggle project published status
 */
export async function toggleProjectPublished(id: string): Promise<Project | null> {
  try {
    // First get the current project
    const project = await getProject(id);
    if (!project) return null;

    // Toggle the is_published status
    return updateProject(id, { is_published: !project.is_published });
  } catch (error) {
    console.error('Failed to toggle project published status:', error);
    return null;
  }
}
