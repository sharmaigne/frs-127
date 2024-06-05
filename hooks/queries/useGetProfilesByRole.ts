"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { Profile } from "@/lib/types";

const useGetProfilesByRole = (role: Profile["Row"]["role"]) => {
    const supabase = useSupabase();

    return useQuery({
      queryKey: ["requests", role],
      queryFn: async () => {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("role", role!);
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useGetProfilesByRole;