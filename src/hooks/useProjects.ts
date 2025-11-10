// React hooks for project data management
import { useState, useEffect } from 'react';
import type { Project, ProjectInsert, ProjectUpdate, ProjectFilters } from '../types/project';
import * as projectService from '../services/projectService';

/**
 * Hook to fetch and manage projects list
 */
export function useProjects(filters?: ProjectFilters) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await projectService.getProjects(filters);
        setProjects(data);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filters)]);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await projectService.getProjects(filters);
      setProjects(data);
    } catch (err) {
      setError(err as Error);
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    projects,
    loading,
    error,
    refetch
  };
}

/**
 * Hook to fetch and manage a single project
 */
export function useProject(id: string | null) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) {
        setProject(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await projectService.getProject(id);
        setProject(data);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const refetch = async () => {
    if (!id) return;

    try {
      setLoading(true);
      setError(null);
      const data = await projectService.getProject(id);
      setProject(data);
    } catch (err) {
      setError(err as Error);
      console.error('Error fetching project:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    project,
    loading,
    error,
    refetch
  };
}

/**
 * Hook to fetch featured projects
 */
export function useFeaturedProjects() {
  return useProjects({ category: 'featured', is_published: true });
}

/**
 * Hook for project mutations (create, update, delete)
 */
export function useProjectMutations() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createProject = async (project: ProjectInsert): Promise<Project | null> => {
    try {
      setLoading(true);
      setError(null);
      const result = await projectService.createProject(project);
      return result;
    } catch (err) {
      setError(err as Error);
      console.error('Error creating project:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateProject = async (id: string, updates: ProjectUpdate): Promise<Project | null> => {
    try {
      setLoading(true);
      setError(null);
      const result = await projectService.updateProject(id, updates);
      return result;
    } catch (err) {
      setError(err as Error);
      console.error('Error updating project:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: string): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      const result = await projectService.deleteProject(id);
      return result;
    } catch (err) {
      setError(err as Error);
      console.error('Error deleting project:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const togglePublished = async (id: string): Promise<Project | null> => {
    try {
      setLoading(true);
      setError(null);
      const result = await projectService.toggleProjectPublished(id);
      return result;
    } catch (err) {
      setError(err as Error);
      console.error('Error toggling project published status:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    createProject,
    updateProject,
    deleteProject,
    togglePublished,
    loading,
    error
  };
}
