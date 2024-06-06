"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Profile } from "@/lib/types";
import useGetProfiles from "@/hooks/queries/useGetProfiles";

enum user_roles {
  superadmin = "Superadmin",
  osa = "OSA - Director",
  soas = "OSA - SOAS",
  facility_manager = "Facility Manager",
  student_user = "Student User",
  non_student_user = "Non Student User",
}

const ManageUsers = () => {
  const [updatedProfiles, setUpdatedProfiles] = useState<Profile["Row"][]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<keyof Profile["Row"]>("last_name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRole, setSelectedRole] = useState<string>("all");
  
  const { data: profiles, error, status } = useGetProfiles();
  
  useEffect(() => {
    if (status === "success") {
      setUpdatedProfiles(profiles);
    }
  }, [profiles, status]);
  
  if (status === "error") {
    console.error(error);
    return <div>Error loading profiles</div>;
  }
  if (status === "pending") {
    return <div>Loading...</div>;
  }
  // Handles role change for a user and sends an email notification
  const handleRoleChange = (
    userId: string,
    newRole: Profile["Row"]["role"]
  ) => {
    setUpdatedProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.user_id === userId ? { ...profile, role: newRole } : profile
      )
    );
    const profile = updatedProfiles.find((u) => u.user_id === userId);
    // if (profile) {
    //   sendRoleUpdateEmail(profile.email, profile.last_name!, newRole);
    // }
  };

  // Placeholder for saving changes
  const handleSaveChanges = () => {
    console.log("Saving changes:", updatedProfiles);
  };

  // Placeholder for sending role update email
  const sendRoleUpdateEmail = (
    email: string,
    name: string,
    newRole: user_roles
  ) => {
    console.log(
      `Sending email to ${email} about role update for ${name} to ${newRole}`
    );
  };

  // Handles sorting by a field
  const handleSort = (field: keyof Profile["Row"]) => {
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
    .filter((profile) => {
      const full_name = `${profile.last_name}, ${profile.first_name}`;
      if (selectedRole === "all") {
        return (
          full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          profile.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        return (
          profile.role === selectedRole &&
          (full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profile.email.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        if (typeof a[sortBy] === "string" && typeof b[sortBy] === "string") {
          return a[sortBy]?.localeCompare(b[sortBy]!) || 0;
        }
        return 0;
      } else {
        if (typeof a[sortBy] === "string" && typeof b[sortBy] === "string") {
          return b[sortBy]?.localeCompare(a[sortBy]!) || 0;
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
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 md:w-1/3"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={selectedRole === "all" ? "default" : "default"}
              className="flex gap-2"
            >
              {selectedRole === "all" ? "All" : selectedRole}{" "}
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
            {/* dropdown beside search for role filter */}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup
              value={selectedRole}
              onValueChange={handleRoleFilter}
            >
              <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={"superadmin"}>
                Superadmin
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={"osa"}>
                OSA - Director
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={"soas"}>
                OSA - SOAS
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={"facility manager"}>
                Facility Manager
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={"student user"}>
                Student User
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={"non student user"}>
                Non Student User
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="">
        <div className="border-t-4 border-[#8B0000] rounded-lg overflow-hidden">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-[#8B0000] text-white">
                    <th
                      className="px-4 py-3 text-left cursor-pointer"
                      onClick={() => handleSort("last_name")}
                    >
                      User{" "}
                      {sortBy === "last_name" && (
                        <span className="ml-1">
                          {sortOrder === "asc" ? "▲" : "▼"}
                        </span>
                      )}
                    </th>
                    <th
                      className="px-4 py-3 text-left cursor-pointer"
                      onClick={() => handleSort("email")}
                    >
                      Email{" "}
                      {sortBy === "email" && (
                        <span className="ml-1">
                          {sortOrder === "asc" ? "▲" : "▼"}
                        </span>
                      )}
                    </th>
                    <th
                      className="px-4 py-3 text-left cursor-pointer"
                      onClick={() => handleSort("role")}
                    >
                      Role{" "}
                      {sortBy === "role" && (
                        <span className="ml-1">
                          {sortOrder === "asc" ? "▲" : "▼"}
                        </span>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProfiles.map((profile) => (
                    <tr
                      key={profile.user_id}
                      className="border-b border-gray-200 dark:border-gray-800"
                    >
                      <td className="px-4 py-3">{`${profile.last_name}, ${profile.first_name}`}</td>
                      <td className="px-4 py-3">{profile.email}</td>
                      <td className="px-4 py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-black w-48 flex justify-between"
                            >
                              {profile.role}{" "}
                              <ChevronDownIcon className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {/* dropdown in table */}
                            <DropdownMenuRadioGroup
                              value={profile.role!}
                              onValueChange={(newRole) =>
                                handleRoleChange(profile.user_id, newRole as Profile["Row"]["role"])
                              }
                            >
                              <DropdownMenuRadioItem value={"superadmin"}>
                                Superadmin
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value={"osa"}>
                                OSA - Director
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value={"soas"}>
                                OSA - SOAS
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value={"facility_manager"}>
                                Facility Manager
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value={"student user"}>
                                Student User
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value={"non student user"}>
                                Non Student User
                              </DropdownMenuRadioItem>
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
      {/* <div className="mt-6 flex justify-end">
        <Button
          onClick={handleSaveChanges}
          className="text-white hover:bg-secondary/90 "
        >
          Save Changes
        </Button>
      </div> */}
    </div>
  );
};

// SVG component for Chevron Down Icon
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default ManageUsers;
