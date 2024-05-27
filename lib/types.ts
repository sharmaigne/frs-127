import { type Database } from "@/utils/database.types";
import { SupabaseClient } from "@supabase/supabase-js";

type base = Database["public"]["Tables"];
export type TypedSupabaseClient = SupabaseClient<Database>;

export type Profile = base["profiles"];
export type Facility = base["facilities"];
export type Request = base["requests"];