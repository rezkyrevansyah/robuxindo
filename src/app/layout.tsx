import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Robuxindo Store — Top Up Robux Murah, Cepat & Aman",
  description:
    "Top up Robux dengan harga murah, proses cepat, dan aman. Terpercaya oleh ribuan gamer Roblox Indonesia. Beli Robux, voucher, dan item Roblox terbaik di sini.",
  keywords: [
    "top up robux",
    "beli robux murah",
    "robux indonesia",
    "robuxindo",
    "top up roblox",
    "jual robux",
    "robux termurah",
  ],
  openGraph: {
    title: "Robuxindo Store — Top Up Robux Murah, Cepat & Aman",
    description:
      "Top up Robux dengan harga murah, proses cepat, dan aman. Terpercaya oleh ribuan gamer Roblox Indonesia.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robuxindo Store — Top Up Robux Murah, Cepat & Aman",
    description:
      "Top up Robux murah, cepat, dan aman untuk gamer Roblox Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(plusJakarta.variable, "antialiased")}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
