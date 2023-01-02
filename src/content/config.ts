import { z, defineCollection } from "astro:content";
import codes, { TranslationCode } from "../data/codes";

const translations = defineCollection({
  schema: {
    Author: z.string(),
    Title: z.string(),
    Translator: z.string(),
    Date: z.number(),
    Source: z.object({
      label: z.string(),
      url: z.string(),
    }),
    Code: z.enum(codes),
    Chapter: z.number(),
  },
});

export const collections = {
  translations: translations,
};
