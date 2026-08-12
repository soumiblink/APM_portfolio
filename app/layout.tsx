import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExtensionErrorSuppressor } from "@/components/ExtensionErrorSuppressor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soumi Ghosh | Aspiring Product Manager",
  description: "Product manager with CS/AI background building thoughtful solutions to real problems.",
  keywords: ["product management", "APM", "product strategy", "AI products", "user research"],
  authors: [{ name: "Soumi Ghosh" }],
  openGraph: {
    title: "Soumi Ghosh | Aspiring Product Manager",
    description: "Product manager with CS/AI background building thoughtful solutions to real problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <ExtensionErrorSuppressor />
        
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
