// svb-web/lib/fonts.ts
import {
  Inter,
  Roboto,
  Open_Sans,
  Source_Sans_3,
  Lato,
  Montserrat,
  Poppins,
  Raleway,
  Playfair_Display,
  Merriweather,
  Abril_Fatface,
  DM_Serif_Display,
  Bebas_Neue,
  Noto_Sans,
  Nunito_Sans,
} from "next/font/google";

// Choose ONE for site-wide (use the same variable name: --font-site)
// export const siteFont = Inter({ subsets: ["latin"], variable: "--font-site" });
// Alternatives:
  export const siteFont = Roboto({ subsets: ["latin"], variable: "--font-site" });
// export const siteFont = Open_Sans({ subsets: ["latin"], variable: "--font-site" });
// export const siteFont = Source_Sans_3({ subsets: ["latin"], variable: "--font-site" });
 //export const siteFont = Lato({ subsets: ["latin"], variable: "--font-site" });
// export const siteFont = Montserrat({ subsets: ["latin"], variable: "--font-site" });
// export const siteFont = Poppins({ subsets: ["latin"], variable: "--font-site" });
// export const siteFont = Noto_Sans({ subsets: ["latin"], variable: "--font-site" });
// export const siteFont = Nunito_Sans({ subsets: ["latin"], variable: "--font-site" });

// Choose ONE for brand-only (use the same variable name: --font-brand)
//export const brandFont = Abril_Fatface({ weight: "400", subsets: ["latin"], variable: "--font-brand" });
// Alternatives:
 export const brandFont = Playfair_Display({ subsets: ["latin"], variable: "--font-brand" });
 //export const brandFont = Merriweather({ subsets: ["latin"], variable: "--font-brand" });
// export const brandFont = Raleway({ subsets: ["latin"], variable: "--font-brand" })
//   export const brandFont = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-brand" })
//  export const brandFont = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-brand" });