"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";

const useGetProfiles = () => {
    const supabase = useSupabase();

    return useQuery(
      {
        queryKey: ["profiles"],
        queryFn: async () => {
          const { data, error } = await supabase
              .from("profiles")
              .select("*");
          
          if (error) {
              throw error;
          }

          return data;
        }
      }
    );
}

export default useGetProfiles;