import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Request } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import useGetProfileById from "@/hooks/queries/useGetProfileById";
import useGetFacilityById from "@/hooks/queries/useGetFacilityById";
import moment from "moment";
import Link from "next/link";

const dateFormat = "llll";

export const columns: ColumnDef<Request["Row"]>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(!!value)
        }
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
    size: 50,
  },
  {
    accessorKey: "requestor_id",
    header: "User",
        // is in function form to use hooks

    cell: function CellComponent({ row }) {
      const {
        data: profile,
        error,
        status,
      } = useGetProfileById(row.getValue("requestor_id"));

      if (status === "error") {
        console.error(error);
        return <div>Name not found</div>;
      }

      if (status === "pending") {
        return <div></div>;
      }

      return (
        <div className="font-bold">
          {profile.first_name + " " + profile.last_name}
        </div>
      );
    },
    size: 200,
  },

  {
    accessorKey: "organization",
    header: "Organization",
    cell: ({ row }) => <div>{row.getValue("organization")}</div>,
    size: 150,
  },
  {
    accessorKey: "facility_id",

    header: "Facility",
    cell: function CellComponent({ row }) {
      const {
        data: facility,
        error,
        status,
      } = useGetFacilityById(row.getValue("facility_id"));

      if (status === "error") {
        console.error(error);
        return <div>Facility not found</div>;
      }

      if (status === "pending") {
        return <div></div>;
      }

      return <div className="font-bold">{facility.name}</div>;
    },

    size: 150,
  },
  {
    accessorKey: "timestamp_start",
    header: "Date & Time Start",
    cell: ({ row }) => (
      <div>{moment(row.getValue("timestamp_start")).format(dateFormat)} </div>
    ),

    size: 250,
  },
  {
    accessorKey: "timestamp_end",
    header: "Date & Time End",
    cell: ({ row }) => (
      <div>{moment(row.getValue("timestamp_end")).format(dateFormat)}</div>
    ),

    size: 250,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">
        <Badge className="bg-primary-300">{row.getValue("status")}</Badge>
      </div>
    ),

    size: 50,
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {

      console.log(row);
      // const { id, someDataForRedirect } = row.original; // Access data from the row object
      return (
        <div className="flex space-x-1">
          <Button className="bg-secondary-400 hover:bg-secondary-300">
            Endorse
          </Button>
          <Button className="bg-primary-400 hover:bg-primary-300">
            Reject
          </Button>
          <Button variant="link" asChild>
            <Link href={`/managerequest/${row.getValue("request_id")}`}>
              View Details
            </Link>
          </Button>
        </div>
      );
    },
    size: 250,
  },
  {
    accessorKey: "request_id",
    header: "Request ID",
    cell: ({ row }) => <div>{row.getValue("request_id")}</div>,
    size: 150,
  },
];