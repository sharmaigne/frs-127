import React from "react"
import { DataTable } from "./datatable"
import { data } from "./types"
import { Button } from "@/components/ui/button"
import CreateFacility from "./createFacility"

export default function DataTableExperiment() {
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
