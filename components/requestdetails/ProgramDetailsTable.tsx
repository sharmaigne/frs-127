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
import { Button } from "@/components/ui/button";

interface ProgramDetailsTableProps {
  programs: Program["Row"][];
}

const ProgramDetailsTable = ({ programs }: ProgramDetailsTableProps) => {
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
      <div className="flex justify-end">
        <Button
          size="sm"
          variant="outline"
          className="w-fit hover:bg-secondary-500/20"
        >
          Activity Design PDF
        </Button>
      </div>
    </CardWrapper>
  );
};
export default ProgramDetailsTable;
