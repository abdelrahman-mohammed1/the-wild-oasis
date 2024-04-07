import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gyfrnfkshijkulykeica.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5ZnJuZmtzaGlqa3VseWtlaWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNDQ4NjUsImV4cCI6MjAyNjYyMDg2NX0.h8nPseRRS5Nd3CnvHM3piKBBPqiClI_Ut8_fyme-pEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
