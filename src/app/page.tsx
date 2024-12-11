'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <Image
              src="/logo.svg"
              alt="Transcendence Logo"
              width={120}
              height={120}
              priority
              className="mx-auto"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            Transcendence
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100/80 mb-12">
            Raising collective consciousness through retreats, cohorts, communities, and festivals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Begin Your Journey
            </Button>
            <Button size="lg" variant="outline">
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}