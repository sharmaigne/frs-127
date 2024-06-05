"use client";

// TODO: implement skeleton loading
// TODO: implement comments feature

import { UUID } from "crypto";
import { useParams } from "next/navigation";

import useGetRequestById from "@/hooks/queries/useGetRequestById";
import useGetProfileById from "@/hooks/queries/useGetProfileById";
import useGetRisksByRequestId from "@/hooks/queries/useGetRisksByRequestId";
import useGetProgramByRequestId from "@/hooks/queries/useGetProgramByRequestId";

import UserProfileCard from "@/components/requestdetails/UserProfileCard";
import RequestDetailsCard from "@/components/requestdetails/RequestDetailsCard";
import RiskAnalysisTable from "@/components/requestdetails/RiskAnalysisTable";
import ProgramDetailsTable from "@/components/requestdetails/ProgramDetailsTable";
import CommentSection from "@/components/requestdetails/CommentSection";

export default function Page() {
  const { request_id }: { request_id: UUID } = useParams();

  const { data: request, status: requestStatus } =
    useGetRequestById(request_id);
  const { data: risks, status: risksStatus } =
    useGetRisksByRequestId(request_id);
  const { data: program, status: programStatus } =
    useGetProgramByRequestId(request_id);

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

  return (
    <div key="1" className="flex flex-col gap-8 p-6 md:p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <UserProfileCard profile={profile!} />
        <RequestDetailsCard request={request!} />
      </div>
      <RiskAnalysisTable risks={risks!} />
      <ProgramDetailsTable programs={program!} />
      <CommentSection />
    </div>
  );
}
