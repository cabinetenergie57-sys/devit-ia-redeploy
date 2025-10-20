/*
  # Create qualified leads table for Lina AI assistant

  1. New Tables
    - `qualified_leads`
      - `id` (uuid, primary key)
      - `name` (text) - Lead's full name
      - `email` (text) - Lead's email address
      - `company` (text, nullable) - Company name
      - `phone` (text, nullable) - Phone number
      - `profile_type` (text) - Type: Data Engineer, Data Analyst, Data Scientist, etc.
      - `stack` (jsonb) - Technical stack (languages, tools, frameworks)
      - `seniority` (text) - Junior, Confirmé, Senior
      - `team_size` (integer, nullable) - Number of profiles needed
      - `timeline` (text, nullable) - Project timeline/urgency
      - `budget_range` (text, nullable) - Estimated budget range
      - `project_description` (text, nullable) - Detailed project description
      - `qualification_score` (integer) - Score from 1-10 based on qualification
      - `status` (text) - new, contacted, qualified, converted, lost
      - `conversation_data` (jsonb) - Full conversation history with Lina
      - `email_sent` (boolean) - Whether notification email was sent
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `qualified_leads` table
    - No public access (only backend/admin can access)
    - Service role will be used for Lina's operations
*/

CREATE TABLE IF NOT EXISTS qualified_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  profile_type text NOT NULL,
  stack jsonb DEFAULT '[]'::jsonb,
  seniority text,
  team_size integer,
  timeline text,
  budget_range text,
  project_description text,
  qualification_score integer DEFAULT 5,
  status text DEFAULT 'new',
  conversation_data jsonb DEFAULT '[]'::jsonb,
  email_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE qualified_leads ENABLE ROW LEVEL SECURITY;

-- No policies = fully locked down (only service role can access)
-- This is intentional as only Lina (via Edge Function) should write here

CREATE INDEX IF NOT EXISTS idx_qualified_leads_email ON qualified_leads(email);
CREATE INDEX IF NOT EXISTS idx_qualified_leads_status ON qualified_leads(status);
CREATE INDEX IF NOT EXISTS idx_qualified_leads_created_at ON qualified_leads(created_at DESC);
