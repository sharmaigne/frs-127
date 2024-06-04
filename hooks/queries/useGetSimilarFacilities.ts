"use client"

import { useQuery } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { Facility } from "@/lib/types";

const useGetSimilarFacilities = (facility: Facility["Row"]) => {
  const supabase = useSupabase();

  return useQuery(
    {
      queryKey: ["facilities", facility],
    queryFn: async () => {
        const { data, error } = await supabase
                        .from("facilities")
                        .select("*")
                        .neq("facility_id", facility.facility_id);

        if (error) {
            console.error(error);
            throw error;
        }
        console.log('Fetched facilities:', data);

        // get most similar facilities based on capacity
        const similarFacilities = data.sort((a, b) => Math.abs(a.capacity! - facility.capacity!) - Math.abs(b.capacity! - facility.capacity!)).slice(0, 3);
        console.log(similarFacilities);
        return similarFacilities;
        }
    }
  );
}

export default useGetSimilarFacilities;