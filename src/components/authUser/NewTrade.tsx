import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  // FormDescription,
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
import { Input } from "../ui/input";
import { currencyPairs, entryTypes, tradeDirection } from "~/lib/data";
import { api } from "~/utils/api";

const formSchema = z.object({
  entryPrice: z
    .number()
    .min(0, "Entry price must be greater than or equal to 0.")
    .positive("Entry price must be a positive number."),
  stopLoss: z
    .number()
    .min(0, "Stop loss must be greater than or equal to 0.")
    .positive("Stop loss must be a positive number."),
  takeProfit: z
    .number()
    .min(0, "Take profit must be greater than or equal to 0.") // Assuming 0 is the minimum possible value for take profit.
    .positive("Take profit must be a positive number."),

  currencyPair: z.string().nonempty("Please select a currency pair."),
  tradePosition: z.string().nonempty("Please select a trade position."),
  entryType: z.string().nonempty("Please select an entry type."),
});

export function NewTrade() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currencyPair: "",
      entryPrice: 0.01,
      entryType: "",
      stopLoss: 0.01,
      takeProfit: 0.01,
      tradePosition: "",
    },
  });

  const createJournalMutation = api.journal.createJournal.useMutation();

  // 2. Define a submit handler.

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const {
      currencyPair,
      entryType,
      entryPrice,
      stopLoss,
      takeProfit,
      tradePosition,
    } = values;
    createJournalMutation.mutate({
      currencyPair,
      entryType,
      entryPrice,
      stopLoss,
      takeProfit,
      tradePosition,
    });
  }

  // steps
  const [step, setStep] = useState(1);

  const next = () => {
    setStep((e) => e + 1);
  };
  const prev = () => {
    setStep((e) => e - 1);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {step === 1 && (
            <>
              <FormField
                control={form.control}
                name="currencyPair"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency pair</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Currency Pair" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {currencyPairs.map((pair) => (
                          <SelectItem key={pair.id} value={pair.id}>
                            {pair.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="entryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Entry Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Entry Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {entryTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tradePosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trade Position</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Trade Position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tradeDirection.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {step === 2 && (
            <>
              <FormField
                control={form.control}
                name="entryPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Entry Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Entry Price"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stopLoss"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stop Loss</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Stop Loss" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="takeProfit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Take Profit</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Take Profit"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <div className="my-3 space-y-1">
            {step < 3 ? (
              <Button onClick={next} className="w-full">
                Next
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Submit
              </Button>
            )}

            <Button
              disabled={step === 1}
              onClick={prev}
              variant="ghost"
              className="w-full"
            >
              Back
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
