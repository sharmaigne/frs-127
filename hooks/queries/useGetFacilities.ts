"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";

const useGetFacilities = () => {
    const supabase = useSupabase();

    return useQuery(
      {
        queryKey: ["facilities"],
        queryFn: async () => {
          const { data, error } = await supabase
              .from("facilities")
              .select("*");
          
          if (error) {
              throw error;
          }

          return data;
        }
      }
    );
}

export default useGetFacilities;