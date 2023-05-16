import { createClient } from '@supabase/supabase-js';

// import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/public';

const SUPABASE_URL: string | any = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY: string | any = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
