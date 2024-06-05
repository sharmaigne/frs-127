import useGetFacilityById from "@/hooks/queries/useGetFacilityById";
import { UUID } from "crypto";
import { Facility, Request } from "@/lib/types";

import { Button } from "@/components/ui/button";
import Icon from "@/components/Icon";
import archiveIcon from "@/public/icons/archive.svg";
import repeatIcon from "@/public/icons/repeat.svg";
import { useState } from "react";
import ViewDetailsDialog from "./ViewDetailsDialog";

import DateLine from "./Date";

const PastEvent = ({ request }: { request: Request["Row"] }) => {
  const getFacilityName = () => {
    const { data, status } = useGetFacilityById(request.facility_id as UUID);
    if (status === "pending" || status === "error") return "Facility Name";
    return data.name;
  };

  const [open, setOpen] = useState(false);

  const handleViewDetails = () => {
    setOpen((prev) => !prev);
    console.log(`state: ${open}`);
  };

  return (
    <div className="hover:bg-dark/10 p-4 rounded-lg">
      <ViewDetailsDialog
        open={open}
        handleOpen={handleViewDetails}
        request={request}
      />
      <div
        key={request.request_id}
        className="border-l-2 pl-4 pb-4 border-l-darker flex items-center justify-between"
      >
        <div>
          <h5 className="font-bold">{request.event_name}</h5>
          <div className="flex-col pl-3">
            <p className="text-primary">{getFacilityName()}</p>
            <DateLine
              dateStart={request.timestamp_start}
              dateEnd={request.timestamp_end}
            />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Icon src={archiveIcon.src} alt="archive" className="w-7 h-7" />
          <Icon src={repeatIcon.src} alt="reuse data" className="w-7 h-7" />
          <Button onClick={handleViewDetails}>VIEW DETAILS</Button>
        </div>
      </div>
    </div>
  );
};

export default PastEvent;
