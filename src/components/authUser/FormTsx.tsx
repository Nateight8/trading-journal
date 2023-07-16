import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { NewTrade } from "./NewTrade";
import { ClosedTrade } from "./ClosedTrade";

const formSchema = z.object({
  trade: z.string().min(2).max(50),
});

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function FormTsx({ setOpen }: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      //   username: "",
      trade: "",
    },
  });

  const [trade, setTrade] = useState("");
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setNextStep(2);
    setTrade(values.trade);
  }

  // steps
  const [step, setNextStep] = useState(1);

  return (
    <div>
      <Form {...form}>
        {step === 1 && (
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="trade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Trade Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="new">New Trade</SelectItem>
                      <SelectItem value="closed">Closed Trade</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-3">
              <Button type="submit" className="w-full" variant="outline">
                Select
              </Button>
            </div>
          </form>
        )}
        {step === 2 && (
          <>
            <div className="">
              {trade === "closed" ? (
                <ClosedTrade />
              ) : (
                <NewTrade setOpen={setOpen} />
              )}
            </div>
          </>
        )}
      </Form>
    </div>
  );
}

export default FormTsx;
