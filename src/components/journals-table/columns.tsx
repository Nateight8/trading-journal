import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Payment } from "./main-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: () => <h1 className="whitespace-nowrap capitalize">Status</h1>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "pair",
    header: () => (
      <h1 className="whitespace-nowrap capitalize">Trading Pair</h1>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("pair")}</div>,
  },
  {
    accessorKey: "entryType",

    header: () => <h1 className="whitespace-nowrap capitalize">Entry Type</h1>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("entryType")}</div>
    ),
  },
  {
    accessorKey: "tradePosition",
    header: () => (
      <h1 className="whitespace-nowrap capitalize">Trade Position</h1>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("tradePosition")}</div>
    ),
  },
  {
    accessorKey: "entryPrice",
    header: () => <h1 className="whitespace-nowrap capitalize">Entry Price</h1>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("entryPrice")}</div>
    ),
  },
  {
    accessorKey: "stopLoss",
    header: () => <h1 className="whitespace-nowrap capitalize">Stop Loss</h1>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("stopLoss")}</div>
    ),
  },
  {
    accessorKey: "takeProfit",
    header: () => <h1 className="whitespace-nowrap capitalize">Take Profit</h1>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("takeProfit")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Update Status</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>Open</DropdownMenuItem>
            <DropdownMenuItem>Closed</DropdownMenuItem>
            <DropdownMenuItem>Pending</DropdownMenuItem>
            <DropdownMenuItem>Untriggered</DropdownMenuItem>
            <DropdownMenuItem>Triggerd</DropdownMenuItem>
            <DropdownMenuItem>Partials</DropdownMenuItem>
            <DropdownMenuItem>Filled</DropdownMenuItem>
            <DropdownMenuItem>Lost</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// {
//   accessorKey: "email",
//   header: ({ column }) => {
//     return (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Email
//         <CaretSortIcon className="ml-2 h-4 w-4" />
//       </Button>
//     );
//   },
//   cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
// },
