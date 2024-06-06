"use client"
import { supabase } from "@/hooks/buckets/supabaseClient";
// 
// Handle file upload event
const getActivityDesignByRequestId = (request_id: string) => {

    const {data} = supabase
                .storage
                .from('pdf')
                .getPublicUrl(`activity_design/${request_id}`);
    return data;
};

export default getActivityDesignByRequestId;