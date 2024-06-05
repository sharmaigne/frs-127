"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Icon from "@/components/Icon";
import accountCircle from "@/public/icons/account_circle.svg";
import useSupabase from "@/hooks/useSupabase";
import { useToast } from "@/components/ui/use-toast"


const ProfileSchema = z.object({
  first_name: z.string().nonempty({ message: "First name is required" }),
  middle_initial: z.string().optional(),
  last_name: z.string().nonempty({ message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contact_number: z.string().optional(),
});

const Profile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      first_name: "",
      middle_initial: "",
      last_name: "",
      email: "",
      contact_number: "",
    },
  });

  const handleEditProfileClick = () => {
    setIsDialogOpen(true);
  };

  const handleSaveChanges = async (data: any) => {
    // can be changed to a more appropriate logic
    try {
      const response = await fetch("/api/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      // Handle success
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error
    }
  };
  const { toast } = useToast()

  const supabase = useSupabase();
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error logging out:", error.message);
      return;
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Icon
              src={accountCircle.src}
              alt="Profile"
              color="red"
              width={35}
              height={35}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 p-0">
          <DropdownMenuItem onClick={handleLogOut} className="p-0">
            <span className="p-2 rounded-sm cursor-pointer w-full h-full hover:bg-dark/20">
              Log Out
            </span>
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem onClick={handleEditProfileClick} className="p-0">
            <span className="p-2 rounded-sm cursor-pointer w-full h-full hover:bg-dark/20">
              Edit Profile
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your personal information.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={form.handleSubmit(handleSaveChanges)}
            className="grid gap-4 py-4"
          >
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="first_name" className="text-right">
                First Name
              </Label>
              <Input
                id="first_name"
                {...form.register("first_name")}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="middle_initial" className="text-right">
                Middle Initial
              </Label>
              <Input
                id="middle_initial"
                {...form.register("middle_initial")}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="last_name" className="text-right">
                Last Name
              </Label>
              <Input
                id="last_name"
                {...form.register("last_name")}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="contact_number" className="text-right">
                Contact Number
              </Label>
              <Input
                id="contact_number"
                {...form.register("contact_number")}
                className="col-span-3"
              />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={form.formState.isSubmitting}
                onClick={() => {
                toast({
                  title: "Successfully updated profile!",
                  
                })
              }}>
                Save Changes
              </Button>
              
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Profile;
