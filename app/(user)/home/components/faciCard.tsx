"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { createClient } from '@supabase/supabase-js';

const Popup = dynamic(() => import("./Popup"), { ssr: false });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchImageUrl = async (facilityId: string) => {
  const { data, error } = await supabase
    .storage
    .from('test')
    .getPublicUrl(`facilityImage/${facilityId}.jpg`); // Assuming the file name is facility_id.jpg
  
  if (error) {
    console.error('Error fetching image URL:', error);
    return null;
  }

  return data.publicUrl;
};

const FacilityCard = ({ facility }: { facility: any }) => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const url = await fetchImageUrl(facility.facility_id); // Fetch image based on facility_id
      setImageUrl(url);
    };

    fetchImage();
  }, [facility.facility_id]);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        {imageUrl ? (
          <img
            alt={facility.name}
            className="rounded-lg overflow-hidden bg-cover"
            height="400"
            src={imageUrl}
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        ) : (
          <p>Loading image...</p>
        )}

        <div>
          <h3 className="text-xl font-semibold font-lato">{facility.name}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Capacity: {facility.capacity}
          </p>
        </div>

        {showPopup && <Popup />}
        <Button
          className="bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-50"
          variant="outline"
          onClick={handleOpenPopup}
        >
          Reserve
        </Button>
      </CardContent>
    </Card>
  );
};

export default FacilityCard;