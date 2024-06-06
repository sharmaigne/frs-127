"use client";
// TODO: add logic to handle file uploads
// TODO: add logic to get only either file upload or text inputs
// TODO: make the form easier to use (eg. date picker)
// TODO: clean up tables
// TODO: add drafts feature
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
import RiskTable from "../RiskTable";
import ProgramTable from "../ProgramTable";

import { Request, ActivityDesign, Program, Risk } from "@/lib/types";
import useAddRequest from "@/hooks/mutations/useAddRequest";
import useAddPrograms from "@/hooks/mutations/useAddPrograms";
import useAddRisks from "@/hooks/mutations/useAddRisks";
import uploadActivityDesign from "@/hooks/buckets/upload/uploadActivityDesign";
import uploadActivityRequest from "@/hooks/buckets/upload/uploadActivityRequest";
import uploadRiskAnalysis from "@/hooks/buckets/upload/uploadRiskAnalysis";
import getActivityDesignByRequestId from "@/hooks/buckets/retrieve/getActivityDesignByRequestId";
import getActivityRequestByRequestId from "@/hooks/buckets/retrieve/getActivityRequestByRequestId";
import getRiskAnalysisByRequestId from "@/hooks/buckets/retrieve/getRiskAnalysisByRequestId";

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
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import { redirect, useParams } from "next/navigation";
import Link from "next/link";
import { useRef, useState, ChangeEvent } from "react";
import useUpdateRequest from "@/hooks/mutations/useUpdateRequest";

// Define the TypeScript type for the form data
type FormData = z.infer<typeof requestFormSchema>;

