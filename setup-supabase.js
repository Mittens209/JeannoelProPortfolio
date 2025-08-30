#!/usr/bin/env node

/**
 * Supabase Setup Helper Script
 * This script helps you set up Supabase for your portfolio project
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setupSupabase() {
  console.log('🚀 Supabase Setup Helper\n');
  console.log('This script will help you set up Supabase for your portfolio contact form.\n');

  // Check if .env file exists
  const envPath = path.join(__dirname, '.env');
  const envExists = fs.existsSync(envPath);

  if (envExists) {
    console.log('✅ .env file already exists');
    const overwrite = await question('Do you want to overwrite it? (y/N): ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('Setup cancelled.');
      rl.close();
      return;
    }
  }

  console.log('\n📋 Step 1: Get your Supabase credentials');
  console.log('1. Go to https://supabase.com and create a new project');
  console.log('2. Go to Settings → API in your Supabase dashboard');
  console.log('3. Copy your Project URL and anon public key\n');

  const supabaseUrl = await question('Enter your Supabase Project URL: ');
  const supabaseKey = await question('Enter your Supabase anon public key: ');

  if (!supabaseUrl || !supabaseKey) {
    console.log('❌ Both URL and key are required. Setup cancelled.');
    rl.close();
    return;
  }

  // Create .env file
  const envContent = `# Supabase Configuration
VITE_SUPABASE_URL=${supabaseUrl}
VITE_SUPABASE_ANON_KEY=${supabaseKey}

# Add any other environment variables below
`;

  try {
    fs.writeFileSync(envPath, envContent);
    console.log('\n✅ .env file created successfully!');
  } catch (error) {
    console.log('❌ Error creating .env file:', error.message);
    rl.close();
    return;
  }

  console.log('\n📋 Step 2: Set up your database table');
  console.log('1. Go to your Supabase dashboard → Table Editor');
  console.log('2. Click "New Table"');
  console.log('3. Use the following settings:');
  console.log('   - Table Name: contact_submissions');
  console.log('   - Columns: id (uuid, primary key), name (text), email (text), subject (text), message (text), created_at (timestamptz)');
  console.log('4. Or run the SQL script in supabase-setup.sql in your SQL Editor\n');

  console.log('📋 Step 3: Test your setup');
  console.log('1. Start your development server: npm run dev');
  console.log('2. Go to your contact page');
  console.log('3. Use the Supabase test component to verify everything works');
  console.log('4. Remove the test component from Contact.tsx when done\n');

  console.log('🎉 Setup complete! Check SUPABASE_SETUP.md for detailed instructions.');

  rl.close();
}

setupSupabase().catch(console.error);
