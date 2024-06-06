import { Request } from "@/lib/types";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

import useGetRisksByRequestId from "@/hooks/queries/useGetRisksByRequestId";
import useGetProgramByRequestId from "@/hooks/queries/useGetProgramByRequestId";

import RequestDetailsCard from "@/components/requestdetails/RequestDetailsCard";
import RiskAnalysisTable from "@/components/requestdetails/RiskAnalysisTable";
import ProgramDetailsTable from "@/components/requestdetails/ProgramDetailsTable";
import { UUID } from "crypto";
import { Button } from "@/components/ui/button";

const ViewDetailsDialog = ({
  request,
  open,
  handleOpen,
}: {
  request: Request["Row"];
  open: boolean;
  handleOpen: () => void;
}) => {
  const { data: risks, status: risksStatus } = useGetRisksByRequestId(
    request.request_id as UUID
  );
  const { data: program, status: programStatus } = useGetProgramByRequestId(
    request.request_id as UUID
  );

  const status = [risksStatus, programStatus];
  if (status.includes("pending")) {
    return <div>Loading...</div>;
  }
  if (status.includes("error")) {
    return <div>Error loading something.</div>;
  }
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className="h-[90vh] w-[80vw] overflow-auto">
        <DialogHeader className="mt-3 ml-3">
          <DialogTitle className="text-h4">View Request Details</DialogTitle>
          <DialogDescription className="text-md">
            This is the data you have submitted to the system.
          </DialogDescription>
        </DialogHeader>

        <div>
          <div
            key="1"
            className="flex flex-col gap-8 p-6 md:p-10 max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 gap-6">
              <RequestDetailsCard request={request!} />
            </div>
            <RiskAnalysisTable risks={risks!} />
            <ProgramDetailsTable programs={program!} />
            <div className="flex justify-end">
              <Button
                size="sm"
                variant="outline"
                className="w-fit hover:bg-secondary-500/20"
              >
                Activity Design PDF
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetailsDialog;
