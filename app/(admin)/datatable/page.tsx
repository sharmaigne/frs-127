import React from "react"
import { DataTable } from "./datatable"
import { data } from "./types"

export default function DataTableExperiment() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ongoing Requests</h1>
      <DataTable data={data} />
    </div>
  )
}
