"use client";

import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTable } from './datatable'

import useGetRequests from '@/hooks/queries/useGetRequests'

const RequestTabs = () => {
  const { data: requests, status, error } = useGetRequests();

  if (status === "error") {
    console.error(error);
    return <div>Error loading requests</div>;
  }

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  console.log(requests)

  return (
    <Tabs className="w-full" defaultValue="pending">
      <TabsList className="flex w-full justify-center border-b h-15">
        <TabsTrigger className="py-2 px-4 font-medium" value="pending">
          Pending Requests
          <Badge className="ml-2 rounded-full bg-red-700 px-2 text-xs font-medium ">12</Badge>
        </TabsTrigger>
        <TabsTrigger className="py-2 px-4 font-medium" value="ongoing">
          Ongoing Requests
          <Badge className="ml-2 rounded-full bg-red-700 px-2 text-xs font-medium ">5</Badge>
        </TabsTrigger>
        <TabsTrigger className="py-2 px-4 font-medium" value="finished">
          Finished Requests
          <Badge className="ml-2 rounded-full bg-red-700 px-2 text-xs font-medium ">35</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pending">
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Pending Requests</h1>
        <DataTable data={requests} />
    </div>
      </TabsContent>
      <TabsContent value="ongoing">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Pending Requests</h1>
        <DataTable data={requests} />
    </div>
      </TabsContent>
      <TabsContent value="finished">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Pending Requests</h1>
        <DataTable data={requests} />
    </div>
      </TabsContent>
    </Tabs>
  )
}

export default RequestTabs