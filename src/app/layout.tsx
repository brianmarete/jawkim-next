import type { Metadata } from "next";
import "./globals.css";
import Menu from "./ui/components/Menu";
import Footer from "./ui/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { workSans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Jawkim Architects",
  description:
    "Discover innovative architecture, master planning, and interior design services. Our expert team delivers creative solutions for residential, commercial, and large-scale projects, from concept to completion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu />
        <div className="min-h-screen">
          <main className={workSans.className}>{children}</main>
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
