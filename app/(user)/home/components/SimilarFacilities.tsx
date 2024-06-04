"use client";

// top 3 similar facilities based on capacity

import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facility } from "@/lib/types";

interface SimilarFacilitiesProps {
  facilities: Facility["Row"][];
}

const SimilarFacilities: React.FC<SimilarFacilitiesProps> = ({
  facilities,
}) => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-12">
      <div className="container px-8 md:px-6 ">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Similar Facilities</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <Link href="#" className="block" prefetch={false}>
                <img
                  src={facility.image_url || "/placeholder.svg"}
                  alt="Facility Image"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4 flex flex-col h-[200px] justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    <Link
                      href="#"
                      className="hover:text-primary"
                      prefetch={false}
                    >
                      {facility.name}
                    </Link>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {facility.location}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Capacity: {facility.capacity}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <Button asChild><Link href={`home/formrequest/${facility.facility_id}`}>Reserve Now</Link></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarFacilities;
