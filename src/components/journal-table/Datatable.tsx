import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function Datatable() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Currency Pair</TableHead>
            <TableHead>Entry Type</TableHead>
            <TableHead className="text-left">Trade Position</TableHead>
            <TableHead className="text-left">Entry Price</TableHead>
            <TableHead className="text-left">Stop Loss</TableHead>
            <TableHead className="text-left">Take Profit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
            <TableCell className="text-left">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default Datatable;
