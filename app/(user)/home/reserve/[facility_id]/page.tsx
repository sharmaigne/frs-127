"use client";
import { UUID } from "crypto";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import useSupabase from "@/hooks/useSupabase";
import { useQuery } from "@tanstack/react-query";
import { getFacilityById } from "@/utils/queries/global";

const reservePage = () => {
  const { facility_id }: { facility_id: UUID } = useParams();
  const supabase = useSupabase();

  // const {
  //   data: facility,
  //   status,
  //   error,
  // } = useQuery({
  //   queryKey: ["facilities", facility_id],
  //   queryFn: () => getFacil ityById(supabase, facility_id),
  // });

  // if (status === "error") {
  //   console.error(error);
  //   return <div>Error loading facilities</div>;
  // }
  // if (status === "pending") {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="my-5 mx-8">
      <h3>
        {/* Reserve: <span className="text-primary">{facility.name}</span> */}
      </h3>
      <div className="m-4">
        <div className="grid grid-cols-4 gap-6">
          {/* requestor details */}
          <div className="md:col-span-2 lg:col-span-1 rounded bg-secondary-500/10 p-2">
            <h5 className="font-bold">Requested By</h5>
            <pre>(uneditable) name email</pre>
          </div>

          {/* event details */}
          <div className="md:col-span-2 lg:col-span-3 rounded p-4 bg-accent/20">
            <h5 className="font-bold">Event Details</h5>

          </div>
        </div>

        {/* risk and management assessment */}
        <div>
          <h5 className="font-bold">Risk Management and Assessment</h5>
        </div>
      </div>
    </div>
  );
};

export default reservePage;
