import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manab Barman — Product & AI Portfolio",
  description: "A working portfolio of products, experiments, and an honest AI-assisted build story.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}