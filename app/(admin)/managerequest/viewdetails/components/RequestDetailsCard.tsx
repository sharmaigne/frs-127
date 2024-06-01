import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import  CardWrapper  from "./CardWrapper";
import React from 'react'
interface Request {
  event_name: string;
  organization: string;
  event_description: string;
  timestamp_start: string;
  timestamp_end: string;
}

interface RequestDetailsCardProps {
  requests: Request;
}


const RequestDetailsCard = ({ requests }: RequestDetailsCardProps) => {
  return (
    <CardWrapper title="Request Details">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Event Name</Label>
          <p className="text-gray-900 dark:text-gray-50">{requests.event_name}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Organization</Label>
          <p className="text-gray-900 dark:text-gray-50">{requests.organization}</p>
        </div>
      </div>
      <div>
        <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Event Description</Label>
        <p className="text-gray-900 dark:text-gray-50">{requests.event_description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Event Start Time</Label>
          <p className="text-gray-900 dark:text-gray-50">{requests.timestamp_start}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Event End Time</Label>
          <p className="text-gray-900 dark:text-gray-50">{requests.timestamp_end}</p>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button size="sm" variant="outline">Activity Design PDF</Button>
        <Button size="sm" variant="outline">Venue Request PDF</Button>
      </div>
    </CardWrapper>
  );
}
export default RequestDetailsCard