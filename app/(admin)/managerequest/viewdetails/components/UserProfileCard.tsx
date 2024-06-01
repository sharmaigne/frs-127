import { Label } from "@/components/ui/label";
import  CardWrapper  from "./CardWrapper";
import React from 'react'
interface User {

  role: string;
  first_name: string;
  middle_initial: string;
  last_name: string;
  email: string;
  contact_number: string;
}

interface UserProfileCardProps {
  profiles: User;
}



const UserProfileCard = ({ profiles }: UserProfileCardProps) => {


  return (
    <CardWrapper title="User Profile">
      <div className="grid grid-cols-2 gap-4">

        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</Label>
          <p className="text-gray-900 dark:text-gray-50">{profiles.role}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">First Name</Label>
          <p className="text-gray-900 dark:text-gray-50">{profiles.first_name}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Middle Initial</Label>
          <p className="text-gray-900 dark:text-gray-50">{profiles.middle_initial}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Name</Label>
          <p className="text-gray-900 dark:text-gray-50">{profiles.last_name}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</Label>
          <p className="text-gray-900 dark:text-gray-50">{profiles.email}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Contact Number</Label>
          <p className="text-gray-900 dark:text-gray-50">{profiles.contact_number}</p>
        </div>
      </div>
    </CardWrapper>
  );
}
export default UserProfileCard
