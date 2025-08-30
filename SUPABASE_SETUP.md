# Supabase Setup Guide

This guide will help you set up Supabase for your portfolio's contact form functionality.

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `portfolio-contact-form` (or your preferred name)
   - Database Password: Create a strong password
   - Region: Choose closest to your users
5. Click "Create new project"

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## Step 3: Create Environment File

Create a `.env` file in your project root with:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace the placeholder values with your actual Supabase credentials.

## Step 4: Create the Database Table

1. In your Supabase dashboard, go to **Table Editor**
2. Click **New Table**
3. Create a table with these settings:

**Table Name:** `contact_submissions`

**Columns:**
- `id` (type: `uuid`, default: `gen_random_uuid()`, primary key)
- `name` (type: `text`, not null)
- `email` (type: `text`, not null)
- `subject` (type: `text`, not null)
- `message` (type: `text`, not null)
- `created_at` (type: `timestamptz`, default: `now()`)

**Row Level Security (RLS):**
- Enable RLS: **Yes**
- Policy: Allow all operations for now (we'll secure it later)

## Step 5: Set Up Row Level Security (Optional but Recommended)

1. Go to **Authentication** → **Policies**
2. For the `contact_submissions` table, create these policies:

**Insert Policy:**
```sql
CREATE POLICY "Allow public inserts" ON contact_submissions
FOR INSERT WITH CHECK (true);
```

**Select Policy (for admin viewing):**
```sql
CREATE POLICY "Allow authenticated selects" ON contact_submissions
FOR SELECT USING (auth.role() = 'authenticated');
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your Supabase dashboard → **Table Editor** → **contact_submissions** to see if the data was inserted

## Step 7: Optional - Email Notifications

To receive email notifications when someone submits the contact form:

1. Go to **Database** → **Functions**
2. Create a new function:

```sql
CREATE OR REPLACE FUNCTION handle_contact_submission()
RETURNS TRIGGER AS $$
BEGIN
  -- You can add email notification logic here
  -- For now, just log the submission
  RAISE NOTICE 'New contact submission from: %', NEW.email;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER contact_submission_trigger
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION handle_contact_submission();
```

## Troubleshooting

### Common Issues:

1. **"Supabase client not initialized"**
   - Check that your environment variables are set correctly
   - Restart your development server after adding the `.env` file

2. **"Permission denied"**
   - Check your RLS policies
   - Ensure the `anon` role has insert permissions

3. **"Table doesn't exist"**
   - Verify the table name is exactly `contact_submissions`
   - Check that the table was created successfully

### Security Notes:

- The current setup allows public inserts to the contact_submissions table
- For production, consider adding rate limiting and spam protection
- You might want to add email validation and CAPTCHA

## Next Steps

Once Supabase is working:

1. Add email notifications for new submissions
2. Create an admin dashboard to view submissions
3. Add spam protection (reCAPTCHA, rate limiting)
4. Set up automated responses

Your contact form is already configured to work with Supabase and has a fallback mechanism if Supabase is not available!
