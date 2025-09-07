// src/app/services/radon-testing/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FaqSection from "@/components/sections/faq-section";
import FaqJsonLd from "@/components/sections/FaqJsonLd";
import { BRAND, PHONE_DISPLAY, PHONE_E164, serviceAreas } from "@/lib/constants";

// ---- SEO Metadata ----
export const metadata: Metadata = {
  title: "Radon Testing | Mayne Home Inspectors (SWFL)",
  description:
    "Professional radon testing in Southwest Florida using continuous radon monitors (48-hour). Same-day summary, clear results, and guidance.",
  alternates: { canonical: "/services/radon-testing" },
  openGraph: {
    title: "Radon Testing | Southwest Florida",
    description:
      "Accurate 48-hour radon testing with continuous monitors. Same-day summary and clear recommendations.",
    url: "https://mayneinspectors.com/services/radon-testing",
    type: "article",
    images: [
      {
        url: "/images/radon-testing-labelle.png",
        width: 1200,
        height: 630,
        alt: "Radon testing with continuous monitor in Southwest Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radon Testing | Southwest Florida",
    description:
      "48-hour radon test with continuous monitors. Same-day summary and easy-to-read results.",
    images: ["/images/radon-testing-labelle.png"],
  },
};

// ---- Structured Data (Service) ----
function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://mayneinspectors.com/services/radon-testing#service",
    name: "Radon Testing",
    serviceType: "Radon Testing (48-hour Continuous Monitor)",
    provider: {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      name: BRAND,
      telephone: PHONE_E164,
      url: "https://mayneinspectors.com/",
      areaServed: serviceAreas, // simple strings to keep validators quiet
    },
    description:
      "48-hour radon testing using calibrated continuous radon monitors. Clear results, same-day summary, and guidance on mitigation if necessary.",
    url: "https://mayneinspectors.com/services/radon-testing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Radon Testing",
      itemListElement: [
        {
          "@type": "Offer",
          name: "48-hour Radon Test (Continuous Monitor)",
          priceCurrency: "USD",
          price: "175",
          itemOffered: {
            "@type": "Service",
            name: "Radon Testing",
            description:
              "Continuous radon monitor placed for 48 hours, with a clear results report and recommendations.",
          },
        },
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ---- FAQs ----
const faqs = [
  {
    q: "How does radon testing work?",
    a: "We place a calibrated continuous radon monitor in the lowest livable area for ~48 hours. It records hourly levels to provide an accurate average and profile.",
  },
  {
    q: "How soon do I get results?",
    a: "You’ll receive a same-day summary once the test completes and the device is picked up, followed by a full report.",
  },
  {
    q: "What level is considered high?",
    a: "The EPA action level is 4.0 pCi/L. Results at or above that typically warrant mitigation; 2.0–3.9 pCi/L may still be considered for long-term testing.",
  },
  {
    q: "Can doors/windows be opened during the test?",
    a: "Short answer: avoid it. Maintain closed-house conditions as much as practical for accurate results.",
  },
];

// ---- Page Component ----
export default function RadonTestingPage() {
  return (
    <>
      <ServiceJsonLd />
      <FaqJsonLd qa={faqs} />

      {/* Hero */}
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-headline">
                Radon Testing (48-Hour Continuous Monitor)
              </h1>
              <p className="mt-4 text-muted-foreground">
                Radon is an odorless, radioactive gas. Our{" "}
                <strong>continuous radon monitors</strong> run for ~48 hours to
                provide accurate hourly readings and a clear average. You’ll get a{" "}
                <strong>same-day summary</strong> with guidance on what to do next.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/#schedule">Book Radon Test</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a>
                </Button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Serving {serviceAreas.slice(0, 6).join(", ")}, and nearby SWFL communities.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/radon-testing-labelle.png"
                alt="Continuous radon monitor testing in Southwest Florida"
                fill
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 600px"
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "48-Hour Test",
                body: "Device runs for ~48 hours to capture hourly readings and a reliable average.",
              },
              {
                title: "Continuous Monitor",
                body: "Calibrated CRM provides accurate, time-stamped data (not a one-time canister).",
              },
              {
                title: "Clear Results",
                body: "Same-day summary and detailed report with recommendations based on EPA guidance.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold">Straightforward Pricing</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Radon testing (48-hour): <strong>$175</strong></li>
                <li>• Same-day summary after pickup</li>
                <li>• Detailed PDF with hourly data</li>
                <li>• Bundle discounts available with home/4-Point</li>
              </ul>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/#schedule">Schedule Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area blurb */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-10">
          <p className="text-center text-sm text-muted-foreground">
            {BRAND} provides radon testing across Southwest Florida — including{" "}
            {serviceAreas.join(", ")}.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection items={faqs} />
    </>
  );
}
