"use client";

// TODO: implement skeleton loading
// TODO: implement comments feature

import { UUID } from "crypto";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

import useGetRequestById from "@/hooks/queries/useGetRequestById";
import useGetProfileById from "@/hooks/queries/useGetProfileById";
import useGetRisksByRequestId from "@/hooks/queries/useGetRisksByRequestId";
import useGetProgramByRequestId from "@/hooks/queries/useGetProgramByRequestId";

import UserProfileCard from "@/components/requestdetails/UserProfileCard";
import RequestDetailsCard from "@/components/requestdetails/RequestDetailsCard";
import RiskAnalysisTable from "@/components/requestdetails/RiskAnalysisTable";
import ProgramDetailsTable from "@/components/requestdetails/ProgramDetailsTable";
import CommentSection from "@/components/requestdetails/CommentSection";
import { Dialog, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import useUpdateRequest from "@/hooks/mutations/useUpdateRequest";
// import useAddEndorsementTicket from "@/hooks/mutations/useAddEndorsementTicket";
import { useState } from "react";

export default function Page() {
  const { request_id }: { request_id: UUID } = useParams();

  const [openConfirm, setOpenConfirm] = useState(false);
  const { data: request, status: requestStatus } =
    useGetRequestById(request_id);
  const { data: risks, status: risksStatus } =
    useGetRisksByRequestId(request_id);
  const { data: program, status: programStatus } =
    useGetProgramByRequestId(request_id);

  // const { mutate: mutateEndorsement } = useAddEndorsementTicket();
  const { mutate: mutateRequest } = useUpdateRequest();
  const { data: profile, status: profileStatus } = useGetProfileById(
    request?.requestor_id as UUID
  );

  const status = [requestStatus, risksStatus, programStatus, profileStatus];
  if (status.includes("pending")) {
    return <div>Loading...</div>;
  }
  if (status.includes("error")) {
    return <div>Error loading something.</div>;
  }
  // const { data: comments, status: commentsStatus, error: commentsError } = useGetCommentsByRequestId(request_id);

  // handle actions
  const handleReject = () => {};

  const handleEndorse = () => {
    // if confirmed, create endorsement ticket

    // mutateEndorsement({
    //   request_id,
    //   status: "approved",
    // });
    mutateRequest({
      requestData: { endorsement_ticket_id: request_id },
      request_id,
    });

    setOpenConfirm(false);
  };

  return (
    <div key="1" className="flex flex-col gap-8 p-6 md:p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <UserProfileCard profile={profile!} />
        <RequestDetailsCard request={request!} />
      </div>
      <RiskAnalysisTable risks={risks!} />
      <ProgramDetailsTable programs={program!} />
      <CommentSection />
      <div className="flex justify-end gap-2">
        {/* Reject Dialog */}
        <Dialog >
          <DialogTrigger asChild>
            <Button variant="outline">Reject</Button>
          </DialogTrigger>
          <DialogContent className="w-[40%]">
            <DialogTitle>Reject Request</DialogTitle>
            <p>
              Are you sure you want to{" "}
              <span className="text-primary font-bold">reject</span> this
              request?
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => {}}>
                Cancel
              </Button>
              <Button onClick={handleReject}>Yes</Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Endorse Dialog */}
        <Dialog open={openConfirm} onOpenChange={setOpenConfirm}>
          <DialogTrigger asChild>
            <Button>Endorse</Button>
          </DialogTrigger>
          <DialogContent className="w-[40%]">
            <DialogTitle>Endorse Request</DialogTitle>
            Are you sure you want to endorse this request?
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setOpenConfirm(false);
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleEndorse}>Yes</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
