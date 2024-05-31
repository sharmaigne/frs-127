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
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

import RiskTable from "./RiskTable";
import ProgramTable from "./ProgramTable";

// Define the Zod schema for validation
const formSchema = z.object({
  event_name: z
    .string()
    .min(2, { message: "Event name must be at least 2 characters." }),
  event_description: z
    .string()
    .min(5, { message: "Event description must be at least 5 characters." }),
  organization: z
    .string()
    .min(2, { message: "Organization must be at least 2 characters." }),
  timestamp_start: z.string().min(1, { message: "Start time is required." }),
  timestamp_end: z.string().min(1, { message: "End time is required." }),
  files:
    typeof window !== "undefined" ? z.instanceof(FileList).optional() : z.any(),
  risks_table: z
    .array(
      z.object({
        risk: z.string().min(1),
        effect: z.string().min(1),
        likelihood: z.string().min(1),
        impact: z.enum(["low", "medium", "high"]),
        mitigating_action: z.enum(["low", "medium", "high"]),
        escalation_point: z.string().min(1),
        actions: z.string().min(1),
      })
    )
    .optional(),
  program_schedule: z
    .array(
      z.object({
        time_start: z.string().min(1),
        time_end: z.string().min(1),
        program: z.string().min(1),
      })
    )
    .optional(),
});

// Define the TypeScript type for the form data
type FormData = z.infer<typeof formSchema>;

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
      risks_table: [
        {
          risk: "",
          effect: "",
          likelihood: "",
          impact: "low",
          mitigating_action: "low",
          escalation_point: "",
          actions: "",
        },
      ],
      program_schedule: [{ time_start: "", time_end: "", program: "" }],
    },
  });

  const {
    fields: riskFields,
    append: appendRisk,
    remove: removeRisk,
  } = useFieldArray({
    control: form.control,
    name: "risks_table",
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
              <CardDescription>
                Fill out the form below to submit your information to admin.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
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
                          <Textarea
                            placeholder="Event description"
                            {...field}
                          />
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
                          <Input
                            type="file"
                            onChange={(e) => field.onChange(e.target.files)}
                            multiple
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CardTitle>Risk Table</CardTitle>
                  <RiskTable
                    control={form.control}
                    register={form.register}
                    fields={riskFields}
                    append={appendRisk}
                    remove={removeRisk}
                  />
                  <FormField
                    control={form.control}
                    name="files"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attach Risk Table File</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            onChange={(e) => field.onChange(e.target.files)}
                            multiple
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CardTitle>Program Schedule</CardTitle>
                  <ProgramTable
                    control={form.control}
                    register={form.register}
                    fields={programFields}
                    append={appendProgram}
                    remove={removeProgram}
                  />
                  <FormField
                    control={form.control}
                    name="files"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attach Program Schedule File</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            onChange={(e) => field.onChange(e.target.files)}
                            multiple
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
