
"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import FacilityPopup from "./FacilityPopup";

const FacilityCard = ({ facility }: { facility: any }) => {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <img
          alt={facility.name}
          className="rounded-lg overflow-hidden bg-cover"
          height="400"
          src={"/images/atrium.jpg"} // TODO: add placeholder image
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />

        <div>
          <h3 className="text-xl font-semibold font-lato">{facility.name}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Capacity: {facility.capacity}
          </p>
        </div>

        <div className="flex gap-3 justify-end">
          <FacilityPopup facility={facility}/>
          <Button asChild>
            <Link href={`/home/formrequest/${facility.facility_id}`}>
              Reserve
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
