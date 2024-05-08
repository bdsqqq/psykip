import { clerkMiddleware } from "astro-clerk-auth/server";

export const onRequest = clerkMiddleware();