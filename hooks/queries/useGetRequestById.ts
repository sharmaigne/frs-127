"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";

const useGetRequestById = () => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["requests"],
      queryFn: async () => {
        const { data, error } = await supabase
            .from("requests")
            .select("*");
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useGetRequestById;