"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select';
import { z } from 'zod';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const eventSchema = z.object({
  name: z.string().min(1, 'Event name is required'),
  organization: z.string().min(1, 'Organization is required'),
  description: z.string().min(1, 'Event description is required'),
  start: z.string().min(1, 'Start time is required'),
  end: z.string().min(1, 'End time is required'),
  files: z.array(z.instanceof(File)).optional(),
});

type EventData = z.infer<typeof eventSchema>;

const riskSchema = z.object({
  risk: z.string().min(1, 'Risk is required'),
  effect: z.string().min(1, 'Effect is required'),
  likelihood: z.string().min(1, 'Likelihood is required'),
  impact: z.string().min(1, 'Impact is required'),
  mitigation: z.string().min(1, 'Mitigation is required'),
  escalation: z.string().min(1, 'Escalation point is required'),
});

type RiskData = z.infer<typeof riskSchema>;

const activityDesignSchema = z.object({
  start: z.string().min(1, 'Start time is required'),
  end: z.string().min(1, 'End time is required'),
  files: z.array(z.instanceof(File)).optional(),
});

type ActivityDesignData = z.infer<typeof activityDesignSchema>;

const activityRequestSchema = z.object({
  files: z.array(z.instanceof(File)).min(1, 'Activity request file is required'),
});

type ActivityRequestData = z.infer<typeof activityRequestSchema>;

type MutationVariables = EventData & RiskData & ActivityDesignData & ActivityRequestData;

type MutationFunction = (data: MutationVariables) => Promise<unknown>;

const submitEvent: MutationFunction = async (data) => {
    const formData = new FormData();
  
    // Append event data
    formData.append('name', data.name);
    formData.append('organization', data.organization);
    formData.append('description', data.description);
    formData.append('start', data.start); //start date and time
    formData.append('end', data.end); //end date and time
    if (data.files) {
      data.files.forEach(file => formData.append('eventFiles', file));
    }
  
    // Append risk data
    formData.append('risk', data.risk);
    formData.append('effect', data.effect);
    formData.append('likelihood', data.likelihood);
    formData.append('impact', data.impact);
    formData.append('mitigation', data.mitigation);
    formData.append('escalation', data.escalation);
  
    // Append activity design data
    formData.append('activityStart', data.start);
    formData.append('activityEnd', data.end);
    if (data.files) {
      data.files.forEach(file => formData.append('activityDesignFiles', file));
    }
  
    // Append activity request files
    if (data.files) {
      data.files.forEach(file => formData.append('activityRequestFiles', file));
    }
  
    try {
      const response = await axios.post('/api/submit-event', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Form submitted successfully!', response.data);
      return response.data; // Return the response data if necessary
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error; // Throw error to be caught by useMutation
    }
  };
  

const Popup = () => {
  const [step, setStep] = useState(1);
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: zodResolver(step === 1 ? eventSchema : step === 2 ? riskSchema : step === 3 ? activityDesignSchema : activityRequestSchema),
  });

  const { mutate } = useMutation<unknown, unknown, MutationVariables>(submitEvent);



