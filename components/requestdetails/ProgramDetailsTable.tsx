import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import CardWrapper from "./CardWrapper";
import { Program } from "@/lib/types";
import moment from "moment";
interface ProgramDetailsTableProps {
  programs: Program["Row"][];
}

const ProgramDetailsTable = ({ programs }: ProgramDetailsTableProps) => 
  {
    const dateFormat = "LLLL";
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
              <TableCell>{moment(program.timestamp_start).format(dateFormat)}</TableCell>
              <TableCell>{moment(program.timestamp_end).format(dateFormat)}</TableCell>
              <TableCell>{program.activity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardWrapper>
  );
};
export default ProgramDetailsTable;
