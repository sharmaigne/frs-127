import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Datas } from "./types";

export const columns: ColumnDef<Datas>[] = [
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
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => <div className="font-bold"> {row.getValue("user")} <div></div> {row.getValue("email")}</div>,
  },

  {
    accessorKey: "organization",
    header: "Organization",
    cell: ({ row }) => <div>{row.getValue("organization") }
    </div>,
  },
  {
    accessorKey: "facility",
    header: "Facility",
    cell: ({ row }) => <div>{row.getValue("facility")}</div>,
  },
  {
    accessorKey: "dateTimeStart",
    header: "Date & Time",
    cell: ({ row }) => <div>{row.getValue("dateTimeStart")} </div>,
  },
  {
    accessorKey: "dateTimeEnd",
    header: "Date & Time End",
    cell: ({ row }) => <div>{row.getValue("dateTimeEnd")}</div>,
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
      const { id, someDataForRedirect } = row.original; // Access data from the row object
      return (
        <div className="flex space-x-1">
          <Button variant="default" className="bg-secondary-400 hover:bg-secondary-300" onClick={() => handleApprove(id)}>
            Endorse
          </Button>
          <Button variant="default" className="bg-primary-400 hover:bg-primary-300" onClick={() => handleReject(id)}>
            Reject
          </Button>
          <Button variant="link"  onClick={() => handleRedirect(someDataForRedirect)}>
            View Details
          </Button>
        </div>
      );
    },
  },
];
