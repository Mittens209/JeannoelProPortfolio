import { useState } from 'react';
import { supabase, isSupabaseAvailable } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const SupabaseTest = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<string>('');
  const { toast } = useToast();

  const testSupabaseConnection = async () => {
    setIsTesting(true);
    setTestResult('');

    try {
      if (!isSupabaseAvailable()) {
        setTestResult('❌ Supabase is not available - check your environment variables');
        toast({
          title: "Supabase Test Failed",
          description: "Environment variables not configured",
          variant: "destructive",
        });
        return;
      }

      // Test 1: Basic connection
      const { data, error } = await supabase!.from('contact_submissions').select('count').limit(1);
      
      if (error) {
        setTestResult(`❌ Connection failed: ${error.message}`);
        toast({
          title: "Supabase Test Failed",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      // Test 2: Try to insert a test record
      const testData = {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Supabase Test',
        message: 'This is a test submission to verify Supabase is working.'
      };

      const { error: insertError } = await supabase!
        .from('contact_submissions')
        .insert([testData]);

      if (insertError) {
        setTestResult(`❌ Insert test failed: ${insertError.message}`);
        toast({
          title: "Supabase Test Failed",
          description: insertError.message,
          variant: "destructive",
        });
        return;
      }

      setTestResult('✅ Supabase is working correctly! Test record inserted successfully.');
      toast({
        title: "Supabase Test Successful",
        description: "Your Supabase setup is working perfectly!",
      });

    } catch (error) {
      setTestResult(`❌ Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      toast({
        title: "Supabase Test Failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Card className="p-6 bg-card/30 backdrop-blur-glass">
      <h3 className="text-lg font-semibold mb-4">Supabase Connection Test</h3>
      
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          <p>Status: {isSupabaseAvailable() ? '🟢 Available' : '🔴 Not Available'}</p>
          <p>Environment Variables:</p>
          <ul className="list-disc list-inside ml-4">
            <li>VITE_SUPABASE_URL: {import.meta.env.VITE_SUPABASE_URL ? '✅ Set' : '❌ Missing'}</li>
            <li>VITE_SUPABASE_ANON_KEY: {import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}</li>
          </ul>
        </div>

        <Button 
          onClick={testSupabaseConnection}
          disabled={isTesting || !isSupabaseAvailable()}
          className="w-full"
        >
          {isTesting ? 'Testing...' : 'Test Supabase Connection'}
        </Button>

        {testResult && (
          <div className={`p-3 rounded-md text-sm ${
            testResult.startsWith('✅') 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
              : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
          }`}>
            {testResult}
          </div>
        )}
      </div>
    </Card>
  );
};

export default SupabaseTest;
