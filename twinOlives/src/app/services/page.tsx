import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Home Improvement & Design Services | Twin Olives",
  description:
    "Explore Twin Olives' home improvement and design services in Pittsburgh, PA, from renovations and interior design to short-term rental design and restoration.",
  alternates: {
    canonical: "https://twinolives.com/services",
  },
  openGraph: {
    title: "Home Improvement & Design Services | Twin Olives",
    description:
      "Explore Twin Olives' home improvement and design services in Pittsburgh, PA, from renovations and interior design to short-term rental design and restoration.",
    url: "https://twinolives.com/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Twin Olives Home Improvement & Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Improvement & Design Services | Twin Olives",
    description:
      "Explore Twin Olives' home improvement and design services in Pittsburgh, PA, from renovations and interior design to short-term rental design and restoration.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Home Improvement and Interior Design",
            provider: {
              "@type": "LocalBusiness",
              name: "Twin Olives",
              url: "https://twinolives.com",
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Pittsburgh, PA" },
              {
                "@type": "AdministrativeArea",
                name: "Greater Pittsburgh Area",
              },
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
      <ServicesClient />
    </>
  );
}
