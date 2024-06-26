"use client";

// TODO: add logic to handle file uploads
// TODO: add logic to get only either file upload or text inputs
// TODO: make the form easier to use (eg. date picker)
// TODO: clean up tables
// TODO: add drafts feature

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

import { handleFileUpload_Form5} from "./clientActions";

// dropdown
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useGetFacilities from "@/hooks/queries/useGetFacilities";
import { CommandList } from "cmdk";

// Define the TypeScript type for the form data
type FormData = z.infer<typeof requestFormSchema>;

const FormRequest = () => {
    
  const form = useForm<FormData>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      facility_id: "",
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
        },
      ],
      program_schedule: [{ time_start: "", time_end: "", program: "" }],
    },
  });

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, uploadHandler: (file: File) => Promise<void>) => {
    const file = event.target.files?.[0];
    if (file) {
      await uploadHandler(file);
    }
  };

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
  const addRequest = useAddRequest();
  const addActivityDesign = useAddActivityDesign();
  const addPrograms = useAddPrograms();
  const addRiskAnalysis = useAddRiskAnalysis();
  const addRisks = useAddRisks();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Data: ", data);
    // create request, send to backend
    // doesnt handle files yet
    const requestData: Request["Insert"] = {
      event_name: data.event_name,
      event_description: data.event_description,
      organization: data.organization,
      timestamp_start: data.timestamp_start,
      timestamp_end: data.timestamp_end,
      facility_id: data.facility_id,
    };

    // mutateAsync is used instead of mutate since the next requests depend on the request_id
    const requestResult = await addRequest.mutateAsync(requestData);
    console.log("Request: ", requestResult);
    requestId = requestResult.request_id;

    // create activity design, send to backend
    const activityDesignData: ActivityDesign["Insert"] = {
      request_id: requestId,
    };
    addActivityDesign.mutate(activityDesignData);

    // create program schedule, send to backend
    const programScheduleData: Program["Insert"][] = data.program_schedule?.map(
      (program) => ({
        activity: program.program,
        request_id: requestId,
        timestamp_end: program.time_end,
        timestamp_start: program.time_start,
      })
    )!; // ! is used to tell TypeScript that the value is not null
    addPrograms.mutate(programScheduleData);

    // create risk analysis, send to backend
    // for some reason, not symmetric with activity design / program schedule
    const riskAnalysisData = {
      request_id: requestId,
    };

    addRiskAnalysis.mutate(riskAnalysisData);

    const risksData: Risk["Insert"][] | undefined = data.risks_table?.map(
      (risk) => ({
        risk: risk.risk,
        effect: risk.effect,
        likelihood: risk.likelihood,
        impact: risk.impact,
        mitigating_action: risk.mitigating_action,
        escalation_point: risk.escalation_point,
      })
    );

    addRisks.mutate(risksData);
  };

  const { data: facilities = [], status, error } = useGetFacilities();

  if (status === "pending") {
    return <div>Loading facilities...</div>;
  }

  if (status === "error") {
    return <div>Error loading facilities: {error?.message}</div>;
  }

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
                    name="files"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="form5">Attach Files</FormLabel>
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
