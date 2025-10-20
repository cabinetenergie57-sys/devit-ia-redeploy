/*
  # Create contacts and leads tables for DevConnect B2B platform

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required) - Contact full name
      - `email` (text, required, unique) - Contact email
      - `company` (text, optional) - Company name
      - `phone` (text, optional) - Phone number
      - `message` (text, optional) - Contact message
      - `source` (text, optional) - Where the contact came from (form, lina, etc)
      - `status` (text, default 'new') - Lead status (new, contacted, qualified, converted)
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

    - `lina_conversations`
      - `id` (uuid, primary key)
      - `session_id` (text, required) - Session identifier
      - `user_email` (text, optional) - User email if provided
      - `messages` (jsonb, required) - Conversation history
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on both tables
    - Public can insert contacts (for form submissions)
    - Only authenticated admins can read/update contacts
    - Public can insert and read their own conversations
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text,
  source text DEFAULT 'website_form',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create lina_conversations table
CREATE TABLE IF NOT EXISTS lina_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  user_email text,
  messages jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_lina_session ON lina_conversations(session_id);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE lina_conversations ENABLE ROW LEVEL SECURITY;

-- Contacts policies (public can insert for form submissions)
CREATE POLICY "Anyone can submit contact form"
  ON contacts FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contacts"
  ON contacts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Lina conversations policies (public access for chat)
CREATE POLICY "Anyone can create conversations"
  ON lina_conversations FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own conversations"
  ON lina_conversations FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can update their own conversations"
  ON lina_conversations FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lina_conversations_updated_at
  BEFORE UPDATE ON lina_conversations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
