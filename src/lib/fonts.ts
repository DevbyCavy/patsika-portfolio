import { Montserrat, Poppins, Archivo_Black } from "next/font/google";

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

// Placeholder for the brand display face (Akira Expanded, licensed — not
// available yet). Archivo Black stands in for big, heavy hero headlines.
// To swap in the real font once the files are available, replace this
// export with next/font/local pointing at the licensed files, e.g.:
//
//   import localFont from "next/font/local";
//   export const display = localFont({
//     variable: "--font-display",
//     src: [{ path: "../../assets/fonts/AkiraExpanded.woff2", weight: "700" }],
//   });
//
// Every component below reads the font through the --font-display variable,
// so no other file needs to change.
export const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});
