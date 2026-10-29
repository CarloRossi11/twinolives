import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Twin Olives | Home Improvement & Design in Pittsburgh, PA",
  description:
    "Meet Justin and Nicole, the co-owners of Twin Olives, a Pittsburgh home improvement and interior design firm established in 2017.",
  alternates: {
    canonical: "https://twinolives.com/about",
  },
  openGraph: {
    title: "About Twin Olives | Home Improvement & Design in Pittsburgh, PA",
    description:
      "Meet Justin and Nicole, the co-owners of Twin Olives, a Pittsburgh home improvement and interior design firm established in 2017.",
    url: "https://twinolives.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Twin Olives co-owners Justin and Nicole",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Twin Olives | Home Improvement & Design in Pittsburgh, PA",
    description:
      "Meet Justin and Nicole, the co-owners of Twin Olives, a Pittsburgh home improvement and interior design firm established in 2017.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <AboutClient />;
}
