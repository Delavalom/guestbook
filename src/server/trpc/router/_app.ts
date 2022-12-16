import { router } from "../trpc";
import { authRouter } from "./auth";
import { commentRouter } from "./comment";

export const appRouter = router({
  comment: commentRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
