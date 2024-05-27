import { TypedSupabaseClient } from "@/lib/types";
import { UUID } from "crypto"

export const getFacilities = async (client: TypedSupabaseClient) => {
    const { data, error } = await client
        .from("facilities")
        .select("*");
        
    if (error) {
        throw error;
    }
    
    return data;
}

export const getFacilityById = async (client: any, facility_id: UUID) => {
    const {data, error} = await client
        .from("facilities")
        .select("*")
        .eq("facility_id", facility_id)
        .single();

    if (error) {
        throw error;
    }
    
    return data;
}