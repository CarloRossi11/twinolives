import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Twin Olives Home Improvement & Design",
  description:
    "Get in touch with Twin Olives to discuss your project or schedule a free consultation. Based in Pittsburgh, PA, with nights and weekends available.",
  alternates: {
    canonical: "https://twinolives.com/contact",
  },
  openGraph: {
    title: "Contact Us | Twin Olives Home Improvement & Design",
    description:
      "Get in touch with Twin Olives to discuss your project or schedule a free consultation. Based in Pittsburgh, PA, with nights and weekends available.",
    url: "https://twinolives.com/contact",
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
    title: "Contact Us | Twin Olives Home Improvement & Design",
    description:
      "Get in touch with Twin Olives to discuss your project or schedule a free consultation. Based in Pittsburgh, PA, with nights and weekends available.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ContactClient />;
}
