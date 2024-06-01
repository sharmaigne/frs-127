import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// need desc and images for facility sa lib/types. please update.
// pls change facility manager info to proper

interface FacilityDetailsProps {
  facility: {
    name: string;
    location: string;
    capacity: string;
    type: string;
    description: string;
    image_url: string;
    facility_manager: string;
    facility_manager_email: string;
  };
}

const FacilityDetails = ({ facility }: FacilityDetailsProps) => {

  return (
    <>
        <div className="sm:max-w-[1000px] max-h-[90vh] overflow-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={facility.image_url || "/placeholder.svg"}
                alt="Facility Image"
                width={800}
                height={600}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{facility.name}</h1>
                <p className="text-gray-500 dark:text-gray-400">{facility.location}</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Facility Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Capacity</p>
                    <p>{facility.capacity}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Type</p>
                    <p>{facility.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Facility Manager</p>
                    <p>{facility.facility_manager}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Facility Manager Email</p>
                    <p>{facility.facility_manager_email}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Description</h2>
                <p>{facility.description}</p>
              </div>
              <div className="flex justify-end">
                <Button variant="default" className="mt-4">
                  Reserve Now
                </Button>
              </div>
            </div>
          </div>
          </div>


    </>
  );
};

export default FacilityDetails;
