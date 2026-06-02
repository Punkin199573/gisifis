import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  active: boolean;
}

export interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'contact' | 'inquiry' | 'loan';
  submitted_at: string;
  status: 'new' | 'read' | 'responded';
}

export interface AdminUser {
  id: string;
  username: string;
  password_hash: string;
  created_at: string;
  last_login?: string;
}

// Initialize Supabase tables (can be called from admin)
export async function initializeTables() {
  try {
    // Create newsletter_subscribers table
    await supabase.rpc('create_tables_if_not_exists');
    return { success: true };
  } catch (error) {
    console.error('[v0] Error initializing tables:', error);
    return { success: false, error };
  }
}

// Newsletter functions
export async function addNewsletterSubscriber(email: string) {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email,
          subscribed_at: new Date().toISOString(),
          active: true,
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('[v0] Error adding subscriber:', error);
    return { success: false, error };
  }
}

export async function getNewsletterSubscribers() {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('active', true)
      .order('subscribed_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('[v0] Error fetching subscribers:', error);
    return { success: false, error };
  }
}

// Form submission functions
export async function addFormSubmission(submission: Omit<FormSubmission, 'id' | 'submitted_at' | 'status'>) {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([
        {
          ...submission,
          submitted_at: new Date().toISOString(),
          status: 'new',
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('[v0] Error adding submission:', error);
    return { success: false, error };
  }
}

export async function getFormSubmissions() {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('[v0] Error fetching submissions:', error);
    return { success: false, error };
  }
}

export async function updateSubmissionStatus(id: string, status: FormSubmission['status']) {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('[v0] Error updating submission:', error);
    return { success: false, error };
  }
}
