import type { Metadata } from "next";
import { ThemeProvider } from "next-themes"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXUS | IntelligentAudio.NET",
  description: "Engineering the world's first zero-latency bridge between human intent and digital execution. High-performance infrastructure for accessibility.",
  openGraph: {
    title: "NEXUS - High Performance Neural Infrastructure",
    description: "Built for accessibility and professional audio performance.",
    url: "https://nexus.intelligentaudio.net",
    siteName: "IntelligentAudio.NET",
    type: "website",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" themes={["light", "contrast"]}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}