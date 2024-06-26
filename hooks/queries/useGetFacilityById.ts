"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { UUID } from "crypto";

const useGetFacilityById = (facility_id: UUID) => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["facilities", facility_id],
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

export default useGetFacilityById;