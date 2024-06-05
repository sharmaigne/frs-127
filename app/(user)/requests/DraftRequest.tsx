import { testFacilities } from "../testRequests";
import { Facility, Request } from "@/lib/types";

import { Button } from "@/components/ui/button";
import Icon from "@/components/Icon";
import archiveIcon from "@/public/icons/archive.svg";
import repeatIcon from "@/public/icons/repeat.svg";

import DateLine from "./Date";
import useGetFacilityById from "@/hooks/queries/useGetFacilityById";
import { UUID } from "crypto";

import { useState } from "react";
import ViewDetailsDialog from "./ViewDetailsDialog";

const DraftRequest = ({ request }: { request: Request["Row"] }) => {
  const getFacilityName = () => {
    const { data, status } = useGetFacilityById(request.facility_id as UUID);
    if (status === "pending" || status === "error") return "Facility Name";
    return data.name;
  };

  const greenCircle = (
    <span className="rounded-full w-3 h-3 border border-darker bg-secondary-500" />
  );
  const yellowCircle = (
    <span className="rounded-full w-3 h-3 border border-darker bg-accent-500" />
  );
  const defaultCircle = (
    <span className="rounded-full w-3 h-3 border border-darker bg-text-200" />
  );
  
  const [open, setOpen] = useState(false);

  // TODO: fix bug with handling open state
  // This should probably open as a form instead of a view details dialog
  const handleViewDetails = () => {
    setOpen((prev) => !prev);
    console.log(`state: ${open}`);
  };

  return (
    <div
      className="rounded-lg p-4 hover:bg-dark/10 min-w-[50%] cursor-pointer"
      onClick={handleViewDetails}
    >
      <ViewDetailsDialog
        open={open}
        handleOpen={handleViewDetails}
        request={request}
      />

      <div className="border-l-2 border-darker px-4 py-2">
        <h5 className="font-bold">{getFacilityName()}</h5>
        <DateLine
          dateStart={request.timestamp_start}
          dateEnd={request.timestamp_end}
        />
        <div className="rounded bg-secondary-500/20 p-3 mt-2">
          <div className="flex items-center gap-2">
            <p className="font-bold">Activity Request</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="font-bold">Venue Request</p>
          </div>
        </div>
        <div className="rounded bg-accent-100 p-3 mt-2">
          <div className="flex items-center gap-2">
            <p className="font-bold">Risk Analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftRequest;
