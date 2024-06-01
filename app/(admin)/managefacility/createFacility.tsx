"use client"  
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const CreateFacility = () => {
  const [facilityName, setFacilityName] = useState("");
  const [facilityType, setFacilityType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [picture, setPicture] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPicture(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting form...");

    // Check if picture is uploaded
    if (!picture) {
      alert("Please upload a picture");
      return;
    }

    try {
      // Store facility details in the database
      const { data: facilityData, error: insertError } = await supabase
        .from('facilities')
        .insert([
          { 
            name: facilityName, 
            type: facilityType, 
            description, 
            location, 
            capacity: parseInt(capacity, 10),
          }
        ]);

      if (insertError) {
        throw insertError;
      }

      console.log("Facility added successfully:", facilityData);

      // Upload image to Supabase storage with the generated facility ID
      const facilityId = facilityData[0].id;
      const { data: imageData, error: uploadError } = await supabase
        .storage
        .from('test')
        .upload(`facilityImage/${facilityType}-${facilityName.replace(/\s/g, '_')}-${facilityId}.jpg`, picture);

      if (uploadError) {
        throw uploadError;
      }

      console.log("Image uploaded:", imageData);

      // Update the facility record with the image URL
      const { data: updateData, error: updateError } = await supabase
        .from('facilities')
        .update({ image_url: imageData?.Key })
        .eq('id', facilityId);

      if (updateError) {
        throw updateError;
      }

      console.log("Facility updated with image URL:", updateData);

      // Reset form
      setFacilityName("");
      setFacilityType("");
      setDescription("");
      setLocation("");
      setCapacity("");
      setPicture(null);

      alert("Facility added successfully!");
    } catch (error) {
      console.error("Error adding facility:", error.message);
      alert("Failed to add facility. Please try again.");
    }
  };

  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Add Facility</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Facility</DialogTitle>
          <DialogDescription>Fill out the form to add a new facility to the system.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Facility Name</Label>
              <Input id="name" placeholder="Enter facility name" value={facilityName} onChange={(e) => setFacilityName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Facility Type</Label>
              <Select id="type" value={facilityType} onValueChange={setFacilityType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select facility type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="halls">Halls</SelectItem>
                  <SelectItem value="classrooms">Classrooms</SelectItem>
                  <SelectItem value="gymnasium">Gymnasium</SelectItem>
                  <SelectItem value="openfields">Open Fields</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter facility description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Enter facility location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="capacity">Capacity</Label>
              <Input id="capacity" placeholder="Enter capacity" type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="picture">Upload Picture</Label>
            <Input id="picture" type="file" onChange={handleFileChange} required />
          </div>
          <DialogFooter>
            <Button type="submit">Save Facility</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFacility;
