-- Supabase Setup SQL Script
-- Run this in your Supabase SQL Editor (Database > SQL Editor)

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

-- Create policy to allow authenticated users to view submissions (for admin dashboard)
CREATE POLICY "Allow authenticated selects" ON contact_submissions
FOR SELECT USING (auth.role() = 'authenticated');

-- Optional: Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON contact_submissions(created_at DESC);

-- Optional: Create a function to handle new submissions (for future email notifications)
CREATE OR REPLACE FUNCTION handle_contact_submission()
RETURNS TRIGGER AS $$
BEGIN
    -- Log the submission (you can add email notification logic here later)
    RAISE NOTICE 'New contact submission from: % - Subject: %', NEW.email, NEW.subject;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to call the function on new submissions
DROP TRIGGER IF EXISTS contact_submission_trigger ON contact_submissions;
CREATE TRIGGER contact_submission_trigger
    AFTER INSERT ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION handle_contact_submission();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT ALL ON contact_submissions TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;

-- Verify the setup
SELECT 'Table created successfully!' as status;
