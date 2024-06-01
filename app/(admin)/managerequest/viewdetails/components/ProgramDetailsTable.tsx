import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import  CardWrapper  from "./CardWrapper";
import React from 'react'
interface Program {
  timestamp_start: string;
  timestamp_end: string;
  activity: string;
}

interface ProgramDetailsTableProps {
  programs: Program[];
}


const ProgramDetailsTable = ({ programs }: ProgramDetailsTableProps)  => {
  return (
    <CardWrapper title="Program Details">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Activity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programs.map((program, index) => (
            <TableRow key={index}>
              <TableCell>{program.timestamp_start}</TableCell>
              <TableCell>{program.timestamp_end}</TableCell>
              <TableCell>{program.activity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardWrapper>
  );
}
export default ProgramDetailsTable