import { Inter, Fraunces } from "next/font/google";
import { Providers } from "@/components/providers";
import { Loader } from "@/components/loader";
import "./globals.css";
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";

// Single typeface, two weights only.
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-fraunces", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/nursery-logo.svg` },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#f6f2e7" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Loader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
