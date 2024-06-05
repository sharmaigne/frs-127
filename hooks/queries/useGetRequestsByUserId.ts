"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { UUID } from "crypto";

const useGetRequestsByUserId = (requestor_id: UUID) => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["requests", requestor_id],
      queryFn: async () => {
        const { data, error } = await supabase
            .from("requests")
            .select("*")
            .eq("requestor_id", requestor_id);
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useGetRequestsByUserId;