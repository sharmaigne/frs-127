"use client"
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import dynamic from "next/dynamic";

const Popup = dynamic(() => import("./Popup"), { ssr: false });

import { Facility, Request } from "@/lib/types";

const FacilityCard = ({ facility }: { facility: any }) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold font-lato">{facility.name}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Capacity: {facility.capacity}
          </p>
        </div>
        <img
          alt={facility.name}
          className="rounded-lg overflow-hidden"
          height="400"
          // src={imageSrc}
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />

        {/* <div className="flex flex-wrap gap-2">
          {activities && activities.map((activity) => (
            <Badge
              key={activity}
              className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              variant="secondary"
            >
              {activity}
            </Badge>
          ))}
        </div> */}

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
