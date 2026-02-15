import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a real client if credentials exist, otherwise return a mock
// that gracefully no-ops so the app builds and runs without Supabase
export const supabase =
    supabaseUrl && supabaseAnonKey
        ? createClient(supabaseUrl, supabaseAnonKey)
        : {
            from: () => ({
                insert: async () => ({
                    data: null,
                    error: { message: "Supabase not configured" },
                }),
                select: async () => ({ data: [], error: null }),
            }),
        };

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
