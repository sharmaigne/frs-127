import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import EditFacility from "./editFacility";
import DeleteFacility from "./deleteFacility";
import { Facility } from "@/lib/types";
import Image from "next/image";

export const columns: ColumnDef<Facility["Row"]>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="invisible"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="invisible"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Facility",
    cell: ({ row }) => <div className="font-bold"> {row.getValue("name")}</div>,
  },

  {
    accessorKey: "image_url",
    header: "Image",
    cell: ({ row }) => <img src={row.getValue("image_url") || "/images/placeholder.png"} width={100} height={100} />,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const preview = (row.getValue("description") as string).split(" ").slice(0, 10);
      return <div>{`${preview.join(" ")}${preview.length <10 ? "": "..."}`}</div>;
    },
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
    header: "",
    cell: ({ row }) => {

      console.log(row);
      // const { id, someDataForRedirect } = row.original; // Access data from the row object

      //ADD LOGIC FOR EDIT AND DELETE BUTTONS
      return (
        <div className="flex space-x-1">

          <DeleteFacility />

        </div>
      );
    },
    size: 250,
  },
];
