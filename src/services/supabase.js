import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oddinfzteqbmsfbrazka.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kZGluZnp0ZXFibXNmYnJhemthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1NzEyNjEsImV4cCI6MjA0MDE0NzI2MX0.5mimrJ44P2LOBl7UxKhdUHdYYye4oxh_EK88EO9osG0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
