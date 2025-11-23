export interface TimelineItem {
  id?: string;
  year: string;
  title: string;
  location: string;
  description: string[];
  icon: string;
  color: string;
  image: string;
  category: 'work' | 'education' | 'award' | 'freelance';
  display_order: number;
  created_at?: string;
  updated_at?: string;
}
