"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { Program } from "@/lib/types";

const useAddPrograms = () => {
    const supabase = useSupabase();
    const queryClient = useQueryClient();

    return useMutation({
      onSuccess: () => {
        queryClient.refetchQueries({ queryKey: ["programs"] });
      },

      mutationFn: async (programData: Program["Insert"][]) => {
        const { data, error } = await supabase
            .from("program")
            .insert(programData)
            .select();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useAddPrograms