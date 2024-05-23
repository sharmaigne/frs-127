import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Datas } from "./types";
import EditFacility from "./editFacility";

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
    accessorKey: "facility",
    header: "facility",
    cell: ({ row }) => <div className="font-bold"> {row.getValue("facility")} <div></div> {row.getValue("email")}</div>,
  },

  {
    accessorKey: "picture",
    header: "picture",
    cell: ({ row }) => <div>{row.getValue("picture") }
    </div>,
  },
  {
    accessorKey: "description",
    header: "description",
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <div>{row.getValue("type")} </div>,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => <div>{row.getValue("location")}</div>,
  },
  {
    accessorKey: "capacity",
    header: "Capacity",
    cell: ({ row }) => <div className="capacity">{row.getValue("capacity")}</div>,
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const { id, someDataForRedirect } = row.original; // Access data from the row object
      return (
        <div className="flex space-x-1">
          <Button variant="outline" className="" onClick={() => handleEdit(id)}>
            Edit
          </Button>
          <Button variant="default" className="bg-primary-400 hover:bg-primary-300" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </div>
      );
    },
  },
];
