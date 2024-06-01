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

import { requestFormSchema } from "@/lib/validators";
import RiskTable from "./RiskTable";
import ProgramTable from "./ProgramTable";

import { Request, ActivityDesign, Program, Risk } from "@/lib/types";
import useAddRequest from "@/hooks/mutations/useAddRequest";
import useAddActivityDesign from "@/hooks/mutations/useAddActivityDesign";
import useAddPrograms from "@/hooks/mutations/useAddPrograms";
import useAddRiskAnalysis from "@/hooks/mutations/useAddRiskAnalysis";
import useAddRisks from "@/hooks/mutations/useAddRisks";

// Define the TypeScript type for the form data
type FormData = z.infer<typeof requestFormSchema>;

const FormRequest = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(requestFormSchema),
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
          likelihood: "low",
          impact: "low",
          mitigating_action: "",
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

  let requestId: string = "";
  let activityDesignId: string = "";
  const addRequest = useAddRequest();
  const addActivityDesign = useAddActivityDesign();
  const addPrograms = useAddPrograms();
  const addRiskAnalysis = useAddRiskAnalysis();
  const addRisks = useAddRisks();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // create request, send to backend
    // doesnt handle files and facility_id yet
    const requestData: Request["Insert"] = {
      event_name: data.event_name,
      event_description: data.event_description,
      organization: data.organization,
      timestamp_start: data.timestamp_start,
      timestamp_end: data.timestamp_end,
      facility_id: "dd68cc55-09a6-442d-974e-917741c02c09",
    };

    // mutateAsync is used instead of mutate since we're chaining multiple mutations
    const requestResult = await addRequest.mutateAsync(requestData);
    console.log("Request: ", requestResult);
    requestId = requestResult.request_id;

    // create activity design, send to backend
    const activityDesignData: ActivityDesign["Insert"] = {
      request_id: requestId,
    };

    const activityDesignResult = await addActivityDesign.mutateAsync(activityDesignData);
    console.log("Request: ", activityDesignResult);
    activityDesignId = activityDesignResult.activity_design_id;
    
    // create program schedule, send to backend
    const programScheduleData: Program["Insert"][] = data.program_schedule?.map(
      (program) => ({
        activity: program.program,
        activity_design_id: activityDesignId,
        timestamp_end: program.time_end,
        timestamp_start: program.time_start,
      })
    )!; // ! is used to tell TypeScript that the value is not null

    const programScheduleResult = addPrograms.mutateAsync(programScheduleData);
    console.log("Program: ", programScheduleResult);

    // create risk analysis, send to backend
    // for some reason, not symmetric with activity design / program schedule
    const riskAnalysisData = {
      request_id: requestId,
    };

    const riskAnalysisResult = addRiskAnalysis.mutateAsync(riskAnalysisData);
    console.log("Risk Analysis: ", riskAnalysisResult);

    const risksData: Risk["Insert"][] | undefined = data.risks_table?.map(
      (risk) => ({
        risk: risk.risk,
        effect: risk.effect,
        likelihood: risk.likelihood,
        impact: risk.impact,
        mitigating_action: risk.mitigating_action,
        escalation_point: risk.escalation_point
      })
    );

    const risksResult = addRisks.mutateAsync(risksData);
    console.log("Risks: ", risksResult);
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
