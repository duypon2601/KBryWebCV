import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export const TestSupabaseConnection = () => {
  const [status, setStatus] = useState<'testing' | 'success' | 'error'>('testing');
  const [message, setMessage] = useState('Testing connection...');
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const testConnection = async () => {
      try {
        if (!supabase) {
          setStatus('error');
          setMessage('Supabase client not initialized. Check .env file.');
          return;
        }

        // Test 1: Check connection
        const { error } = await supabase
          .from('projects')
          .select('*', { count: 'exact', head: true });

        if (error) {
          setStatus('error');
          setMessage(`Error: ${error.message}`);
          console.error('Supabase error:', error);
          return;
        }

        // Test 2: Count projects
        const { count } = await supabase
          .from('projects')
          .select('*', { count: 'exact', head: true });

        setProjectCount(count || 0);
        setStatus('success');
        setMessage(`Connected! Found ${count || 0} projects in database.`);

      } catch (err) {
        setStatus('error');
        setMessage(`Exception: ${err instanceof Error ? err.message : 'Unknown error'}`);
        console.error('Test error:', err);
      }
    };

    testConnection();
  }, []);

  const statusColors = {
    testing: '#1890ff',
    success: '#52c41a',
    error: '#ff4d4f',
  };

  return (
    <div style={{
      padding: 16,
      margin: 16,
      border: `2px solid ${statusColors[status]}`,
      borderRadius: 8,
      backgroundColor: '#1e1e1e',
      color: '#eaeaea'
    }}>
      <h3 style={{ margin: 0, color: statusColors[status] }}>
        Supabase Connection Test
      </h3>
      <p style={{ margin: '8px 0', fontSize: 14 }}>
        Status: <strong style={{ color: statusColors[status] }}>{status.toUpperCase()}</strong>
      </p>
      <p style={{ margin: '8px 0', fontSize: 14 }}>
        {message}
      </p>
      {status === 'success' && (
        <p style={{ margin: '8px 0', fontSize: 14 }}>
          Projects count: <strong>{projectCount}</strong>
        </p>
      )}
      {status === 'error' && (
        <div style={{ marginTop: 12, fontSize: 12, color: '#a9a9a9' }}>
          <p>Troubleshooting:</p>
          <ul style={{ marginLeft: 20 }}>
            <li>Check .env file has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY</li>
            <li>Verify table 'projects' exists in Supabase</li>
            <li>Check RLS policies allow reading</li>
            <li>Restart dev server after changing .env</li>
          </ul>
        </div>
      )}
    </div>
  );
};
