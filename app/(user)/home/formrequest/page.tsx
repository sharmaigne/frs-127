"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

// Define the Zod schema for validation
const formSchema = z.object({
  event_name: z.string().min(2, { message: "Event name must be at least 2 characters." }),
  event_description: z.string().min(5, { message: "Event description must be at least 5 characters." }),
  organization: z.string().min(2, { message: "Organization must be at least 2 characters." }),
  timestamp_start: z.string().nonempty({ message: "Start time is required." }),
  timestamp_end: z.string().nonempty({ message: "End time is required." }),
  files: typeof window !== "undefined" ? z.instanceof(FileList).optional() : z.any(),
  table_data: z.array(
    z.object({
      risk: z.string().nonempty(),
      effect: z.string().nonempty(),
      likelihood: z.string().nonempty(),
      impact: z.enum(["low", "medium", "high"]),
      mitigating_action: z.enum(["low", "medium", "high"]),
      escalation_point: z.string().nonempty(),
      actions: z.string().nonempty(),
    })
  ).optional(),
  program_schedule: z.array(
    z.object({
      time_start: z.string().nonempty(),
      time_end: z.string().nonempty(),
      program: z.string().nonempty(),
    })
  ).optional(),
});

// Define the TypeScript type for the form data
type FormData = z.infer<typeof formSchema>;

const TableComponent = ({ control, register, fields, append, remove }: any) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="px-4 py-2">Risk</th>
          <th className="px-4 py-2">Effect</th>
          <th className="px-4 py-2">Likelihood</th>
          <th className="px-4 py-2">Impact</th>
          <th className="px-4 py-2">Mitigating Action</th>
          <th className="px-4 py-2">Escalation Point</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((item: any, index: number) => (
          <tr key={item.id}>
            <td className="border px-4 py-2">
              <Input {...register(`table_data.${index}.risk`)} defaultValue={item.risk} placeholder="Risk" />
            </td>
            <td className="border px-4 py-2">
              <Input {...register(`table_data.${index}.effect`)} defaultValue={item.effect} placeholder="Effect" />
            </td>
            <td className="border px-4 py-2">
              <Input {...register(`table_data.${index}.likelihood`)} defaultValue={item.likelihood} placeholder="Likelihood" />
            </td>
            <td className="border px-2 py-2">
              <Select {...register(`table_data.${index}.impact`)} defaultValue={item.impact}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </td>
            <td className="border px-2 py-2">
              <Select {...register(`table_data.${index}.mitigating_action`)} defaultValue={item.mitigating_action}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </td>
            <td className="border px-4 py-2">
              <Textarea {...register(`table_data.${index}.escalation_point`)} defaultValue={item.escalation_point} placeholder="Escalation Point" />
            </td>
            <td className="border px-4 py-2">
              <Textarea {...register(`table_data.${index}.actions`)} defaultValue={item.actions} placeholder="Actions" />
            </td>
            <td className="border px-4 py-2">
              <Button type="button" onClick={() => remove(index)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Button type="button" onClick={() => append({ risk: "", effect: "", likelihood: "", impact: "low", mitigating_action: "low", escalation_point: "", actions: "" })}>
      Add Row
    </Button>
  </div>
);

const ProgramTableComponent = ({ control, register, fields, append, remove }: any) => (
  <div className="overflow-x-auto mt-8">
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="px-4 py-2">Start Time</th>
          <th className="px-4 py-2">End Time</th>
          <th className="px-4 py-2">Program</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((item: any, index: number) => (
          <tr key={item.id}>
            <td className="border px-4 py-2">
              <Input type="datetime-local" {...register(`program_schedule.${index}.time_start`)} defaultValue={item.time_start} />
            </td>
            <td className="border px-4 py-2">
              <Input type="datetime-local" {...register(`program_schedule.${index}.time_end`)} defaultValue={item.time_end} />
            </td>
            <td className="border px-4 py-2">
              <Input {...register(`program_schedule.${index}.program`)} defaultValue={item.program} placeholder="Program" />
            </td>
            <td className="border px-4 py-2">
              <Button type="button" onClick={() => remove(index)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Button type="button" onClick={() => append({ time_start: "", time_end: "", program: "" })}>
      Add Row
    </Button>
  </div>
);

const FormRequest = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      event_name: "",
      event_description: "",
      organization: "",
      timestamp_start: "",
      timestamp_end: "",
      files: undefined,
      table_data: [{ risk: "", effect: "", likelihood: "", impact: "low", mitigating_action: "low", escalation_point: "", actions: "" }],
      program_schedule: [{ time_start: "", time_end: "", program: "" }],
    },
  });

  const {
    fields: tableFields,
    append: appendTable,
    remove: removeTable,
  } = useFieldArray({
    control: form.control,
    name: "table_data",
  });

  const {
    fields: programFields,
    append: appendProgram,
    remove: removeProgram,
  } = useFieldArray({
    control: form.control,
    name: "program_schedule",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Request Form</CardTitle>
              <CardDescription>Fill out the form below to submit your information to admin.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="event_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Event name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="event_description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Event description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="Organization" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="timestamp_start"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Time</FormLabel>
                        <FormControl>
                          <Input type="datetime-local" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="timestamp_end"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Time</FormLabel>
                        <FormControl>
                          <Input type="datetime-local" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="files"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attach Files</FormLabel>
                        <FormControl>
                          <Input type="file" onChange={(e) => field.onChange(e.target.files)} multiple />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CardTitle>Risk Table</CardTitle>
                  <TableComponent control={form.control} register={form.register} fields={tableFields} append={appendTable} remove={removeTable} />
                  <CardTitle>Program Schedule</CardTitle>
                  <ProgramTableComponent control={form.control} register={form.register} fields={programFields} append={appendProgram} remove={removeProgram} />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormRequest;
