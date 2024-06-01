"use client"
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import React from 'react'



const CreateFacility = () => {
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
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Facility Name</Label>
              <Input id="name" placeholder="Enter facility name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Facility Type</Label>
              <Select>
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
            <Textarea id="description" placeholder="Enter facility description" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Enter facility location" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="capacity">Capacity</Label>
              <Input id="capacity" placeholder="Enter capacity" type="number" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="picture">Upload Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <DialogFooter>
            <Button type="submit">Save Facility</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
export default CreateFacility

//orig