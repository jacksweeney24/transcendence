'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="flex justify-center">
            <Image
              src="/logo.svg"
              alt="Transcendence Logo"
              width={120}
              height={120}
              priority
              className="w-24 h-24 sm:w-32 sm:h-32 opacity-75"
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-9 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-neutral-100 to-sky-500">
            Transcendence
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 mb-8 sm:mb-12 px-4 sm:px-0">
            Raising collective consciousness through retreats, cohorts, communities, and festivals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Button size="lg" className="w-full sm:w-auto">
              Join Transcendence
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}