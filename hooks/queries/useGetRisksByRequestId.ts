"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { UUID } from "crypto";

const useGetRisksByRequestId = (request_id: UUID) => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["risks", request_id],
      queryFn: async () => {
        const { data, error } = await supabase
            .from("risks")
            .select("*")
            .eq("request_id", request_id);
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useGetRisksByRequestId;