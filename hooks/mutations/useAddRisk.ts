"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { Risk } from "@/lib/types";

const useAddRisk = () => {
    const supabase = useSupabase();
    const queryClient = useQueryClient();

    return useMutation({
      onSuccess: () => {
        queryClient.refetchQueries({ queryKey: ["risks"] });
      },

      mutationFn: async (riskData: Risk["Row"]) => {
        const { data, error } = await supabase
            .from("risks")
            .insert([riskData])
            .select();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useAddRisk