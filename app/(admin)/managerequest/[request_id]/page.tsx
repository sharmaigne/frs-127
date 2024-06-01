"use client"

// TODO: implement skeleton loading

import { UUID } from "crypto";
import { useParams } from "next/navigation";

import useGetRequestById from "@/hooks/queries/useGetRequestById";
import useGetProfileById from "@/hooks/queries/useGetProfileById";
import useGetRisksByRequestId from "@/hooks/queries/useGetRisksByRequestId";
import useGetProgramByRequestId from "@/hooks/queries/useGetProgramByRequestId";

import UserProfileCard from "./components/UserProfileCard";
import  RequestDetailsCard  from "./components/RequestDetailsCard";
import  RiskAnalysisTable  from "./components/RiskAnalysisTable";
import  ProgramDetailsTable from "./components/ProgramDetailsTable";
import  CommentSection  from "./components/CommentSection";


// const profiles = {
//   role: "Admin",
//   first_name: "John",
//   middle_initial: "A",
//   last_name: "Doe",
//   email: "john.doe@example.com",
//   contact_number: "09358631343"
// };

// const requests = {
//   event_name: "Annual Conference",
//   organization: "Acme Inc.",
//   event_description: "The annual conference for our organization, bringing together industry leaders and experts.",
//   timestamp_start: "2023-06-01 09:00:00",
//   timestamp_end: "2023-06-03 17:00:00"
// };

// const risks = [
//   {
//     risk: "injury",
//     effect: "Delay games",
//     likelihood: "Medium",
//     impact: "High",
//     mitigating_action: "Implement additional security measures",
//     escalation_point: "hmmm i dont really know"
    
//   }
// ];

// const program = [
//   {
//     timestamp_start: "09:00:00",
//     timestamp_end: "17:00:00",
//     activity: "Annual Conference"
//   }
// ];

export default function Page() {
  const { request_id }: { request_id: UUID } = useParams();

  const { data: request, status: requestStatus, error: requestError} = useGetRequestById(request_id);
  const { data: risks, status: risksStatus, error: risksError } = useGetRisksByRequestId(request_id);
  const { data: program, status: programStatus, error: programError } = useGetProgramByRequestId(request_id);
  
  if (requestStatus === "pending" || risksStatus === "pending" || programStatus === "pending") {
    return <div>Loading...</div>
  }
  if (requestStatus === "error" || risksStatus === "error" || programStatus === "error") {
    return <div>Error loading something.</div>
  }

  const { data: profile, status: profileStatus, error: profileError } = useGetProfileById(request.requestor_id as UUID)
  if (profileStatus === "pending") {
    return <div>Loading...</div>
  }
  if (profileStatus === "error") {
    return <div>Error loading something.</div>
  }
  // const { data: comments, status: commentsStatus, error: commentsError } = useGetCommentsByRequestId(request_id);
  
  return (
    <div key="1" className="flex flex-col gap-8 p-6 md:p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <UserProfileCard profile={profile} />
        <RequestDetailsCard request={request} />
      </div>
      <RiskAnalysisTable risks={risks} />
      <ProgramDetailsTable programs={program} />
      <CommentSection />
    </div>
  );
}