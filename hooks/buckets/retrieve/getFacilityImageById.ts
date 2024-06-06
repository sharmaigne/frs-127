"use client"
import { supabase } from "@/hooks/buckets/supabaseClient";
// 
// Handle file upload event
const getFacilityImageById = (facility_id: string) => {

    const {data} = supabase
                .storage.
                from('images')
                .getPublicUrl(`facility_image/${facility_id}`);
    return data;
};

export default getFacilityImageById;