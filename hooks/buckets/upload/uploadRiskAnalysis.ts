"use client"
import { supabase } from "@/hooks/buckets/supabaseClient";
import getRiskAnalysisByRequestId from "../retrieve/getRiskAnalysisByRequestId";
import useUpdateRequest from "@/hooks/mutations/useUpdateRequest";
import { ChangeEvent } from "react";

// Handle file upload event
const uploadRiskAnalysis = async (event: ChangeEvent<HTMLInputElement>, request_id: string) => {

    const file = event.target.files?.[0]!;
    const bucket = "pdf"
    const directory = "risk_analysis"

    // Call Storage API to upload file
    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(`${directory}/${request_id}`, file);

    // Handle error if upload failed
    if(error) {
        alert('Error uploading risk analysis pdf.');
        return;
    }
    
    console.log('Risk analysis uploaded successfully!');
};

export default uploadRiskAnalysis;