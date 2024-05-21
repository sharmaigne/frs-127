import { useMemo } from "react";
import { createClient } from "@/utils/supabase/client";

const useSupabase = () => {
  return useMemo(createClient, []);
}

export default useSupabase;