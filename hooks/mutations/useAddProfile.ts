"use server"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/server";
import { Profile } from "@/lib/types";

const useAddProfile = () => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    return useMutation({
      onSuccess: () => {
        queryClient.refetchQueries({ queryKey: ["profiles"] });
      },

      mutationFn: async (profileData: Profile["Insert"]) => {
        const { data, error } = await supabase
            .from("profiles")
            .insert(profileData)
            .select()
            .single();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useAddProfile;