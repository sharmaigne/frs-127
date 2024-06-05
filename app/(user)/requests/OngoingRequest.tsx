import { Facility, Request } from "@/lib/types";
import ProgressIcon from "./ProgressIcon";
import useGetFacilityById from "@/hooks/queries/useGetFacilityById";
import { UUID } from "crypto";
import DateLine from "./Date";

const OngoingRequest = ({ request }: { request: Request["Row"] }) => {
  const getFacilityName = () => {
      const {data, status } = useGetFacilityById(request.facility_id as UUID);
      if (status === "pending" || status === "error") return "Facility Name";
      return data.name;
  };

  return (
    <div className="hover:bg-dark/10 p-4 rounded-lg">
      <div
        key={request.request_id}
        className="border-l-2 pl-4 pb-4 border-l-darker flex-col items-center"
      >
        <h5 className="font-bold">{getFacilityName()}</h5>
        <p className="text-primary ">{request.event_name}</p>
        <DateLine
          dateStart={request.timestamp_start}
          dateEnd={request.timestamp_end}
          // className="text-lg"
        />

        {/* drawing thing */}
        <div className="grid grid-cols-5 mt-6 text-sm">
          <div className="col-span-1 flex-col">
            <ProgressIcon status="approved" />
            <p className="font-bold mt-2 col-span-1 text-center">
              Request Sent
            </p>
          </div>
          <div className="col-span-1 flex-col">
            <ProgressIcon status="pending" />
            <p className="font-bold mt-2 col-span-1 text-center">
              Approved by <br />
              Venue Coordinator
            </p>
          </div>
          <div className="col-span-1 flex-col">
            <ProgressIcon status="pending" />
            <p className="font-bold mt-2 col-span-1 text-center">
              Forms sent to <br />SOAS
            </p>
          </div>
          <div className="col-span-1 flex-col">
            <ProgressIcon status="rejected" />
            <p className="font-bold mt-2 col-span-1 text-center">
              Approved by <br />SOAS
            </p>
          </div>
          <div className="col-span-1 flex-col">
            <ProgressIcon status="" />
            <p className="font-bold mt-2 col-span-1 text-center">
              Approved by <br />OSA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingRequest;
