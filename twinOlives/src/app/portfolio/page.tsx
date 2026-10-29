import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Twin Olives Home Improvement & Design",
  description:
    "Browse recent Twin Olives projects, including home renovations, interior design, short-term rental design, and restoration in the Pittsburgh area.",
  alternates: {
    canonical: "https://twinolives.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Twin Olives Home Improvement & Design",
    description:
      "Browse recent Twin Olives projects, including home renovations, interior design, short-term rental design, and restoration in the Pittsburgh area.",
    url: "https://twinolives.com/portfolio",
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
    title: "Portfolio | Twin Olives Home Improvement & Design",
    description:
      "Browse recent Twin Olives projects, including home renovations, interior design, short-term rental design, and restoration in the Pittsburgh area.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <PortfolioClient />;
}
