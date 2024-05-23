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
import DataTableExperiment from './page'

const RequestTabs = () => {
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
              <DataTableExperiment/>
      </TabsContent>
      <TabsContent value="ongoing">

      </TabsContent>
      <TabsContent value="finished">
      <h2>Finished Requests</h2>
      </TabsContent>
    </Tabs>
  )
}

export default RequestTabs