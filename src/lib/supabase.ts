import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Contact {
  id?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  source?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface LinaConversation {
  id?: string;
  session_id: string;
  user_email?: string;
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
  }>;
  created_at?: string;
  updated_at?: string;
}
