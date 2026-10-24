import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

// Single typeface, two weights only.
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inter", display: "swap" });

export const metadata = {
  title: "Harsha Sai Nursery — Premium Quality Nursery Plants, Burrilanka",
  description:
    "Harsha Sai Nursery in Burrilanka, Andhra Pradesh: 103+ exotic and imported fruit plant varieties from Thailand, Japan, Vietnam and Brazil. Bulk and wholesale orders available.",
  icons: { icon: "/assets/logo.webp" },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#14532d" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
