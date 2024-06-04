"use client"

import { useMutation } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { Request } from "@/lib/types";

const useAddRequest = () => {
    const supabase = useSupabase();

    return useMutation({
      mutationFn: async (requestData: Request["Insert"]) => {
        const { data, error } = await supabase
            .from("requests")
            .insert(requestData)
            .select()
            .single();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useAddRequest;