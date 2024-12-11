import type { Metadata } from "next";

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