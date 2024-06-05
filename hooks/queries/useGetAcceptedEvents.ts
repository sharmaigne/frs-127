"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";

// Get all events that have been approved and are upcoming
const useGetAcceptedEvents = () => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["requests"],
      queryFn: async () => {
        const { data, error } = await supabase
            .from("requests")
            .select("*")
            .eq("status", "Accepted");
        
        if (error) {
            throw error;
        }
        return data;
      }
    });
}

export default useGetAcceptedEvents;