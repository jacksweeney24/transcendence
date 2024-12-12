'use client';

import React, { useState, useEffect } from 'react'
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import "./globals.css";
import SmokeBackground from "@/components/SmokeBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } 
      else if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https:; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline' https: data:; font-src 'self' https: data:;" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <div className="relative min-h-screen overflow-hidden">
          <SmokeBackground />
          
          {/* Navigation */}
          <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 transition-all duration-300 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0'
          }`}>
            <div className="flex items-center justify-center">
              <div className="flex gap-4 sm:gap-8">
                <Button 
                  variant="ghost" 
                  className="text-sm sm:text-base text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-sm sm:text-base text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => {
                    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Events
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-sm sm:text-base text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => {
                    document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Community
                </Button>
              </div>
            </div>
          </nav>

          {children}
        </div>
      </body>
    </html>
  );
} 
