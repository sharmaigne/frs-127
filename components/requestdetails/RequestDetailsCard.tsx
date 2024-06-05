import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CardWrapper from "./CardWrapper";
import React from "react";
import { Request } from "@/lib/types";

interface RequestDetailsCardProps {
  request: Request["Row"];
}

const RequestDetailsCard = ({ request }: RequestDetailsCardProps) => {
  return (
    <CardWrapper title="Request Details">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Request Name
          </Label>
          <p className="text-gray-900 dark:text-gray-50">
            {request.event_name}
          </p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Organization
          </Label>
          <p className="text-gray-900 dark:text-gray-50">
            {request.organization}
          </p>
        </div>
      </div>
      <div>
        <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Request Description
        </Label>
        <p className="text-gray-900 dark:text-gray-50">
          {request.event_description}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Start Timestamp
          </Label>
          <p className="text-gray-900 dark:text-gray-50">
            {request.timestamp_start}
          </p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            End Timestamp
          </Label>
          <p className="text-gray-900 dark:text-gray-50">
            {request.timestamp_end}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button size="sm" variant="outline">
          Activity Design PDF
        </Button>
        <Button size="sm" variant="outline">
          Venue Request PDF
        </Button>
      </div>
    </CardWrapper>
  );
};
export default RequestDetailsCard;
