import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import CardWrapper from "./CardWrapper";
import React from "react";
import { Risk } from "@/lib/types";

interface RiskAnalysisTableProps {
  risks: Risk["Row"][];
}

const RiskAnalysisTable = ({ risks }: RiskAnalysisTableProps) => {
  return (
    <CardWrapper title="Risk Analysis">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Risk</TableHead>
            <TableHead>Effect</TableHead>
            <TableHead>Likelihood</TableHead>
            <TableHead>Impact</TableHead>
            <TableHead>Mitigating Action</TableHead>
            <TableHead>Escalation Point</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {risks.map((risks, index) => (
            <TableRow key={index}>
              <TableCell>{risks.risk}</TableCell>
              <TableCell>{risks.effect}</TableCell>
              <TableCell>{risks.likelihood}</TableCell>
              <TableCell>{risks.impact}</TableCell>
              <TableCell>{risks.mitigating_action}</TableCell>
              <TableCell>{risks.escalation_point}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button size="sm" variant="outline" className="hover:bg-secondary-500/20">
          Risk Analysis PDF
        </Button>
      </div>
    </CardWrapper>
  );
};
export default RiskAnalysisTable;
