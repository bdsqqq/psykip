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

// yeah, sorry, tried doing this the complicated way with tail recursion but copy pasting this to here is way easier AND this is a 2000 year old book, I'm almost sure the author will not come up with another edition...
export type Chapter =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31"
  | "32"
  | "33"
  | "34"
  | "35"
  | "36"
  | "37"
  | "38"
  | "39"
  | "40"
  | "41"
  | "42"
  | "43"
  | "44"
  | "45"
  | "46"
  | "47"
  | "48"
  | "49"
  | "50"
  | "51"
  | "52"
  | "53";
