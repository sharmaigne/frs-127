"use client"

import { useMutation } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { ActivityDesign } from "@/lib/types";

const useAddActivityDesign = () => {
    const supabase = useSupabase();

    return useMutation({
      mutationFn: async (activityDesignData: ActivityDesign["Insert"]) => {
        const { data, error } = await supabase
            .from("activity_design")
            .insert(activityDesignData)
            .select()
            .single();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useAddActivityDesign;