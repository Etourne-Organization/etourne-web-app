import { env } from '$env/dynamic/public';

import { createClient } from '@supabase/supabase-js';

import type { Database } from './database.type';

const SUPABASE_URL: string | any = env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY: string | any = env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
