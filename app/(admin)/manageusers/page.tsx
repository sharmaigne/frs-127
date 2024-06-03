"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

enum user_roles {
  superadmin = "Superadmin",
  osa = "OSA - Director",
  soas = "OSA - SOAS",
  facility_manager = "Facility Manager",
  student_user = "Student User",
  non_student_user = "Non Student User"
}

interface Profile {
  id: number;
  name: string;
  email: string;
  role: user_roles;
}

const initialUsers: Profile[] = [
  { id: 1, name: "johndoe", email: "johndoe@example.com", role: user_roles.superadmin },
  { id: 2, name: "janesmith", email: "janesmith@example.com", role: user_roles.osa },
  { id: 3, name: "bobwilson", email: "bobwilson@example.com", role: user_roles.soas },
  { id: 4, name: "sarahjones", email: "sarahjones@example.com", role: user_roles.facility_manager },
  { id: 5, name: "mikebrown", email: "mikebrown@example.com", role: user_roles.student_user },
  { id: 6, name: "emilywilliams", email: "emilywilliams@example.com", role: user_roles.non_student_user }
];

const ManageUsers = () => {
  const [profiles, setProfiles] = useState<Profile[]>(initialUsers);
  const [updatedProfiles, setUpdatedProfiles] = useState<Profile[]>(profiles);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<keyof Profile>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRole, setSelectedRole] = useState<string>("all");

  // Handles role change for a user and sends an email notification
  const handleRoleChange = (userId: number, newRole: user_roles) => {
    setUpdatedProfiles(prevProfiles =>
      prevProfiles.map(profiles => (profiles.id === userId ? { ...profiles, role: newRole } : profiles))
    );
    const profiles = updatedProfiles.find(u => u.id === userId);
    if (profiles) {
      sendRoleUpdateEmail(profiles.email, profiles.name, newRole);
    }
  };

  // Placeholder for saving changes
  const handleSaveChanges = () => {
    console.log("Saving changes:", updatedProfiles);
  };

  // Placeholder for sending role update email
  const sendRoleUpdateEmail = (email: string, name: string, newRole: user_roles) => {
    console.log(`Sending email to ${email} about role update for ${name} to ${newRole}`);
  };

  // Handles sorting by a field
  const handleSort = (field: keyof Profile) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  // Handles role filtering
  const handleRoleFilter = (role: string) => {
    setSelectedRole(role);
  };

  // Filters and sorts users based on search term, selected role, and sorting preferences
  const filteredProfiles = updatedProfiles
    .filter(profiles => {
      if (selectedRole === "all") {
        return profiles.name.toLowerCase().includes(searchTerm.toLowerCase()) || profiles.email.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return profiles.role === selectedRole && (profiles.name.toLowerCase().includes(searchTerm.toLowerCase()) || profiles.email.toLowerCase().includes(searchTerm.toLowerCase()));
      }
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        if (typeof a[sortBy] === "string" && typeof b[sortBy] === "string") {
          return a[sortBy].localeCompare(b[sortBy]);
        }
        return 0;
      } else {
        if (typeof a[sortBy] === "string" && typeof b[sortBy] === "string") {
          return b[sortBy].localeCompare(a[sortBy]);
        }
        return 0;
      }
    });

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Manage User Roles</h1>
      <div className="mb-6 flex items-center justify-between">
        <Input
          type="search"
          placeholder="Search users..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-1/2 md:w-1/3"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={selectedRole === "all" ? "default" : "default"}>
              {selectedRole === "all" ? "All" : selectedRole} <ChevronDownIcon className="h-4 w-4" />
            </Button>
            {/* dropdown beside search for role filter */}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value={selectedRole} onValueChange={handleRoleFilter}>
              <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={user_roles.superadmin}>Superadmin</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={user_roles.osa}>OSA - Director</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={user_roles.soas}>OSA - SOAS</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={user_roles.facility_manager}>Facility Manager</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={user_roles.student_user}>Student User</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={user_roles.non_student_user}>Non Student User</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-x-auto">
        <div className="border-t-4 border-[#8B0000] rounded-lg overflow-hidden">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-[#8B0000] text-white">
                    <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort("name")}>
                      User {sortBy === "name" && <span className="ml-1">{sortOrder === "asc" ? "▲" : "▼"}</span>}
                    </th>
                    <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort("email")}>
                      Email {sortBy === "email" && <span className="ml-1">{sortOrder === "asc" ? "▲" : "▼"}</span>}
                    </th>
                    <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort("role")}>
                      Role {sortBy === "role" && <span className="ml-1">{sortOrder === "asc" ? "▲" : "▼"}</span>}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProfiles.map(profiles => (
                    <tr key={profiles.id} className="border-b border-gray-200 dark:border-gray-800">
                      <td className="px-4 py-3">{profiles.name}</td>
                      <td className="px-4 py-3">{profiles.email}</td>
                      <td className="px-4 py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="text-black">
                              {profiles.role} <ChevronDownIcon className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {/* dropdown in table */}
                            <DropdownMenuRadioGroup value={profiles.role} onValueChange={(newRole) => handleRoleChange(profiles.id, newRole as user_roles)}>
                              <DropdownMenuRadioItem value={user_roles.superadmin}>Superadmin</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value={user_roles.osa}>OSA - Director</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value={user_roles.soas}>OSA - SOAS</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value={user_roles.facility_manager}>Facility Manager</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value={user_roles.student_user}>Student User</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value={user_roles.non_student_user}>Non Student User</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
<<<<<<< HEAD
        <Button onClick={handleSaveChanges} className="text-white hover:bg-[#8B0000]/90">
=======
        <Button onClick={handleSaveChanges} className="text-white hover:bg-secondary/90 ">
>>>>>>> FE-feature/adminpage
          Save Changes
        </Button>
      </div>
    </div>
  );
};

// SVG component for Chevron Down Icon
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

<<<<<<< HEAD
export default ManageUsers;
=======
export default ManageUsers;
>>>>>>> FE-feature/adminpage
