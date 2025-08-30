import { createClient } from '@supabase/supabase-js';

// For production deployment, we'll use the actual values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tddwaowuyxftytownmnc.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZHdhb3d1eXhmdHl0b3dubW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0OTU1MjMsImV4cCI6MjA3MjA3MTUyM30.aHGvrkNCvyqx8GN3oesrC3HhQ_YX8KIkZFIrqBsSDuI';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to check if Supabase is available
export const isSupabaseAvailable = () => {
  return supabase !== null;
};
