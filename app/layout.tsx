import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "Shivrajsinh Maharaul | Portfolio",
    template: "%s | Shivrajsinh Maharaul"
  },
  description: "Official portfolio of Shivrajsinh Maharaul, a Software Engineer specializing in backend development, Go (Golang), and building high-performance web applications.",
  keywords: [
    "Shivrajsinh Maharaul",
    "Shivraj Maharaul",
    "Shivraj",
    "Shivrajsinh",
    "Shivrajsinh Maharaul Portfolio",
    "Backend Developer",
    "Go Developer",
    "Golang Developer",
    "Software Engineer Portfolio"
  ],
  metadataBase: new URL("https://shivrajportfolio.vercel.app/"),
  alternates: {
    canonical: "/",
  },
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
    title: "Shivrajsinh Maharaul | Software Engineer Portfolio",
    description: "Explore the technical projects and full-stack capabilities of Shivrajsinh Maharaul.",
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
    title: "Shivrajsinh Maharaul | Software Engineer Portfolio",
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
  // Structured data to define your professional entity to search AI engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shivrajsinh Maharaul",
    "url": "https://shivrajportfolio.vercel.app/",
    "image": "https://shivrajportfolio.vercel.app/profile.jpeg",
    "jobTitle": "Software Engineer",
    "knowsAbout": [
      "Backend Development",
      "Go (Golang)",
      "Web Applications",
      "Software Engineering"
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
      <body className="min-h-full flex flex-col justify-between">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="w-full flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}