import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import codes from "./data/codes";

const translations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/translations" }),
  schema: z.object({
    Author: z.string(),
    Title: z.string(),
    Translator: z.string(),
    Date: z.number(),
    Source: z.object({
      label: z.string(),
      url: z.string(),
    }),
    Code: z.enum(codes),
    Chapter: z.number().int().min(1).max(53),
  }),
});

export const collections = {
  translations: translations,
};
