import { Label } from "@/components/ui/label";
import CardWrapper from "./CardWrapper";
import React from "react";
import { Profile } from "@/lib/types";

interface UserProfileCardProps {
  profile: Profile["Row"];
}

const UserProfileCard = ({ profile }: UserProfileCardProps) => {
  return (
    <CardWrapper title="User Profile">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Role
          </Label>
          <p className="text-gray-900 dark:text-gray-50">{profile.role}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            First Name
          </Label>
          <p className="text-gray-900 dark:text-gray-50">
            {profile.first_name}
          </p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Middle Initial
          </Label>
          <p className="text-gray-900 dark:text-gray-50">
            {profile.middle_initial}
          </p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Last Name
          </Label>
          <p className="text-gray-900 dark:text-gray-50">{profile.last_name}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Email
          </Label>
          <p className="text-gray-900 dark:text-gray-50">{profile.email}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Contact Number
          </Label>
          <p className="text-gray-900 dark:text-gray-50">
            {profile.contact_number}
          </p>
        </div>
      </div>
    </CardWrapper>
  );
};
export default UserProfileCard;
