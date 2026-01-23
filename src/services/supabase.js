import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ayzhglvwxzxqydpyfity.supabase.co";
const supabaseAnonKey = "sb_publishable_Cz-UdBlji0NCjIqA2PkmeQ_Q_79ftXM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
