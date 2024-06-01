import { type Database } from "@/utils/database.types";
import { SupabaseClient } from "@supabase/supabase-js";

type base = Database["public"]["Tables"];
export type TypedSupabaseClient = SupabaseClient<Database>;

export type Profile = base["profiles"];
export type Facility = base["facilities"];
export type Request = base["requests"];
export type RiskAnalysis = base["risk_analysis"];
export type Risk = base["risks"]
export type ActivityDesign = base["activity_design"];
export type Program = base["program"];