import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Request } from "@/lib/types";

import useGetProfileById from "@/hooks/queries/useGetProfileById";
import useGetFacilityById from "@/hooks/queries/useGetFacilityById";
import moment from "moment";

const dateFormat = "llll";


export const columns: ColumnDef<Request["Row"]>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "requestor_id",
    header: "User",
    cell: ({ row }) => { 
      const { data: profile, error, status} = useGetProfileById(row.getValue("requestor_id"));

      if (status === "error") {
        console.error(error);
        return <div>Name not found</div>;
      }

      if (status === "pending") {
        return <div></div>;
      }
      
      return (<div className="font-bold"> 
      {profile.first_name + " " + profile.last_name}
      </div>)}, // not id, fetch by id
  },

  {
    accessorKey: "organization",
    header: "Organization",
    cell: ({ row }) => <div>{row.getValue("organization") }
    </div>,
  },
  {
    accessorKey: "facility_id",
    header: "Facility",
    cell: ({ row }) => { 
      const { data: facility, error, status } = useGetFacilityById(row.getValue("facility_id"));
      
      if (status === "error") {
        console.error(error);
        return <div>Facility not found</div>;
      }
      
      if (status === "pending") {
        return <div></div>;
      }

      return (<div className="font-bold"> 
      {facility.name}
      </div>)}
  },
  {
    accessorKey: "timestamp_start",
    header: "Date & Time",
    cell: ({ row }) => <div>{moment(row.getValue("timestamp_start")).format(dateFormat)} </div>,
  },
  {
    accessorKey: "timestamp_end",
    header: "Date & Time End",
    cell: ({ row }) => <div>{moment(row.getValue("timestamp_end")).format(dateFormat)}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      // const { id, someDataForRedirect } = row.original; // Access data from the row object
      return (
        <div className="flex space-x-1">
          <Button variant="default" className="bg-secondary-400 hover:bg-secondary-300" >
            Endorse
          </Button>
          <Button variant="default" className="bg-primary-400 hover:bg-primary-300">
            Reject
          </Button>
          <Button variant="link">
            View Details
          </Button>
        </div>
      );
    },
  },
];
