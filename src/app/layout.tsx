'use client';

import React, { useState, useEffect } from 'react'
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
                >
                  About
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-sm sm:text-base text-white/70 hover:text-white hover:bg-white/10"
                >
                  Events
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
  );
} 
