# Quick Database Setup for GitHub Pages Deployment

## Step 1: Set up the Database Table

Before deploying to GitHub Pages, you need to create the `contact_submissions` table in your Supabase database:

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/tddwaowuyxftytownmnc
2. Navigate to **SQL Editor** (in the left sidebar)
3. Copy and paste this SQL script:

```sql
-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for contact form submissions)
CREATE POLICY "Allow public inserts" ON contact_submissions
FOR INSERT WITH CHECK (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT ALL ON contact_submissions TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;
```

4. Click **Run** to execute the script

## Step 2: Deploy to GitHub Pages

Once the table is created, run:

```bash
npm run deploy
```

This will:
1. Build your project for production
2. Deploy it to GitHub Pages
3. Make your portfolio live at: https://Mittens209.github.io/JeannoelProPortfolio/

## Step 3: Test the Contact Form

After deployment:
1. Go to your live portfolio
2. Navigate to the Contact section
3. Fill out and submit the contact form
4. Check your Supabase dashboard → Table Editor → contact_submissions to see if the data was saved

Your Supabase integration will work perfectly on GitHub Pages! 🚀
