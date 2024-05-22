import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
const TableRequest = () => {
  return (
    <div className='flex justify-center items-center w-9/12 mx-auto py-4'>
        <Table className='max-w-9/12 py-auto'>
          <TableCaption>A list of Pending Requests waiting for your Endorsement</TableCaption>
          <TableHeader >
        <TableRow>
          <TableHead className="text-center">User</TableHead>
          <TableHead className="text-center">Organization</TableHead>
          <TableHead className="text-center">Facility</TableHead>
          <TableHead className="text-center">Date & Time Start</TableHead>
          <TableHead className="text-center">Date & Time End</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
          </TableHeader>
          <TableBody>
        <TableRow>
          <TableCell className="font-medium text-center">Phillip Hufana</TableCell>
          <TableCell className="text-center">SPARCS</TableCell>
          <TableCell className="text-center">Atrium</TableCell>
          <TableCell className="text-center">May 29, 2024 9:00AM</TableCell>
          <TableCell className="text-center">May 30, 2024 5:00PM</TableCell>
          <TableCell className="text-center">
          <Badge className="ml-2 rounded-full bg-red-700 px-2 text-xs font-medium ">Pending</Badge>
          </TableCell>
          <TableCell className="space-x-2 text-center">
            <Button variant="destructive" className='bg-secondary-400'>Endorse</Button>
            <Button variant="default" className='bg-primary-400'>Reject</Button>
            <Button variant="outline" >View</Button>
          </TableCell>
        </TableRow>
          </TableBody>
        </Table>
    </div>
  )
}

export default TableRequest