import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Dieng Ventura Holdings — Tourism & Investment Holding Company",
  description: "Building an Integrated Tourism, Nature & Investment Ecosystem. PT Dieng Ventura Holdings develops interconnected tourism, hospitality, adventure, and conservation assets in Dieng, Central Java, Indonesia.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://diengventura.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PT Dieng Ventura Holdings — Tourism & Investment Holding Company",
    description: "Building an Integrated Tourism, Nature & Investment Ecosystem in Dieng, Central Java.",
    url: "/",
    siteName: "PT Dieng Ventura Holdings",
    images: [
      {
        url: "/images/og-image.jpg", // Safe placeholder path
        width: 1200,
        height: 630,
        alt: "PT Dieng Ventura Holdings Ecosystem Overview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Dieng Ventura Holdings — Tourism & Investment Holding Company",
    description: "Building an Integrated Tourism, Nature & Investment Ecosystem in Dieng, Central Java.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data for Organization and WebSite
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://diengventura.com/#organization",
        "name": "PT Dieng Ventura Holdings",
        "url": "https://diengventura.com",
        "logo": "https://diengventura.com/images/logo.png",
        "sameAs": [],
        "description": "A premium tourism, nature, community and investment holding company building an integrated ecosystem in Dieng, Central Java, Indonesia.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dieng",
          "addressRegion": "Central Java",
          "addressCountry": "ID"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://diengventura.com/#website",
        "url": "https://diengventura.com",
        "name": "PT Dieng Ventura Holdings",
        "description": "Building an Integrated Tourism, Nature & Investment Ecosystem",
        "publisher": {
          "@id": "https://diengventura.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${plusJakartaSans.variable} antialiased selection:bg-accent-gold selection:text-primary`}>{children}</body>
    </html>
  );
}
