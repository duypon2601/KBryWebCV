import { createClient } from '@supabase/supabase-js';

// Thay thế bằng thông tin Supabase của bạn
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://nismnfejbdwweiiyiyby.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pc21uZmVqYmR3d2VpaXlpeWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyOTg2MjEsImV4cCI6MjA3NDg3NDYyMX0.iRyOaIk-lBkXGelUniqHcu92c_43tWAkR1JLyXiBYsA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tên bucket để lưu trữ hình ảnh (đảm bảo khớp với bucket đã tạo)
export const IMAGE_BUCKET = 'projectkbry';
