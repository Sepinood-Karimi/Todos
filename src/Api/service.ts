import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://wbosfvraveihoppawswd.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indib3NmdnJhdmVpaG9wcGF3c3dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2Njc1MTAsImV4cCI6MTk5NzI0MzUxMH0.Pp9_qf9ov9zd3xzDTygTVQ_DuOvfNBo9jlkeo5aQ5ak";
const supabaseApiService = createClient(supabaseUrl, supabaseKey);

export default supabaseApiService;
