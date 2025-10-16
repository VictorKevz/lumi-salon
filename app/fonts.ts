import { Titillium_Web, Josefin_Sans } from "next/font/google";

export const titillium = Titillium_Web({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-titillium",
});

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-josefin",
});
