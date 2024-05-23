"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select';

const NewForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    description: '',
    start: '',
    end: '',
    files: [],
    risk: '',
    effect: '',
    likelihood: '',
    impact: '',
    mitigation: '',
    escalation: '',
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? Array.from(files) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="max-w-[600px] mx-auto">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div className="space-y-4 py-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Event Name</Label>
                  <Input id="name" name="name" placeholder="Enter event name" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" name="organization" placeholder="Enter organization" onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Event Description</Label>
                <Textarea id="description" name="description" placeholder="Enter event description" onChange={handleChange} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start">Start Time</Label>
                  <Input id="start" name="start" type="datetime-local" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end">End Time</Label>
                  <Input id="end" name="end" type="datetime-local" onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="files">Attach Files</Label>
                <Input id="files" name="files" type="file" multiple onChange={handleChange} />
              </div>
            </div>
            <div className="flex justify-between">
              <Button type="button" onClick={handleNext}>Next</Button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="space-y-4 py-6">
              <div className="space-y-2">
                <Label htmlFor="risk">Risk</Label>
                <Input id="risk" name="risk" placeholder="Enter possible event risks" onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="effect">Effect</Label>
                <Input id="effect" name="effect" placeholder="Enter possible effects" onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="likelihood">Likelihood</Label>
                <Select id="likelihood" name="likelihood" onValueChange={(value) => setFormData({ ...formData, likelihood: value })}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Likelihood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="impact">Impact</Label>
                <Select id="impact" name="impact" onValueChange={(value) => setFormData({ ...formData, impact: value })}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Impact" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mitigation">Management and Mitigating Action</Label>
                <Textarea id="mitigation" name="mitigation" placeholder="Enter mitigating actions" onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="escalation">Escalation Point</Label>
                <Textarea id="escalation" name="escalation" placeholder="Enter escalation point" onChange={handleChange} />
              </div>
            </div>
            <div className="flex justify-between">
              <Button type="button" onClick={handlePrevious}>Back</Button>
              <Button type="button" onClick={handleNext}>Next</Button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div className="space-y-4 py-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="activityStart">Start Time</Label>
                  <Input id="activityStart" name="start" type="datetime-local" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="activityEnd">End Time</Label>
                  <Input id="activityEnd" name="end" type="datetime-local" onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="activityFiles">Attach Files</Label>
                <Input id="activityFiles" name="files" type="file" multiple onChange={handleChange} />
              </div>
            </div>
            <div className="flex justify-between">
              <Button type="button" onClick={handlePrevious}>Back</Button>
              <Button type="button" onClick={handleNext}>Next</Button>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <div className="space-y-4 py-6">
              <div className="space-y-2">
                <Label htmlFor="requestFiles">Attach Activity Request File</Label>
                <Input id="requestFiles" name="files" type="file" multiple onChange={handleChange} />
              </div>
            </div>
            <div className="flex justify-between">
              <Button type="button" onClick={handlePrevious}>Back</Button>
              <Button type="submit">Submit</Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default NewForm;
