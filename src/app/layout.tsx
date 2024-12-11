import React from 'react'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import "./globals.css";
import SmokeBackground from "@/components/SmokeBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transcendence",
  description: "Raising collective consciousness through retreats, cohorts, communities, and festivals",
  openGraph: {
    title: "Transcendence",
    description: "Raising collective consciousness through retreats, cohorts, communities, and festivals",
    images: [
      {
        url: "/thumb.png",
        width: 1200,
        height: 630,
        alt: "Transcendence",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcendence",
    description: "Raising collective consciousness through retreats, cohorts, communities, and festivals",
    images: ["/thumb.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="relative min-h-screen overflow-hidden">
          <SmokeBackground />
          
          {/* Navigation */}
          <nav className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="flex items-center justify-center">
              <div className="flex gap-4 sm:gap-8">
                <Button 
                  variant="ghost" 
                  className="text-sm sm:text-base text-white/70 hover:text-white hover:bg-white/10"
                >
                  About
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-sm sm:text-base text-white/70 hover:text-white hover:bg-white/10"
                >
                  Learn
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-sm sm:text-base text-white/70 hover:text-white hover:bg-white/10"
                >
                  Pricing
                </Button>
              </div>
            </div>
          </nav>

          {children}
        </div>
      </body>
    </html>
  )
} 
