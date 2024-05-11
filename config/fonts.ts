import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Whisper as FontWhisper,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const fontMono = FontMono({
  subsets: ["greek"],
  variable: "--font-mono",
});

export const fontWhisper = FontWhisper({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});
// Additional fonts for historical theme
