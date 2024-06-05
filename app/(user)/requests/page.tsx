"use client";
import useSupabase from "@/hooks/useSupabase";

import DraftRequest from "./DraftRequest";
import OngoingRequest from "./OngoingRequest";
import PastEvent from "./PastEvent";

import useGetRequestsByUserId from "@/hooks/queries/useGetRequestsByUserId";
import { Request } from "@/lib/types";
import { UUID } from "crypto";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

const RequestsPage = () => {
  const supabase = useSupabase();

  const [session, setSession] = useState<Session | null>(null);

  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    setSession(session);
  };

  useEffect(() => {
    getSession();
  }, []);

  const { data: requests = [], error, status } = useGetRequestsByUserId(
    session?.user.id as UUID
  );

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center">
      <div className="flex-col gap-6 m-8 w-10/12 -ml-5">
        <div className="border-primary border-b-4 w-fit px-2">
          <h2 className="font-bold">Drafts</h2>
        </div>
        <div className="flex flex-wrap">
          {/* GET requests that are still drafts */}
          {requests.map((request) => {
            return <DraftRequest request={request} key={request.request_id} />;
          })}
        </div>
        <div className="border-accent border-b-4 w-fit px-2">
          <h2 className="font-bold">Ongoing</h2>
        </div>
        <div className="my-5">
          {/* GET requests that are pending */}
          {requests.map((request) => {
            return (
              <OngoingRequest request={request} key={request.request_id} />
            );
          })}
        </div>
        <div className="border-secondary border-b-4 w-fit px-2">
          <h2 className="font-bold">Past Events</h2>
        </div>
        <div className="my-5">
          {/* GET requests that have been cancelled or approved
          how to check if cancelled? add status */}
          {requests.map((request) => {
            return <PastEvent request={request} key={request.request_id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RequestsPage;
