'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

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
              loading="eager"
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
      <section id="events" className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Upcoming Events
          </h2>
          
          <div className="grid gap-8 sm:gap-10">
            <Card className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-video md:aspect-auto relative overflow-hidden first:rounded-tl-xl first:rounded-bl-xl md:first:rounded-tr-none md:first:rounded-bl-xl">
                    <Image
                      src="/summer.png"
                      alt="Summer Solstice Retreat"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="text-sm text-blue-400 mb-2">June 15-20, 2024 - Bali</div>
                    <CardTitle className="text-xl font-semibold text-white mb-2">
                      Summer Solstice Retreat
                    </CardTitle>
                    <CardDescription className="text-gray-300 mb-4">
                      A 5-day immersive experience combining meditation, movement, and conscious community.
                    </CardDescription>
                    <Button variant="electric" size="default" className="hover:bg-blue-500/20">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-video md:aspect-auto relative overflow-hidden">
                    <Image
                      src="/autumn.png"
                      alt="Autumn Equinox Festival"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="text-sm text-orange-400 mb-2">September 21-25, 2024 - Austin</div>
                    <CardTitle className="text-xl font-semibold text-white mb-2">
                      Autumn Equinox Festival
                    </CardTitle>
                    <CardDescription className="text-gray-300 mb-4">
                      Celebrate the harvest season with sacred ceremonies, sound healing, and transformational workshops.
                    </CardDescription>
                    <Button variant="electric" size="default" className="hover:bg-blue-500/20">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-video md:aspect-auto relative overflow-hidden">
                    <Image
                      src="/winter.png"
                      alt="Winter Wisdom Gathering"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="text-sm text-purple-400 mb-2">December 18-23, 2024 - Colorado</div>
                    <CardTitle className="text-xl font-semibold text-white mb-2">
                      Winter Wisdom Gathering
                    </CardTitle>
                    <CardDescription className="text-gray-300 mb-4">
                      An intimate winter retreat focusing on inner reflection, meditation, and conscious connection.
                    </CardDescription>
                    <Button variant="electric" size="default" className="hover:bg-blue-500/20">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Join Our Next Cohort
          </h2>
          
          <Card className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Image */}
                <div className="lg:w-1/2 relative aspect-video lg:aspect-auto">
                  <Image
                    src="/cohort.png"
                    alt="Transcendence Cohort"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg" />
                </div>
                
                {/* Right Column - Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <div className="text-sm text-blue-400 mb-2">Starting May 1st, 2024</div>
                    <CardTitle className="text-2xl font-bold text-white mb-4">
                      Consciousness Expansion Cohort
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                      A 12-week transformational journey with a select group of conscious leaders, healers, and seekers. 
                      Dive deep into ancient wisdom, modern science, and practical tools for expanding consciousness.
                    </CardDescription>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      Weekly live sessions with master teachers
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      Private community & accountability partners
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      Personalized growth tracking & integration
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="electric" size="lg" className="flex-1 text-lg">
                      Apply Now
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1 text-lg">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="community" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Column - Content */}
                <div className="lg:w-2/3 space-y-8">
                  <div className="space-y-4">
                    <div className="inline-block">
                      <div className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                        Limited Time Offer
                      </div>
                    </div>
                    <CardTitle className="text-4xl sm:text-5xl font-bold text-white">
                      Join Our Quantum Healing Community
                    </CardTitle>
                    <CardDescription className="text-xl text-gray-300">
                      Experience profound transformation through weekly quantum healing sessions, guided practices, and a supportive conscious community.
                    </CardDescription>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Weekly Rasha Technology Sessions
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Guided Meditations
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Breathwork Practices
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Soul Inquisitions
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">$99</span>
                      <span className="text-xl text-gray-400">/month</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        variant="electric" 
                        className="text-lg px-8 py-6"
                      >
                        Join the Community
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="text-lg px-8 py-6"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="lg:w-1/3 relative aspect-square w-full max-w-md">
                  <Image
                    src="/quantum.png"
                    alt="Quantum Healing Community"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About Transcendence
          </h2>
          
          <Card className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <CardTitle className="text-2xl font-bold text-white mb-4">
                      Our Vision
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                      At Transcendence, we believe in the power of collective consciousness to transform lives and create lasting positive change. Our mission is to provide spaces and experiences that facilitate deep personal growth and spiritual evolution.
                    </CardDescription>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      Authentic community connections
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      Ancient wisdom meets modern science
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      Transformational experiences
                    </div>
                  </div>

                  <Button 
                    variant="electric" 
                    size="lg" 
                    className="w-full sm:w-auto mt-4 text-lg"
                  >
                    Join Transcendence
                  </Button>
                </div>
                
                {/* Right Column - Image */}
                <div className="lg:w-1/2 relative aspect-video lg:aspect-auto">
                  <Image
                    src="/logo.svg"
                    alt="About Transcendence"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}