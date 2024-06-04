import { Button } from "@/components/ui/button";
import { Facility } from "@/lib/types";
import useGetProfileById from "@/hooks/queries/useGetProfileById";
import { UUID } from "crypto";
import Link from "next/link";
// need desc and images for facility sa lib/types. please update.

const FacilityDetails = ({ facility }: { facility: Facility["Row"] }) => {
  const {
    data: manager,
    error,
    status,
  } = useGetProfileById(facility.facility_manager_id as UUID);
  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Error: {error.message}</p>;
  return (
    <>
      <div className="w-full">
        <div className="flex gap-8 items-center">
          <div>
            <img
              src={facility.image_url || "/images/placeholder.png"}
              alt="Facility Image"
              className={`w-full rounded-lg object-cover ${
                facility.image_url ? "" : "bg-gray-200"
              }`}
            />
          </div>
          <div className="space-y-6 w-[50%] mt-4">
            <div>
              <h1 className="text-3xl font-bold">{facility.name}</h1>
              <p className="text-gray-500 dark:text-gray-400">
                {facility.location}
              </p>
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
                  <p className="text-gray-500 dark:text-gray-400">
                    Facility Manager
                  </p>
                  <p>{`${manager.first_name} ${manager.middle_initial} ${manager.last_name}`}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Facility Manager Email
                  </p>
                  <Link href={`mailto:${manager.email}`}>{manager.email}</Link>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Description</h2>
              <p>{facility.description}</p>
            </div>
            <div className="flex justify-end">
              <Button className="mt-4 mr-6" asChild>
                <Link href={`/home/formrequest/${facility.facility_id}`}>
                  Reserve Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilityDetails;