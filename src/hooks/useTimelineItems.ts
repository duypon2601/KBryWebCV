import { useState, useEffect } from 'react';
import { timelineService } from '../services/timelineService';
import type { TimelineItem } from '../types/timeline';

export const useTimelineItems = (category?: 'work' | 'education' | 'award' | 'freelance') => {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTimelineItems = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = category 
          ? await timelineService.getByCategory(category)
          : await timelineService.getAll();
        
        setTimelineItems(data);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching timeline items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTimelineItems();
  }, [category]);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = category 
        ? await timelineService.getByCategory(category)
        : await timelineService.getAll();
      
      setTimelineItems(data);
    } catch (err) {
      setError(err as Error);
      console.error('Error refetching timeline items:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    timelineItems,
    loading,
    error,
    refetch,
  };
};
