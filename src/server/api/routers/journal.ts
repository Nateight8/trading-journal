import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const journalRouter = createTRPCRouter({
  getAllJournals: protectedProcedure.query(async ({ ctx }) => {
    const user = ctx.session.user;

    return await ctx.prisma.tradeLog.findMany({
      where: {
        userId: user.id,
      },
    });
  }),

  createJournal: protectedProcedure
    .input(
      z.object({
        currencyPair: z.string(),
        entryType: z.string(),
        entryPrice: z.number(),
        stopLoss: z.number(),
        takeProfit: z.number(),
        tradePosition: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = ctx.session.user;
      const {
        currencyPair,
        entryType,
        entryPrice,
        stopLoss,
        takeProfit,
        tradePosition,
      } = input;

      const newJournal = await ctx.prisma.tradeLog.create({
        data: {
          userId: user.id,
          currencyPair,
          entryType,
          entryPrice,
          stopLoss,
          takeProfit,
          tradePosition,
        },
      });
      return newJournal;
    }),
});
