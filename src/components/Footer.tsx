'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <div className="space-y-4">
                <Image
                  src="/logo.svg"
                  alt="Transcendence Logo"
                  width={40}
                  height={40}
                  className="opacity-75"
                />
                <p className="text-sm text-gray-400">
                  Raising collective consciousness through transformative experiences.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Programs', 'Events', 'Community'].map((item) => (
                  <li key={item}>
                    <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-3">
                {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((item) => (
                  <li key={item}>
                    <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-3">
                {['Contact Us', 'Support', 'Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Transcendence. All rights reserved.
              </p>
              <div className="flex gap-6">
                {['Privacy', 'Terms', 'Cookies'].map((item) => (
                  <Button 
                    key={item}
                    variant="ghost" 
                    className="text-gray-400 hover:text-white"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 