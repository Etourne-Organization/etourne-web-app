import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';

export const TEST = import.meta.env.VITE_TEST;

// import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/public';

const SUPABASE_URL: string | any = env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY: string | any = env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
