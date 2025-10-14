import { supabase, IMAGE_BUCKET } from '../lib/supabase';

export const initializeSupabaseStorage = async () => {
  try {
    console.log('Initializing Supabase Storage...');
    
    // Kiểm tra bucket đã tồn tại chưa
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();
    
    if (listError) {
      console.error('Error listing buckets:', listError);
      console.log('This might be due to insufficient permissions. Please create the bucket manually in Supabase Dashboard.');
      return false;
    }

    console.log('Available buckets:', buckets?.map(b => b.name));

    const bucketExists = buckets?.some(bucket => bucket.name === IMAGE_BUCKET);
    
    if (!bucketExists) {
      console.warn(`Bucket "${IMAGE_BUCKET}" does not exist.`);
      console.log('Client-side cannot create buckets due to RLS with anon key.');
      console.log('Please create the bucket manually in Supabase Dashboard:');
      console.log('1. Go to Storage > Buckets');
      console.log(`2. Create new bucket named "${IMAGE_BUCKET}"`);
      console.log('3. Set it as public');
      return false;
    } else {
      console.log(`Bucket ${IMAGE_BUCKET} already exists`);
    }

    return true;
  } catch (error) {
    console.error('Error initializing Supabase storage:', error);
    return false;
  }
};
