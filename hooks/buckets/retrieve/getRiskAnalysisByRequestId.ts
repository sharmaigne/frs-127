"use client"
import { supabase } from "@/hooks/buckets/supabaseClient";
// 
// Handle file upload event
const getRiskAnalysisByRequestId = (request_id: string) => {

    const {data} = supabase
                .storage
                .from('pdf')
                .getPublicUrl(`risk_analysis/${request_id}`);
    return data;
};

export default getRiskAnalysisByRequestId;