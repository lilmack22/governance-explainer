import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";

const playfair = Playfair_Display({
  variable: "--playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Governance Matters — Political Science for Development",
  description:
    "An interactive educational app explaining why political science and governance are upstream of most development challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink-950 text-text-primary flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

