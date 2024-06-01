"use client"
import { useState, useEffect } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

type UserProfile = {
  id: string;
  role: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  email: string;
  contactNumber: string;
};

type EventDetails = {
  name: string;
  description: string;
  startTimestamp: string;
  endTimestamp: string;
  organization: string;
};

type RequestDetails = {
  facilityId: string;
  requestorId: string;
  activityDesignId: string;
  riskAnalysisId: string;
  status: string;
};

type RiskAnalysis = {
  effect: string;
  likelihood: string;
  impact: string;
  mitigating_action: string;
  escalation_point: string;
  requestId: string;
};

type ApiResponse = {
  user: UserProfile;
  event: EventDetails;
  request: RequestDetails;
  riskAnalysis: RiskAnalysis[];
};

type DetailsProps = {
  apiEndpoint: string;
}

// Placeholder for Supabase client initialization (to be replaced with actual implementation)
// import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = 'https://xyzcompany.supabase.co';
// const supabaseKey = 'public-anon-key';
// const supabase = createClient(supabaseUrl, supabaseKey);

const Details = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  // useEffect(() => {
  //   // Placeholder fetch call for Supabase integration (to be replaced with actual Supabase implementation)
  //   fetch(apiEndpoint)
  //     .then(response => response.json())
  //     .then((data: ApiResponse) => setData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, [apiEndpoint]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-8 p-6 md:p-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-bold">User Profile</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">User ID</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.user.id}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.user.role}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">First Name</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.user.firstName}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Middle Initial</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.user.middleInitial}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Name</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.user.lastName}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.user.email}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Contact Number</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.user.contactNumber}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Event Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Event Name</Label>
              <p className="text-gray-900 dark:text-gray-50">{data.event.name}</p>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Event Description</Label>
              <p className="text-gray-900 dark:text-gray-50">{data.event.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Start Timestamp</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.event.startTimestamp}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">End Timestamp</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.event.endTimestamp}</p>
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Organization</Label>
              <p className="text-gray-900 dark:text-gray-50">{data.event.organization}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Request Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 overflow-auto">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Facility ID</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.request.facilityId}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Requestor ID</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.request.requestorId}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Activity Design ID</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.request.activityDesignId}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Risk Analysis ID</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.request.riskAnalysisId}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</Label>
                <p className="text-gray-900 dark:text-gray-50">{data.request.status}</p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="outline">
                {/* <DownloadIcon className="h-4 w-4 mr-2" /> */}
                Venue Request PDF
              </Button>
              <Button size="sm" variant="outline">
                {/* <DownloadIcon className="h-4 w-4 mr-2" /> */}
                Activity Design PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Risk Analysis</CardTitle>
        </CardHeader>
        <CardContent className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Effect</TableHead>
                <TableHead>Likelihood</TableHead>
                <TableHead>Impact</TableHead>
                <TableHead>Mitigating Action</TableHead>
                <TableHead>Escalation Point</TableHead>
                <TableHead>Risk ID</TableHead>
                <TableHead>Request ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.riskAnalysis.map((risk, index) => (
                <TableRow key={index}>
                  <TableCell>{risk.effect}</TableCell>
                  <TableCell>{risk.likelihood}</TableCell>
                  <TableCell>{risk.impact}</TableCell>
                  <TableCell>{risk.mitigating_action}</TableCell>
                  <TableCell>{risk.escalation_point}</TableCell>
                  <TableCell>{risk.requestId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
