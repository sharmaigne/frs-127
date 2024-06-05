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
import { Facility } from "@/lib/types";

import { useState } from "react";
import { handleFileUpload_Form5} from "./clientActions";

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
    },
  });

    //FILEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, uploadHandler: (file: File) => Promise<void>) => {
      const file = event.target.files?.[0];
      if (file) {
        await uploadHandler(file);
      }
    };
    
  const [open, setOpen] = useState(false);

  const { mutate } = useAddFacility();

  const onSubmit = async (data: FormData) => {
    const facility: Facility["Insert"] = {
      name: data.name,
      type: data.facility_type,
      description: data.description,
      location: data.location,
      capacity: data.capacity,
    };

    mutate(facility);

    // TODO: handle image upload

    // close dialog and alert user (success or error)

    setOpen(false);
    form.reset();
  };
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
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

            <FormField
                    control={form.control}
                    name="files"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          upload Picture
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            id="form5"
                            type="file"
                         
                            onChange={(event) => handleFileChange(event, handleFileUpload_Form5)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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