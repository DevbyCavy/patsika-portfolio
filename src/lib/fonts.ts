import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";

// Body copy — friendly geometric sans.
export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Nav / labels / subheadings — bold geometric grotesk.
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

// Display face for big hero/section headlines — Monument Extended
// (Pangram Pangram). Stands in for the brand's licensed Akira Expanded
// until that font is purchased (the file currently in assets/fonts is a
// personal-use-only demo, not licensed for this commercial site). To swap
// in Akira Expanded later, point src at the licensed files here — every
// component reads the font through the --font-display variable, so no
// other file needs to change.
export const displayFont = localFont({
  variable: "--font-display",
  src: [
    {
      path: "../../assets/fonts/MonumentExtended-Regular.otf",
      weight: "400",
    },
  ],
});
