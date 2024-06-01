import UserProfileCard from "./components/UserProfileCard";
import  RequestDetailsCard  from "./components/RequestDetailsCard";
import  RiskAnalysisTable  from "./components/RiskAnalysisTable";
import  ProgramDetailsTable from "./components/ProgramDetailsTable";
import  CommentSection  from "./components/CommentSection";

const profiles = {
  role: "Admin",
  first_name: "John",
  middle_initial: "A",
  last_name: "Doe",
  email: "john.doe@example.com",
  contact_number: "09358631343"
};

const requests = {
  event_name: "Annual Conference",
  organization: "Acme Inc.",
  event_description: "The annual conference for our organization, bringing together industry leaders and experts.",
  timestamp_start: "2023-06-01 09:00:00",
  timestamp_end: "2023-06-03 17:00:00"
};

const risks = [
  {
    risk: "injury",
    effect: "Delay games",
    likelihood: "Medium",
    impact: "High",
    mitigating_action: "Implement additional security measures",
    escalation_point: "hmmm i dont really know"
    
  }
];

const program = [
  {
    timestamp_start: "09:00:00",
    timestamp_end: "17:00:00",
    activity: "Annual Conference"
  }
];

export default function Page() {
  return (
    <div key="1" className="flex flex-col gap-8 p-6 md:p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <UserProfileCard profiles={profiles} />
        <RequestDetailsCard requests={requests} />
      </div>
      <RiskAnalysisTable risks={risks} />
      <ProgramDetailsTable programs={program} />
      <CommentSection />
    </div>
  );
}

