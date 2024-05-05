import { customAlphabet } from "nanoid";
export const nanoid = customAlphabet(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
);

const prefixes = {
  bookmark: "bmrk",
} as const;

/**
 *
 * @see: https://unkey.dev/blog/uuid-ux thanks [@chronark_](https://twitter.com/chronark_)
 */
export function newId(prefix: keyof typeof prefixes): string {
  return [prefixes[prefix], nanoid(16)].join("_");
}
