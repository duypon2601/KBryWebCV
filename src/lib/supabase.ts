import { createClient } from '@supabase/supabase-js';

// Read from VITE_ envs only; do not ship secrets in code
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY');
}

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (undefined as unknown as ReturnType<typeof createClient>);

// Bucket name used across the app (must exist in Supabase Storage)
export const IMAGE_BUCKET = 'projectkbry';
