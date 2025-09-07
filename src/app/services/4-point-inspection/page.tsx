// src/app/services/4-point-inspection/page.tsx
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
  title: "4-Point Home Inspection | Mayne Home Inspectors (SWFL)",
  description:
    "Insurance-required 4-Point inspections covering roof, electrical, plumbing, and HVAC. Serving LaBelle, Fort Myers, Cape Coral, and all SWFL. Same-day PDF report.",
  alternates: { canonical: "/services/4-point-inspection" },
  openGraph: {
    title: "4-Point Home Inspection | Southwest Florida",
    description:
      "Get your 4-Point inspection for insurance—covering roof, plumbing, electrical, and HVAC. Same-day report delivery.",
    url: "https://mayneinspectors.com/services/4-point-inspection",
    type: "article",
    images: [
      {
        url: "/images/4point-inspection-labelle.png",
        width: 1200,
        height: 630,
        alt: "4-Point home inspection in LaBelle, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4-Point Home Inspection | Southwest Florida",
    description: "Required for older homes. Fast scheduling, same-day report.",
    images: ["/images/4point-inspection-labelle.png"],
  },
};

// ---- Structured Data (Service) ----
function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://mayneinspectors.com/services/4-point-inspection#service",
    name: "4-Point Home Inspection",
    serviceType: "Insurance 4-Point Inspection",
    provider: {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      name: BRAND,
      telephone: PHONE_E164,
      areaServed: serviceAreas,
      url: "https://mayneinspectors.com/",
    },
    description:
      "Florida 4-Point inspection covering roof, electrical, plumbing, and HVAC systems. Required by insurers for homes 20+ years old.",
    url: "https://mayneinspectors.com/services/4-point-inspection",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "4-Point Inspection",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Insurance 4-Point Inspection",
          priceCurrency: "USD",
          price: "175",
          itemOffered: {
            "@type": "Service",
            name: "4-Point Insurance Inspection",
            description:
              "Detailed report covering roof, HVAC, plumbing, and electrical for insurance purposes.",
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
    q: "What is a 4-Point inspection?",
    a: "It’s a limited inspection focusing on four key systems: roof, plumbing, electrical, and HVAC. Insurers use it to assess risk on older homes.",
  },
  {
    q: "Do I need one for insurance?",
    a: "Yes, most Florida insurance companies require it for homes 20 years or older to issue or renew a policy.",
  },
  {
    q: "How long does the inspection take?",
    a: "Typically 30–60 minutes depending on accessibility. You’ll receive your PDF report with labeled photos the same day.",
  },
  {
    q: "Can I combine it with a wind mitigation?",
    a: "Yes, we often bundle 4-Point and wind mitigation inspections together for convenience and savings.",
  },
];

// ---- Page Component ----
export default function FourPointPage() {
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
                4-Point Home Inspection
              </h1>
              <p className="mt-4 text-muted-foreground">
                Many insurers require a <strong>4-Point inspection</strong> on
                homes 20+ years old. We inspect roof, plumbing, electrical, and
                HVAC, then deliver a{" "}
                <strong>same-day PDF report with photos</strong> accepted by
                insurance companies across Florida.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/#schedule">Book 4-Point Inspection</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a>
                </Button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Serving {serviceAreas.slice(0, 6).join(", ")}, and nearby SWFL
                communities.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/4point-inspection-labelle.png"
                alt="4-Point home inspection in Southwest Florida"
                fill
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 600px"
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we check */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Roof",
                body: "Covering type, age, condition, leaks, and expected lifespan.",
              },
              {
                title: "Plumbing",
                body: "Supply and drain lines, water heater age/type, evidence of leaks.",
              },
              {
                title: "Electrical",
                body: "Panel brand, breaker condition, wiring type, overall safety.",
              },
              {
                title: "HVAC",
                body: "System age, functionality, presence of heating/cooling, condition of equipment.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border-border/50 bg-card/80 backdrop-blur-sm"
              >
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

      {/* FAQ */}
      <FaqSection items={faqs} />

      {/* CTA */}
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Insurance Ready. Same-Day Reports.
              </h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• 4-Point inspection: <strong>$175</strong></li>
                <li>• Covers roof, plumbing, electrical, HVAC</li>
                <li>• Required for many Florida insurers</li>
                <li>• Same-day PDF with photos</li>
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
    </>
  );
}
