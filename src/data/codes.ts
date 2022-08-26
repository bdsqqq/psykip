export default ["e", "ec", "gl", "pem", "sw", "twh", "twr", "wao"] as const;

export const translatorNamesByCode = {
  e: "Epictetus",
  ec: "Elizabeth Carter",
  gl: "George Long",
  pem: "P.E. Matheson",
  sw: "Stephen Walton",
  twh: "T.W. Higginson",
  twr: "T.W. Rolleston",
  wao: "William Abbott Oldfather",
} as const;
export type TranslationCode = keyof typeof translatorNamesByCode;
