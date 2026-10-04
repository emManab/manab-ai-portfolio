import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manab Barman — Product & AI Portfolio",
  description: "I build useful things with AI — turning rough ideas into working products.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
