import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Twin Olives | Home Improvement and Design",

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

  alternates: {
    canonical: "https://twinolives.com/",
  },

  openGraph: {
    title: "Twin Olives | Home Improvement and Design",

    description:
      "Pittsburgh home improvement and interior design firm since 2017. Renovations, interior design, short-term rental design, and restoration. Free consultation.",

    url: "https://twinolives.com/",
    siteName: "Twin Olives",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Wrench helps local service businesses get found online and win more customers.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Twin Olives | Home Improvement and Design",

    description:
      "Pittsburgh home improvement and interior design firm since 2017. Renovations, interior design, short-term rental design, and restoration. Free consultation.",

    images: [
      {
        url: "/og-image.png",
        alt: "Tech Wrench helps local service businesses get found online and win more customers.",
      },
    ],
  },
};

export default function Page() {
  return <HomeClient />;
}
