"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";

const useGetRisks = () => {
    const supabase = useSupabase();

    return useQuery(
      {
        queryKey: ["risks"],
        queryFn: async () => {
          const { data, error } = await supabase
              .from("risks")
              .select("*");
          
          if (error) {
              throw error;
          }

          return data;
        }
      }
    );
}

export default useGetRisks;