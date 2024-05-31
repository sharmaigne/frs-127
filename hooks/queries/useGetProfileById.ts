"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { UUID } from "crypto";

const useGetProfileById = (user_id: UUID) => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["profiles", user_id],
      queryFn: async () => {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("user_id", user_id)
            .single();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useGetProfileById;