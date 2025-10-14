import { createClient } from '@supabase/supabase-js';

// Read from VITE_ envs only; do not ship secrets in code
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  // Fail fast in development; in production Vercel envs must be set
  // eslint-disable-next-line no-console
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');

// Bucket name used across the app (must exist in Supabase Storage)
export const IMAGE_BUCKET = 'projectkbry';
