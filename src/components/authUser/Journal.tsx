import React from "react";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FormTsx from "./FormTsx";

function Journal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Log Trade</Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Forex Trading Journal</DialogTitle>
          <DialogDescription>
            Keep track of your journey Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FormTsx />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Journal;
