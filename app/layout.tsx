import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shivrajsinh Maharaul | Backend Developer & Tech Enthusiast",
    template: "%s | Shivrajsinh Maharaul"
  },
  description: "Official portfolio of Shivrajsinh Maharaul. Backend developer building web applications, designing APIs, and deploying cloud services.",
  keywords: [
    "Shivrajsinh Maharaul",
    "Shivraj Maharaul",
    "Shivraj Backend",
    "Go Developer",
    "Golang Software Engineer",
    "Fullstack Developer",
    "Vercel Next.js Developer"
  ],
  metadataBase: new URL("https://shivrajportfolio.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  generator: "Next.js",
  applicationName: "Shivrajsinh Maharaul Portfolio",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivrajportfolio.vercel.app/",
    title: "Shivrajsinh Maharaul | Portfolio",
    description: "Explore backend API design, React frontends, and cloud deployment pipelines.",
    siteName: "Shivrajsinh Maharaul Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Shivrajsinh Maharaul Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivrajsinh Maharaul | Software Developer",
    description: "Explore the technical projects and full-stack capabilities of Shivrajsinh Maharaul.",
    images: ["/profile.jpeg"],
  },
  icons: {
    icon: "/profile.jpeg",
    shortcut: "/profile.jpeg",
    apple: "/profile.jpeg",
  },
  verification: {
    google: "vIecXgZBxrLoQM0nJpiOvJPl7fgnjUs3Vt0xEuWzRIE"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shivrajsinh Maharaul",
    "url": "https://shivrajportfolio.vercel.app/",
    "image": "https://shivrajportfolio.vercel.app/profile.jpeg",
    "jobTitle": "Backend Developer & Tech Enthusiast",
    "knowsAbout": [
      "Backend Development",
      "Go (Golang)",
      "Database Optimization",
      "Next.js Portfolio Design",
      "React"
    ],
    "sameAs": [
      "https://github.com/Shivraj1712/",
      "https://www.linkedin.com/in/shivrajsinh-maharaul-677379321/"
    ]
  };

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <head />
      <body className="min-h-full flex flex-col justify-between selection:bg-accent selection:text-accent-foreground">
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <main className="w-full flex-grow relative">
          {children}
        </main>
      </body>
    </html>
  );
}