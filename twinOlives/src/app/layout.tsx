import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const pressura = localFont({
  src: "./fonts/GT-Pressura-Bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-pressura",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://twinolives.com"),
  title: "Twin Olives | Home Improvement & Interior Design in Pittsburgh, PA",
  description:
    "Pittsburgh home improvement and interior design firm since 2017. Renovations, interior design, short-term rental design, and restoration. Free consultation.",
  keywords: [
    "Pittsburgh home improvement",
    "Pittsburgh interior design",
    "home renovation Pittsburgh",
    "kitchen renovation Pittsburgh",
    "bathroom remodel Pittsburgh",
    "short-term rental design",
    "Airbnb design Pittsburgh",
    "furniture restoration",
    "home remodeling",
    "interior designer",
    "home improvement contractor",
    "Twin Olives",
  ],

  authors: [
    {
      name: "Twin Olives",
      url: "https://twinolives.com",
    },
  ],

  creator: "Twin Olives",

  publisher: "Twin Olives",

  alternates: {
    canonical: "https://twinolives.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },

  openGraph: {
    title: "Twin Olives | Home Improvement & Interior Design",
    description:
      "Pittsburgh home improvement and interior design firm since 2017. Renovations, interior design, short-term rental design, and restoration. Free consultation.",
    url: "https://twinolives.com",
    siteName: "Twin Olives",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Twin Olives: turning houses into homes, one project at a time.",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Twin Olives | Home Improvement & Interior Design",
    description:
      "Pittsburgh home improvement and interior design firm since 2017. Renovations, interior design, short-term rental design, and restoration. Free consultation.",
    images: [
      {
        url: "/og-image.png",
        alt: "Twin Olives: turning houses into homes, one project at a time.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pressura.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Twin Olives",
              url: "https://twinolives.com",
              logo: "https://www.techwrench.co/twsVerticalWhite.svg",
              image: "https://twinolives.com/og-image.png",
              description:
                "Pittsburgh home improvement and interior design firm since 2017. Renovations, interior design, short-term rental design, and restoration. Free consultation.",
              telephone: "+1-412-880-2971",
              email: "justin@twinolives.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-412-880-2971",
                contactType: "sales",
                email: "justin@twinolives.com",
              },
              serviceType: [
                "Home Renovation",
                "Interior Design",
                "Short-Term Rental Design",
                "Restoration",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pittsburgh",
                addressRegion: "PA",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Pittsburgh, PA" },
                { "@type": "AdministrativeArea", name: "Greater Pittsburgh Area" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Home Improvement & Design Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Home Renovation",
                      description:
                        "Projects of every size, from swapping a light fixture to a full kitchen renovation.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Interior Design",
                      description:
                        "Design help for any space in your home that needs direction.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Short-Term Rental Design",
                      description:
                        "Full-service design for short-term rentals, down to the forks.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Restoration",
                      description:
                        "Restoring vintage and older pieces, backed by experience from owning a vintage boutique.",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Twin Olives",
              url: "https://twinolives.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://twinolives.com/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
