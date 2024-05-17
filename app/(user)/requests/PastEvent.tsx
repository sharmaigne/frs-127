import { testFacilities } from "../testRequests";
import { Facility, Request } from "@/lib/types";

import { Button } from "@/components/ui/button";
import Icon from "@/components/Icon";
import archiveIcon from "@/public/icons/archive.svg";
import repeatIcon from "@/public/icons/repeat.svg";

import { stringToDate, stringToDay, stringToTime } from "@/lib/utils";

const PastEvent = ({ request }: { request: Request["Row"] }) => {
  const getFacilityName = () => {
    // TODO: change into actual query
    const facilityName = testFacilities.filter((facility) => {
      return facility.facility_id === request.facility_id;
    })[0]?.name;

    return facilityName ? facilityName : "Facility Name";
  };

  return (
    <div className="hover:bg-dark/10 p-4 rounded-lg">
      <div
        key={request.request_id}
        className="border-l-2 pl-4 pb-4 border-l-darker flex items-center justify-between"
      >
        <div>
          <h5 className="font-bold">{request.event_name}</h5>
          <div className="flex-col pl-3">
            <p className="text-lg text-primary">{getFacilityName()}</p>
            <div className="flex gap-3 items-center">
              <p>{stringToDate(request.timestamp_start)}</p>
              <span className="rounded-full w-1 h-1 bg-primary" />
              <p>{stringToDay(request.timestamp_start)}</p>
              <span className="rounded-full w-1 h-1 bg-primary" />
              <p>
                {stringToTime(request.timestamp_start)} -{" "}
                {stringToTime(request.timestamp_end)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Icon src={archiveIcon.src} alt="archive" className="w-7 h-7" />
          <Icon src={repeatIcon.src} alt="reuse data" className="w-7 h-7" />
          <Button>VIEW DETAILS</Button>
        </div>
      </div>
    </div>
  );
};

export default PastEvent;
