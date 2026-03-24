import localFont from "next/font/local";

export const fontHeading = localFont({
  src: "../public/fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "400 700",
});

export const fontBody = localFont({
  src: "../public/fonts/PlusJakartaSans-Variable.woff2",
  variable: "--font-jakarta",
  display: "swap",
  weight: "400 700",
});

export const fontMono = localFont({
  src: "../public/fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains",
  display: "swap",
  weight: "400 500",
});
