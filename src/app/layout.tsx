import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alihamza-portfolio.pages.dev"),
  title: "Ali Hamza | Software Engineer",
  description: "Software engineer focused on backend systems and SaaS product architecture.",
  keywords: ["Ali Hamza", "Software Engineer", "Backend", "SaaS", "Go", "Python", "Django", "React", "Next.js"],
  authors: [{ name: "Ali Hamza" }],
  icons: { icon: "/favicon.ico" },
  alternates: {
    canonical: "https://alihamza-portfolio.pages.dev",
  },
  openGraph: {
    title: "Ali Hamza | Software Engineer",
    description: "Software engineer focused on backend systems and SaaS product architecture.",
    url: "https://alihamza-portfolio.pages.dev",
    siteName: "Ali Hamza Portfolio",
    images: [
      {
        url: "/ali-profile.jpeg",
        width: 800,
        height: 600,
        alt: "Ali Hamza Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hamza | Software Engineer",
    description: "Software engineer focused on backend systems and SaaS product architecture.",
    images: ["/ali-profile.jpeg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ali Hamza",
    "url": "https://alihamza-portfolio.pages.dev",
    "image": "https://alihamza-portfolio.pages.dev/ali-profile.jpeg",
    "sameAs": [
      "https://github.com/hamaza7867",
      "https://www.linkedin.com/in/ali-hamza-akbar",
      "https://www.upwork.com/freelancers/~01e526f6593afde6af?mp_source=share",
      "https://profiles.wordpress.org/hamaza7867/"
    ],
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Software engineer focused on backend systems and SaaS product architecture."
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ali Hamza Portfolio",
    "url": "https://alihamza-portfolio.pages.dev"
  }
];

import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable} antialiased bg-background min-h-screen flex flex-col`} suppressHydrationWarning>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 font-semibold transition-all"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}