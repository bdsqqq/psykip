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

// This is weird but I like it a lot, thanks @lukemorales https://twitter.com/lukemorales/status/1564424193877368832
type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | OneToNine;
type CompleteTensDigit = 1 | 2 | 3 | 4;

export type Chapter =
  | `${OneToNine}`
  | `${CompleteTensDigit}${ZeroToNine}`
  | `${5}${Extract<ZeroToNine, 1 | 2 | 3>}`;
