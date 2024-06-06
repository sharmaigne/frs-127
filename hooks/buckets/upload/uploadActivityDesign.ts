"use client"
import { supabase } from "@/hooks/buckets/supabaseClient";

// Handle file upload event
const uploadActivityDesign = async (file: File, request_id: string) => {

    const bucket = "pdf"
    const directory = "activity_design"

    // Call Storage API to upload file
    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(`${directory}/${request_id}`, file);

    // Handle error if upload failed
    if(error) {
        alert('Error uploading file.');
        return;
    }

    console.log('Activity Design uploaded successfully!');
};

export default uploadActivityDesign;