const FormRequest = () => {
  const { facility_id } = useParams();

  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      facility_id: facility_id as string,
      event_name: "",
      event_description: "",
      organization: "",
      timestamp_start: "",
      timestamp_end: "",
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

  // states for the pdf files
  const [activityDesignPdf, setActivityDesignPdf] = useState<File>();
  const [activityRequestPdf, setActivityRequestPdf] = useState<File>();
  const [riskAnalysisPdf, setRiskAnalysisPdf] =
    useState<ChangeEvent<HTMLInputElement>>();

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
  const addPrograms = useAddPrograms();
  const addRisks = useAddRisks();
  const { mutate: mutateRequest } = useUpdateRequest();

  // Function to save the form data to local storage
  const saveDraft = () => {
    const formData = form.getValues();
    localStorage.setItem("formData", JSON.stringify(formData));
    toast({
      title: "Draft saved",
      description: "Your draft has been saved successfully.",
    });
  };

  // Function to load the form data from local storage
  const loadDraft = () => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      form.reset(JSON.parse(savedFormData));
      toast({
        title: "Draft loaded",
        description: "Your draft has been loaded successfully.",
      });
    }
  };

  // Load the draft when the component mounts
  useEffect(() => {
    loadDraft();
  }, []);

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

    // handle files (upload to bucket)
    if (activityDesignPdf) {
      console.log("Uploading activity design pdf...");
      await uploadActivityDesign(activityDesignPdf, requestId);
    }
    if (activityRequestPdf) {
      console.log("Uploading activity request pdf...");
      await uploadActivityRequest(activityRequestPdf, requestId);
    }
    if (riskAnalysisPdf) {
      console.log("Uploading risk analysis pdf...");
      await uploadRiskAnalysis(riskAnalysisPdf, requestId);
    }

    // add pdf urls to requests table
    const pdfUrls: Request["Update"] = {};
    if (activityDesignPdf) {
      pdfUrls["activity_design_url"] =
        getActivityDesignByRequestId(requestId).publicUrl;
    }
    if (activityRequestPdf) {
      pdfUrls["activity_request_url"] =
        getActivityRequestByRequestId(requestId).publicUrl;
    }
    if (riskAnalysisPdf) {
      pdfUrls["risk_analysis_url"] =
        getRiskAnalysisByRequestId(requestId).publicUrl;
    }

    mutateRequest({ requestData: pdfUrls, request_id: requestId });

    // success toast
    toast({
      title: "You have successfully Submitted the Form :)",
      description: "Please wait patiently for Admin Feedback.",
      action: <ToastAction altText="Undo">Undo</ToastAction>,
    });
  };

  const { data: facilities = [], status, error } = useGetFacilities();

  if (status === "pending") {
    return <div>Loading Form...</div>;
  }

  if (status === "error") {
    return <div>Error loading facilities: {error?.message}</div>;
  }

  if (!facilities.find((facility) => facility.facility_id === facility_id)) {
    redirect("/home/formrequest");
  }

  return (
    <div className="container mx-auto my-12 px-4 sm:px-6 lg:px-16 ">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 ">
          <Card className="bg-text-50 text-text">
            <CardHeader>
              <CardTitle className="text-primary font-bold text-3xl">
                Request Form
              </CardTitle>
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
                  <div className="grid grid-cols-3 gap-4">
                    {/* FACILITY DROPDOWN */}
                    <FormField
                      control={form.control}
                      name="facility_id"
                      render={({ field }) => (
                        <FormItem className="flex flex-col w-full">
                          <FormLabel>Facility</FormLabel>
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
                                  {field.value
                                    ? facilities.find(
                                        (facility) =>
                                          facility.facility_id === field.value
                                      )?.name
                                    : "Select facility"}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput placeholder="Search facility..." />
                                <CommandEmpty>No facility found.</CommandEmpty>

                                {/* DO NOT REMOVE THIS WRAPPER. Will break the command. Is a shadcn bug.*/}
                                <CommandList>
                                  <CommandGroup>
                                    {facilities.map((facility) => (
                                      <CommandItem
                                        value={facility.name}
                                        key={facility.facility_id}
                                        onSelect={() => {
                                          form.setValue(
                                            "facility_id",
                                            facility.facility_id
                                          );
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            facility.facility_id === field.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        {facility.name}
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
                  </div>
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

                  <div className="grid grid-cols-2 gap-4">
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
                  </div>

                  <div>
                    <Label>Optional: Attach Activity Request</Label>
                    <p>
                      <Link
                        href=""
                        className="underline italic text-secondary-500"
                      >
                        See template here
                      </Link>
                    </p>
                  </div>
                  <Input
                    type="file"
                    onChange={(e) => setActivityRequestPdf(e.target.files?.[0])}
                  />

                  <CardHeader className="pt-8 pl-0 pb-0">
                    <CardTitle className="text-primary font-bold text-3xl">
                      Risk Table
                    </CardTitle>
                    <CardDescription>
                      Fill out the risk table below.
                    </CardDescription>
                  </CardHeader>
                  <RiskTable
                    register={form.register}
                    fields={riskFields}
                    append={appendRisk}
                    remove={removeRisk}
                  />

                  <div>
                    <Label>
                      Optional: Attach Risk Analysis and Management PDF
                    </Label>
                    <p>
                      <Link
                        href=""
                        className="underline italic text-secondary-500"
                      >
                        See template here
                      </Link>
                    </p>
                  </div>
                  <Input type="file" onChange={(e) => setRiskAnalysisPdf(e)} />

                  <CardHeader className=" pt-8 pl-0 pb-0">
                    <CardTitle className="text-primary font-bold text-3xl">
                      Program Schedule
                    </CardTitle>
                    <CardDescription>
                      Fill out the program schedule below.
                    </CardDescription>
                  </CardHeader>
                  <ProgramTable
                    register={form.register}
                    fields={programFields}
                    append={appendProgram}
                    remove={removeProgram}
                  />

                  <div>
                    <Label>Optional: Attach Activity Design PDF</Label>
                    <p>
                      <Link
                        href=""
                        className="underline italic text-secondary-500"
                      >
                        See template here
                      </Link>
                    </p>
                  </div>
                  <Input
                    type="file"
                    onChange={(e) => setActivityDesignPdf(e.target.files?.[0])}
                  />

                  <div className="flex space-x-4 justify-center py-8">
                    <Button
                      className="bg-primary-400 hover:bg-primary font-bold"
                      type="submit"
                      onClick={() => {
                        // toast not working for some reason
                        toast({
                          title: "You have successfully Submitted the Form :)",
                          description:
                            "Please wait patiently for Admin Feedback.",
                          action: (
                            <ToastAction altText="Undo">Undo</ToastAction>
                          ),
                        });
                      }}
                    >
                      Submit
                    </Button>
                    <Button type="button" variant="outline" onClick={saveDraft}>
                      Save Draft
                    </Button>
                    <Button type="button" variant="outline" onClick={loadDraft}>
                      Load Draft
                    </Button>
                  </div>
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
