// "use server"
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createClient } from "@/utils/supabase/server";
// import { EndorsementTicket } from "@/lib/types";

// const useAddEndorsementTicket = () => {
//     const supabase = createClient();
//     const queryClient = useQueryClient();

//     return useMutation({
//       onSuccess: () => {
//         queryClient.refetchQueries({ queryKey: ["endorsement_ticket"] });
//       },

//       mutationFn: async (endorsementData: EndorsementTicket["Insert"]) => {
//         const { data, error } = await supabase
//             .from("endorsement_ticket")
//             .insert(endorsementData)
//             .select()
//             .single();
        
//         if (error) {
//             throw error;
//         }

//         return data;
//       }
//     });
// }

// export default useAddEndorsementTicket;