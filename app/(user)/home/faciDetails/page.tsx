import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Facility {
  title: string;
  address: string;
  capacity: string;
  size: string;
  parking: string;
  amenities: string;
  description: string;
  imageSrc?: string; // Make imageSrc optional
  reserveLink: string;
}

interface SimilarFacility {
  title: string;
  address: string;
  capacity: string;
  imageSrc?: string; // Make imageSrc optional
  reserveLink: string;
}

interface FacilityComponentProps {
  facility?: Facility; // Make facility optional
  similarFacilities?: SimilarFacility[]; // Make similarFacilities optional
}

const FacilityCard: React.FC<Facility> = ({
  title,
  address,
  capacity,
  size,
  parking,
  amenities,
  description,
  imageSrc,
  reserveLink,
}) => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-500 dark:text-gray-400">{address}</p>
    </div>
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Facility Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 dark:text-gray-400">Capacity</p>
          <p>{capacity}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Size</p>
          <p>{size}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Parking</p>
          <p>{parking}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Amenities</p>
          <p>{amenities}</p>
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Description</h2>
      <p>{description}</p>
    </div>
    <div className="flex justify-end">
      <Button className="mt-4" variant="primary" href={reserveLink}>
        Reserve Now
      </Button>
    </div>
  </div>
);

const SimilarFacilityCard: React.FC<SimilarFacility> = ({
  title,
  address,
  capacity,
  imageSrc,
  reserveLink,
}) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
    <Link className="block" href={reserveLink}>
      <img
        alt="Facility Image"
        className="w-full h-48 object-cover"
        height={300}
        src={imageSrc || "/placeholder.svg"} // Use placeholder if imageSrc is undefined
        style={{ aspectRatio: "400/300", objectFit: "cover" }}
        width={400}
      />
    </Link>
    <div className="p-4">
      <h3 className="text-lg font-semibold">
        <Link className="hover:text-primary" href={reserveLink}>
          {title}
        </Link>
      </h3>
      <p className="text-gray-500 dark:text-gray-400">{address}</p>
      <p className="text-gray-500 dark:text-gray-400">Capacity: {capacity}</p>
      <div className="flex justify-end mt-4">
        <Button variant="primary" href={reserveLink}>
          Reserve Now
        </Button>
      </div>
    </div>
  </div>
);

const FacilityComponent: React.FC<FacilityComponentProps> = ({
  facility,
  similarFacilities = [],
}) => {
  if (!facility) {
    return <p>Facility data is not available.</p>;
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0">
        <div>
          <img
            alt="Facility Image"
            className="w-full rounded-lg object-cover"
            height={600}
            src={facility.imageSrc || "/placeholder.svg"} // Use placeholder if imageSrc is undefined
            style={{ aspectRatio: "800/600", objectFit: "cover" }}
            width={800}
          />
        </div>
        <FacilityCard {...facility} />
      </div>
      <section className="bg-gray-100 dark:bg-gray-950 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Similar Facilities</h2>
            <Link className="text-primary hover:underline" href="#">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarFacilities.map((similarFacility, index) => (
              <SimilarFacilityCard key={index} {...similarFacility} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilityComponent;
