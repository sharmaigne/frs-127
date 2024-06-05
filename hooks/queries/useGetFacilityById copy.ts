"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { UUID } from "crypto";

const useGetImage = (id: UUID) => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["Image", id],
      queryFn: async () => {
        const { data, error } = await supabase
            .from("Image")
            .select("*")
            .eq("Image",id)
            .single();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useGetFacilityById;