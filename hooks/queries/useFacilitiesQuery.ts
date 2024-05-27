"use client"

import { useQuery } from "@tanstack/react-query";
import { getFacilities } from "@/hooks/queries/global";
import useSupabase from "@/hooks/useSupabase";

const useFacilitiesQuery = () => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["facilities"],
      queryFn: () => getFacilities(supabase),
    });
}

export default useFacilitiesQuery;