"use client"
import { supabase } from "@/hooks/buckets/supabaseClient";
// 
// Handle file upload event
const getActivityRequestByRequestId = (request_id: string) => {

    const {data} = supabase
                .storage
                .from('pdf')
                .getPublicUrl(`activity_request/${request_id}`);
    return data;
};

export default getActivityRequestByRequestId;