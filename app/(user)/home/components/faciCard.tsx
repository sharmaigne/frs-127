import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import dynamic from "next/dynamic";

const Popup = dynamic(() => import("./Popup"), { ssr: false });

import { Facility, Request } from "@/lib/types";

const FacilityCard = ({ facility }: { facility: Facility["Row"] }) => {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <img
          alt={facility.name}
          className="rounded-lg overflow-hidden bg-cover"
          height="400"
          src={"/images/atrium.jpg"}
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

        <div className="flex gap-2 justify-end">
          <Link href="">
            <Button variant="outline">View Details</Button>
          </Link>
          {/* <Popup /> */}
          <Link href={`home/reserve/${facility.facility_id}`}>
            <Button >Reserve</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
