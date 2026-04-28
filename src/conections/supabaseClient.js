import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://altxwcxmnlsgqmfiresl.supabase.co'
const supabaseKey = 'sb_publishable_80gUgzqhTB48onlh54JCng_uNZBjXmD'

export const supabase = createClient(supabaseUrl, supabaseKey)