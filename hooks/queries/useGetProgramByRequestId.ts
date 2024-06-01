"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { UUID } from "crypto";

const useGetProgramByRequestId = (request_id: UUID) => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["program", request_id],
      queryFn: async () => {
        const { data, error } = await supabase
            .from("program")
            .select("*")
            .eq("request_id", request_id);
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useGetProgramByRequestId;