const handleNext = (data: FieldValues) => {
    if (step === 1) {
      const eventData = eventSchema.safeParse(data);
      if (eventData.success) {
        setStep(2);
      } else {
        console.error('Invalid event data:', eventData.error);
      }
    } else if (step === 2) {
      const riskData = riskSchema.safeParse(data);
      if (riskData.success) {
        setStep(3);
      } else {
        console.error('Invalid risk data:', riskData.error);
      }
    } else if (step === 3) {
      const activityDesignData = activityDesignSchema.safeParse(data);
      if (activityDesignData.success) {
        setStep(4);
      } else {
        console.error('Invalid activity design data:', activityDesignData.error);
      }
    } else if (step === 4) {
        const activityDesignData = activityDesignSchema.safeParse(data); // Declare the activityDesignData variable
        const eventData = eventSchema.safeParse(data);
        const riskData = riskSchema.safeParse(data);
        const activityRequestData = activityRequestSchema.safeParse(data);
        if (activityRequestData.success) {
            const combinedData = {
                ...eventData.data,
                ...riskData.data,
                ...activityDesignData.data,
                ...activityRequestData.data,
            };
            mutate(combinedData as MutationVariables);
        } else {
            console.error('Invalid activity request data:', activityRequestData.error);
        }
    }
  };
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Reserve</Button>
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[600px] sm:max-h-[600px] overflow-auto">
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle>Event Details</DialogTitle>
              <DialogDescription>Fill out the following details for your event.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Event Name</Label>
                  <Input id="name" placeholder="Enter event name" {...register('name')} />
                  {errors.name && <p className="text-red-500">{errors.name.message as React.ReactNode}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" placeholder="Enter organization" {...register('organization')} />
                  {errors.organization && <p className="text-red-500">{errors.organization.message as React.ReactNode}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Event Description</Label>
                <Textarea id="description" placeholder="Enter event description" {...register('description')} />
                {errors.description && <p className="text-red-500">{errors.description.message as React.ReactNode}</p>}
              </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="start">Start Time</Label>
                    <Input id="start" type="datetime-local" {...register('start')} />
                    {errors.start && <p className="text-red-500">{errors.start?.message?.toString() || 'Error occurred'}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="end">End Time</Label>
                    <Input id="end" type="datetime-local" {...register('end')} />
                    {errors.end && <p className="text-red-500">{errors.end?.message?.toString() || 'Error occurred'}</p>}
                </div>
            </div>
              <div className="space-y-2">
                <Label htmlFor="files">Attach Files</Label>
                <Input id="files" multiple type="file" {...register('files')} />
              </div>
            </div>
            <DialogFooter>
             <Button type="button" onClick={handleSubmit(handleNext)}>Next</Button>
            </DialogFooter>
          </>
        )}
        {step === 2 && (
          <>
            <DialogHeader>
              <DialogTitle> Risk Management </DialogTitle>
              <DialogDescription>Provide risk management details of your event.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-6 justify-between">
            <div className="space-y-2">
                <Label htmlFor="risk">Risk</Label>
                <Input id="risk" placeholder="Enter possible event risks" {...register('risk')} />
                {errors.risk && <p className="text-red-500">{errors.risk?.message?.toString() || 'Error occurred'}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="effect">Effect</Label>
                <Input id="effect" placeholder="Enter possible effects" {...register('effect')} />
                {errors.effect && <p className="text-red-500">{errors.effect?.message?.toString() || 'Error occurred'}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="likelihood" className="me-5">Likelihood</Label>
                <Select id="likelihood" {...register('likelihood')}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Likelihood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
                {errors.likelihood && <p className="text-red-500">{errors.likelihood?.message?.toString() || 'Error occurred'}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="impact" className="me-5">Impact</Label>
                <Select id="impact" {...register('impact')}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Impact" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
                {errors.impact && <p className="text-red-500">{errors.impact?.message?.toString() || 'Error occurred'}</p>}
              </div>

              <div className="space-y-2">
                <div className="justify-between">
                  <Label htmlFor="mitigation">Management and Mitigating Action</Label>
                  <p className="text-sm text-gray-500 ">How will the risk be managed and monitored? What are the mitigating actions?</p>
                </div>
                <Textarea id="mitigation" placeholder="Enter additional notes" {...register('mitigation')} />
                {errors.imitigation && <p className="text-red-500">{errors.mitigation?.message?.toString() || 'Error occurred'}</p>}
              </div>
              <div className="space-y-2 ">
                <div className="justify-between">
                  <Label htmlFor="escalation">Escalation Point</Label>
                  <p className="text-sm text-gray-500 ">How will the risk be managed and monitored? What are the mitigating actions?</p>
                </div>
                <Textarea id="escalation" placeholder="Enter additional notes" {...register('escalation')} />
                {errors.escalation && <p className="text-red-500">{errors.escalation?.message?.toString() || 'Error occurred'}</p>}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleSubmit(handleNext)}>Next</Button>
              <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
            </DialogFooter>
          </>
        )}
        {step === 3 && (
          <>
            <DialogHeader>
              <DialogTitle> Activity Design </DialogTitle>
              <DialogDescription>Provide activity design of your event.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-6 justify-between">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-activitydesign">Start Time</Label>
                  <Input id="start-activitydesign" type="datetime-local" {...register('start')} />
                  {errors.start && <p className="text-red-500">{errors.start?.message?.toString() || 'Error occurred'}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-actDesign">End Time</Label>
                  <Input id="end-actDesign" type="datetime-local" {...register('end')} />
                  {errors.end && <p className="text-red-500">{errors.end?.message?.toString() || 'Error occurred'}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="files-actDesign">Attach Files</Label>
                <Input id="files-actDesign" multiple type="file" {...register('files')} />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleSubmit(handleNext)}>Next</Button>
              <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
            </DialogFooter>
          </>
        )}
        {step === 4 && (
          <>
            <DialogHeader>
              <DialogTitle> Activity Design </DialogTitle>
              <DialogDescription>Provide activity design of your event.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-6 justify-between">
              <div className="grid grid-cols-2 gap-4">
              </div>
              <div className="space-y-2">
                <Label htmlFor="files-actRequest">Attach Activity Request File</Label>
                <Input id="files-actRequest" multiple type="file" {...register('files')} />
               {errors.files && <p className="text-red-500">{errors.files?.message?.toString() || 'Error occurred'}</p>}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleSubmit(handleNext)}>Submit</Button>
              <Button variant="outline" onClick={() => setStep(3)}>Back</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
