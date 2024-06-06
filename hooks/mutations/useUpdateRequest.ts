"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { Request } from "@/lib/types";

const useUpdateRequest = () => {
    const supabase = useSupabase();
    const queryClient = useQueryClient();

    return useMutation({
      onSuccess: () => {
        queryClient.refetchQueries({ queryKey: ["requests"] });
      },

      mutationFn: async ({requestData, request_id} : {requestData: Request["Update"], request_id: string}) => {
        const { data, error } = await supabase
            .from("requests")
            .update(requestData)
            .eq("request_id", request_id)
            .select();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useUpdateRequest;
