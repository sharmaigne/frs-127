"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { UUID } from "crypto";

const useFacilityByIdQuery = (facility_id: UUID) => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["facilities"],
      queryFn: async () => {
        const { data, error } = await supabase
            .from("facilities")
            .select("*")
            .eq("facility_id", facility_id)
            .single();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useFacilityByIdQuery;