import { z, defineCollection } from "astro:content";
import codes from "../data/codes";

const translations = defineCollection({
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
