// Test storage connection
import { supabase } from '../lib/supabase';

export async function testStorageConnection() {
  console.log('🧪 Testing Supabase Storage...');
  
  if (!supabase) {
    console.error('❌ Supabase client not initialized');
    return;
  }

  try {
    // Test 1: List buckets
    const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
    console.log('📦 Buckets:', buckets);
    if (bucketsError) console.error('❌ Buckets error:', bucketsError);

    // Test 2: Try to access projectkbry bucket directly
    const { data: files, error: filesError } = await supabase.storage
      .from('projectkbry')
      .list();
    
    console.log('📁 Files in projectkbry:', files);
    if (filesError) console.error('❌ Files error:', filesError);

    // Test 3: Get public URL test
    const testUrl = supabase.storage
      .from('projectkbry')
      .getPublicUrl('test.jpg');
    
    console.log('🔗 Test public URL:', testUrl);

  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}
