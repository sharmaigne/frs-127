"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RequestsTable } from "./requestsTable";

import useGetRequests from "@/hooks/queries/useGetRequests";

const RequestTabs = () => {
  const { data: requests, status, error } = useGetRequests();

  if (status === "error") {
    console.error(error);
    return <div>Error loading requests</div>;
  }

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  const pendingRequests = requests.filter(
    (request) =>
      request.endorsement_ticket_id === null && request.status !== "Withdrawn"
  );
  const ongoingRequests = requests.filter(
    (request) =>
      request.endorsement_ticket_id !== null && request.status === "Pending"
  );
  const finishedRequests = requests.filter(
    (request) => request.status !== "Pending"
  );

  return (
    <Tabs className="w-full" defaultValue="pending">
      <TabsList className="flex w-full justify-center border-b h-15 bg-accent text-black">
        <TabsTrigger className="py-2 px-4 font-medium" value="pending">
          Pending Requests
          <Badge className="ml-2 rounded-full bg-red-700 px-2 text-xs font-semibold hover:bg-primary-400">
            {pendingRequests.length}
          </Badge>
        </TabsTrigger>
        <TabsTrigger className="py-2 px-4 font-medium" value="ongoing">
          Ongoing Requests
          <Badge className="ml-2 rounded-full bg-primary-400 px-2 text-xs font-semibold hover:bg-primary-300">
            {ongoingRequests.length}
          </Badge>
        </TabsTrigger>
        <TabsTrigger className="py-2 px-4 font-medium" value="finished">
          Finished Requests
          <Badge className="ml-2 rounded-full bg-black px-2 text-xs  hover:bg-grey font-semibold ">
            {finishedRequests.length}
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pending">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Pending Requests</h1>
          <RequestsTable data={pendingRequests} />
        </div>
      </TabsContent>
      <TabsContent value="ongoing">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Ongoing Requests</h1>
          <RequestsTable data={ongoingRequests} />
        </div>
      </TabsContent>
      <TabsContent value="finished">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Finished Requests</h1>
          <RequestsTable data={finishedRequests} />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default RequestTabs;
