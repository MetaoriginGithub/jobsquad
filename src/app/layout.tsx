import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Squad",
  description: "Description of Job Squad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
       
      </head>
      <GoogleTagManager gtmId="G-2YVGYGG682" />
      <GoogleAnalytics gaId="G-2YVGYGG682" />
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          
        </ThemeProvider>
      </body>
    </html>
  );
}
