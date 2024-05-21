import { Database } from "@/utils/database.types";

type base = Database["public"]["Tables"];

export type Profile = base["profiles"];
export type Facility = base["facilities"];
export type Request = base["requests"];