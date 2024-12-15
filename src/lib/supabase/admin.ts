import { createClient } from '@supabase/supabase-js';
import { Database } from '@/lib/supabase/types_db'

// WARNING: Use 'SERVICE_ROLE_KEY' only server-side (admin privileges & RLS policies)
const supabaseAdmin = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

// TODO: Define admin queries only here!
console.log(supabaseAdmin)

