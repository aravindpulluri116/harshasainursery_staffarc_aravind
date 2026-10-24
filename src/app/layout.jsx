import { Inter, Fraunces } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

// Inter for text, Fraunces for headings.
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-fraunces", display: "swap" });

export const metadata = {
  title: "Harsha Sai Nursery — Premium Quality Nursery Plants, Burrilanka",
  description:
    "Harsha Sai Nursery in Burrilanka, Andhra Pradesh: 103+ exotic and imported fruit plant varieties from Thailand, Japan, Vietnam and Brazil. Bulk and wholesale orders available.",
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/logo.webp` },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#153424" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
