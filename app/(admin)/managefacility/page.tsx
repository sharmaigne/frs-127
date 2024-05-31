"use client"
import React from "react"
import { DataTable } from "./datatable"
import { Button } from "@/components/ui/button"
import CreateFacility from "./createFacility"

import useGetFacilities from "@/hooks/queries/useGetFacilities"

export default function DataTableExperiment() {

  const { data, error, status } = useGetFacilities();

  if (status === "error") {
    console.error(error);
    return <div>Error loading facilities</div>;
  }

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Manage Facilities</h1>
      <CreateFacility />
        </div>
      <DataTable data={data} />
    </div>
  )
}
