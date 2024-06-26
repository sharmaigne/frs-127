"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { UUID } from "crypto";

const useGetRequestById = (request_id: UUID) => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["requests", request_id],
      queryFn: async () => {
        const { data, error } = await supabase
            .from("requests")
            .select("*")
            .eq("request_id", request_id)
            .single();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useGetRequestById;