"use client";
// TODO: handle image upload

import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { createFacilitySchema } from "@/lib/validators";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddFacility from "@/hooks/mutations/useAddFacility";
import useGetProfilesByRole from "@/hooks/queries/useGetProfilesByRole";
import { Facility } from "@/lib/types";

import { useState, ChangeEvent } from "react";
import uploadFacilityImage from "@/hooks/buckets/upload/uploadFacilityImage";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandList,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { ChevronsUpDown } from "lucide-react";
import { Check } from "lucide-react";

type FormData = z.input<typeof createFacilitySchema>;

const CreateFacility = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(createFacilitySchema),
    defaultValues: {
      name: "",
      facility_type: undefined,
      description: "",
      location: "",
      capacity: 0,
      image_url: null,
      facility_manager: "",
    },
  });
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState<ChangeEvent<HTMLInputElement> | null>(
    null
  );

  const { mutateAsync } = useAddFacility();

  const onSubmit = async (data: FormData) => {
    const facility: Facility["Insert"] = {
      name: data.name,
      type: data.facility_type,
      description: data.description,
      location: data.location,
      capacity: data.capacity,
      facility_manager_id: data.facility_manager,
    };

    const requestResult = await mutateAsync(facility);

    // TODO: handle image upload
    if (event) {
      console.log("Uploading image...");
      uploadFacilityImage(event, requestResult.facility_id);
    }

    // close dialog and alert user (success or error)

    setOpen(false);
    form.reset();
  };

  // get facility managers
  const {
    data: facilityManagers,
    error,
    status,
  } = useGetProfilesByRole("facility manager");

  if (status === "pending") {
    return <p>Loading...</p>;
  }
  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-secondary-600  hover:bg-secondary-500 text-white"
        >
          Add Facility
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Facility</DialogTitle>
          <DialogDescription>
            Fill out the form to add a new facility to the system.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            className="grid gap-4 py-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Facility Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter facility name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="facility_type"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Facility Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select facility type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hall">Hall</SelectItem>
                          <SelectItem value="classroom">Classroom</SelectItem>
                          <SelectItem value="court">Court</SelectItem>
                          <SelectItem value="field">Open Fields</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter facility location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="capacity"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Capacity</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter facility capacity"
                        {...field}
                        onChange={(e) => {
                          field.onChange(+e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* FACILITY MANAGERS DROPDOWN */}
            <FormField
              control={form.control}
              name="facility_manager"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Facility Manager</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {/* god this is ugly, rewrite this */}
                          {field.value
                            ? facilityManagers.find(
                                (facility_manager) =>
                                  facility_manager.user_id === field.value
                              )?.last_name +
                              ", " +
                              facilityManagers.find(
                                (facility_manager) =>
                                  facility_manager.user_id === field.value
                              )?.first_name
                            : "Select manager"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search manager..." />
                        <CommandEmpty>No manager found.</CommandEmpty>

                        {/* DO NOT REMOVE THIS WRAPPER. Will break the command. Is a shadcn bug.*/}
                        <CommandList>
                          <CommandGroup>
                            {facilityManagers.map((facility_manager) => (
                              <CommandItem
                                value={`${facility_manager.last_name}, ${facility_manager.first_name}`}
                                key={facility_manager.user_id}
                                onSelect={() => {
                                  form.setValue(
                                    "facility_manager",
                                    facility_manager.user_id
                                  );
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    facility_manager.user_id === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {`${facility_manager.last_name}, ${facility_manager.first_name}`}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter facility description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Label>Upload Picture</Label>
            <Input type="file" onChange={(event) => setEvent(event)} />

            <DialogFooter>
              <Button type="submit">Save Facility</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default CreateFacility;
