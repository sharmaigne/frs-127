"use client"

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Profile {
  id: number;
  name: string;
  email: string;
  role: string;
}

const initialUsers: Profile[] = [
  { id: 1, name: "johndoe", email: "johndoe@example.com", role: "superadmin" },
  { id: 2, name: "janesmith", email: "janesmith@example.com", role: "OSA - Director" },
  { id: 3, name: "bobwilson", email: "bobwilson@example.com", role: "OSA - SOAS" },
  { id: 4, name: "sarahjones", email: "sarahjones@example.com", role: "facility manager" },
  { id: 5, name: "mikebrown", email: "mikebrown@example.com", role: "student user" },
  { id: 6, name: "emilywilliams", email: "emilywilliams@example.com", role: "non student user" },
];


const ManageUsers = () => {
  const [profiles, setUsers] = useState<Profile[]>(initialUsers);
  const [updatedUsers, setUpdatedUsers] = useState<Profile[]>(profiles);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<keyof Profile>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRole, setSelectedRole] = useState<string>("all");

  // Handles role change for a user and sends an email notification 
  const handleRoleChange = (userId: number, newRole: string) => {
    setUpdatedUsers(prevUsers =>
      prevUsers.map(profiles => (profiles.id === userId ? { ...profiles, role: newRole } : profiles))
    );
    const profiles = updatedUsers.find(u => u.id === userId);
    if (profiles) {
      sendRoleUpdateEmail(profiles.email, profiles.name, newRole);
    }
  };

  // Placeholder for saving changes
  const handleSaveChanges = () => {
    console.log("Saving changes:", updatedUsers);
  };

  // Placeholder for sending role update email
  const sendRoleUpdateEmail = (email: string, name: string, newRole: string) => {
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
  const filteredUsers = updatedUsers
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
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={selectedRole === "all" ? "default" : "outline"}>
              {selectedRole === "all" ? "All" : selectedRole} <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value={selectedRole} onValueChange={handleRoleFilter}>
              <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="superadmin">Superadmin</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="OSA - Director">OSA - Director</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="OSA - SOAS">OSA - SOAS</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="facility manager">Facility Manager</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="student user">Student User</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="non student user">Non Student User</DropdownMenuRadioItem>
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
                      User Name {sortBy === "name" && <span className="ml-1">{sortOrder === "asc" ? "▲" : "▼"}</span>}
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
                  {filteredUsers.map(profiles => (
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
                            <DropdownMenuRadioGroup value={profiles.role} onValueChange={(newRole) => handleRoleChange(profiles.id, newRole)}>
                              <DropdownMenuRadioItem value="superadmin">Superadmin</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="OSA - Director">OSA - Director</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="OSA - SOAS">OSA - SOAS</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="facility manager">Facility Manager</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="student user">Student User</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="non student user">Non Student User</DropdownMenuRadioItem>
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
        <Button onClick={handleSaveChanges} className="text-white hover:bg-[#8B0000]/90">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

// SVG component for Chevron Down Icon
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
export default ManageUsers