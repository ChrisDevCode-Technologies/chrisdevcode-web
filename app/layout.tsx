import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";



export const metadata: Metadata = {
  title: "ChrisDevCode",
  description: "ChrisDevCode | technologies that may make sense",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
