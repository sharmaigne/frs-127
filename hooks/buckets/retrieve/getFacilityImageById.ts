"use client"
import { supabase } from "@/hooks/buckets/supabaseClient";
import { ChangeEvent } from "react";
// Handle file upload event
const uploadFacilityImage = async (facility_id: string) => {

    const {data} = supabase
                .storage.
                from('images')
                .getPublicUrl(`facility_image/${facility_id}`);
    return data;
};

export default uploadFacilityImage;