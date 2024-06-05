"use client"
import { supabase } from "@/app/king/supabaseCLient";
import { ChangeEvent } from "react";
// Handle file upload event
const uploadFacilityImage = async (event: ChangeEvent<HTMLInputElement>, facility_id: string) => {

    const file = event.target.files?.[0]!;
    const bucket = "images"
    const directory = "facility_image"

    // Call Storage API to upload file
    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(`${directory}/${facility_id}`, file);

    // Handle error if upload failed
    if(error) {
        alert('Error uploading file.');
        return;
    }

    alert('Facility image uploaded successfully!');
};

export default uploadFacilityImage;