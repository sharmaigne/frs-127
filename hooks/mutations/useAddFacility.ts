"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { Facility } from "@/lib/types";

const useAddFacility = () => {
    const supabase = useSupabase();
    const queryClient = useQueryClient();

    return useMutation({
      onSuccess: () => {
        queryClient.refetchQueries({ queryKey: ["facilities"] });
      },

      mutationFn: async (facilityData: Facility["Row"]) => {
        const { data, error } = await supabase
            .from("facilities")
            .insert([facilityData])
            .select();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useAddFacility;