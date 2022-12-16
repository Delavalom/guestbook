import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const commentRouter = router({
  create: publicProcedure
    .input(z.object({ user: z.string().nullish(), content: z.string().nullish() }).nullish())
    .mutation(({ input, ctx }) => {
      return ctx.prisma.comment.create({
        data: {
          user: input?.user as string,
          content: input?.content as string
        }
      })
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.comment.findMany();
  }),
});
