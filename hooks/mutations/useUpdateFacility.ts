"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { Facility } from "@/lib/types";

const useUpdateFacility = () => {
    const supabase = useSupabase();
    const queryClient = useQueryClient();

    return useMutation({
      onSuccess: () => {
        queryClient.refetchQueries({ queryKey: ["facilities"] });
      },

      mutationFn: async ({facilityData, facility_id} : {facilityData: Facility["Update"], facility_id: string}) => {
        const { data, error } = await supabase
            .from("facilities")
            .update(facilityData)
            .eq("facility_id", facility_id)
            .select();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useUpdateFacility;