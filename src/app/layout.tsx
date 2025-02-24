import type { Metadata } from "next";
import "./globals.css";
import Menu from "./ui/components/Menu";
import Footer from "./ui/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { workSans } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Jawkim Architects",
    default: "Jawkim Architects",
  },
  description:
    "Discover innovative architecture, master planning, and interior design services. Our expert team delivers creative solutions for residential, commercial, and large-scale projects, from concept to completion.",
  other: {
    "google-site-verification": "IXtSaEO4nIMbBQDEnO7XHI4KmYeBEGjkkauRrZqP9I8",
  },
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
        <GoogleAnalytics gaId="G-RE38P7ES7C" />
      </body>
    </html>
  );
}
