
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const BUSINESS_ADDRESS = "LaBelle, FL 33935" // Your base of operations
const EMAIL = "castenhome@gmail.com"

export const metadata: Metadata = {
  title: "Punta Gorda FL Home Inspector | Waterfront & Historic Homes | Mayne Home Inspectors",
  description:
    "Trusted home inspections in Punta Gorda, FL since 2020. Specializing in historic homes, waterfront properties, and seawalls. Wind Mitigation, 4-Point. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/punta-gorda" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/punta-gorda",
    title: "Punta Gorda Home Inspector | Historic & Waterfront Inspections",
    description:
      "Local Punta Gorda home inspector since 2020. Fast scheduling and detailed reports for historic downtown and waterfront homes. Licensed HI3589.",
    images: [{ url: "/images/og/service-area-punta-gorda.jpg", width: 1200, height: 630, alt: "Home inspector at a historic waterfront property in Punta Gorda, Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punta Gorda FL Home Inspector | Mayne Home Inspectors",
    description: "Professional home inspections in Punta Gorda since 2020. Historic and waterfront specialist.",
    images: ["/images/og/service-area-punta-gorda.jpg"],
  },
}

const faqs = [
  {
    q: "Do you inspect historic homes in Punta Gorda's downtown area?",
    a: "Yes, we have extensive experience inspecting historic homes in Punta Gorda. We understand the unique construction methods, materials, and potential issues common in older properties, ensuring a thorough and knowledgeable assessment."
  },
  {
    q: "How quickly can you schedule a home inspection in Punta Gorda?",
    a: "We can typically schedule an inspection in Punta Gorda within 24 hours. We recognize the competitive real estate market and offer same-day reports to help you meet your deadlines."
  },
  {
    q: "What common issues do you find in Punta Gorda homes?",
    a: "In Punta Gorda, we often find issues related to its coastal environment and mix of historic and modern homes. This includes seawall and dock condition, moisture intrusion, storm damage to roofs, and outdated electrical or plumbing systems in older homes."
  },
  {
    q: "Do you provide Wind Mitigation and 4-Point Inspections in Punta Gorda?",
    a: "Absolutely. We provide the official OIR-B1-1802 wind mitigation form, which is critical for Punta Gorda homeowners to get insurance discounts. We also offer 4-Point Inspections required for older homes."
  }
]

const testimonials = [
  {
    name: "John F.",
    location: "Punta Gorda Isles",
    text: "The inspector was fantastic. He did a thorough check of the seawall and dock, which was our biggest concern. The report was clear and helped us understand what we were buying. Highly recommend for any waterfront property."
  },
  {
    name: "Karen S.",
    location: "Historic Downtown Punta Gorda",
    text: "We were worried about buying an older home, but the inspector's knowledge of historic properties was reassuring. The report was detailed and gave us a clear path forward for renovations."
  },
  {
    name: "David M.",
    location: "Punta Gorda",
    text: "Great communication and a very detailed inspection. The use of a drone for the roof was a huge plus. We were very satisfied with the service and professionalism."
  }
]

export default function PuntaGordaPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/punta-gorda",
    "name": BRAND,
    "image": "https://mayneinspectors.com/images/og/service-area-punta-gorda.jpg",
    "telephone": PHONE_DISPLAY,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "LaBelle", // Your business base
      "addressRegion": "FL",
      "postalCode": "33935",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.9298", // Punta Gorda coordinates
      "longitude": "-82.0454"
    },
    "url": "https://mayneinspectors.com",
    "sameAs": [
      "https://www.facebook.com/mayneinspectors",
      "https://www.linkedin.com/company/mayneinspectors"
    ],
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Punta Gorda, FL",
      "Punta Gorda Isles, FL",
      "Port Charlotte, FL",
      "Charlotte Harbor, FL",
      "Solana, FL",
      "Charlotte County, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "Historic Home Inspection",
      "Waterfront Property Inspection",
      "Seawall Inspection",
      "Wind Mitigation Inspection",
      "4-Point Inspection"
    ],
    "hasCredential": [
      "Florida License HI3589",
      "Radon License R2355"
    ]
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mayneinspectors.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Service Areas",
        "item": "https://mayneinspectors.com/service-areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Punta Gorda",
        "item": "https://mayneinspectors.com/service-areas/punta-gorda"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-punta-gorda-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>
      <Script id="ldjson-local-business" type="application/ld+json">
        {JSON.stringify(localBusinessLd)}
      </Script>
      <Script id="ldjson-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbLd)}
      </Script>

      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-muted-foreground">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>→</li>
          <li><Link href="/service-areas" className="hover:text-primary">Service Areas</Link></li>
          <li>→</li>
          <li className="text-foreground">Punta Gorda</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Punta Gorda, FL Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your historic and waterfront property specialist serving Punta Gorda and Charlotte Harbor since 2020. 
          Expert inspections of homes, seawalls, and historic structures with same-day reports.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90"
            aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
          >
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={`sms:${PHONE_E164}`}
            className="px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5"
          >
            Text Us to Schedule
          </a>
        </div>
      </section>

      <section className="mt-10">
        <div className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden" style={{ aspectRatio: "1200 / 630" }}>
          <Image
            src="/images/og/service-area-punta-gorda.jpg"
            alt="Professional home inspector at a historic waterfront property in Punta Gorda, Florida"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Expertise for Punta Gorda's Unique Charm
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Punta Gorda, known for its historic downtown and beautiful waterfront, requires a specialized inspection approach. Since 2020, we've provided Punta Gorda homeowners with inspections that respect the city's heritage while addressing the modern challenges of coastal living.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Whether you're purchasing a beautifully restored home in the historic district or a modern canal-front property in Punta Gorda Isles, our inspections provide a complete picture. We have extensive experience with the unique construction of older homes and the specific demands of waterfront properties, including a standard visual assessment of seawalls and docks.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Popular Services in Punta Gorda</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/home-inspection" className="text-primary hover:underline">
                  Historic Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Specialized assessment for older homes, focusing on original materials, structural integrity, and updated systems.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/wind-mitigation" className="text-primary hover:underline">
                  Wind Mitigation (OIR-B1-1802)
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                A crucial inspection for reducing insurance premiums in coastal Punta Gorda. We identify all available storm-protection credits.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/4-point-inspection" className="text-primary hover:underline">
                  4-Point Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Required by insurers for many older homes, focusing on the roof, electrical, plumbing, and HVAC systems.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Punta Gorda Homeowners Choose Us</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Historic & Waterfront Specialists</p>
                <p className="text-sm text-muted-foreground">Expertise in Punta Gorda's unique property types.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Fast, 24-Hour Reports</p>
                <p className="text-sm text-muted-foreground">Essential for the active Punta Gorda real estate market.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Licensed & Certified</p>
                <p className="text-sm text-muted-foreground">Florida HI3589 • Radon R2355</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Advanced Technology</p>
                <p className="text-sm text-muted-foreground">We use drones and infrared cameras for a more thorough inspection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Areas We Serve Around Punta Gorda</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Punta Gorda Isles",
            "Historic Downtown",
            "Burnt Store",
            "Charlotte Harbor",
            "Solana",
            "Port Charlotte",
            "Deep Creek",
            "Harbour Heights",
            "All of Charlotte County"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Punta Gorda Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions - Punta Gorda Inspections
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map(f => (
            <details key={f.q} className="group rounded-xl border p-6 shadow-sm">
              <summary className="cursor-pointer font-medium text-lg">{f.q}</summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Schedule Your Punta Gorda Home Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Protect your historic or waterfront investment. Call or text today for fast, expert service from Punta Gorda's trusted home inspector.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90"
          >
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={`sms:${PHONE_E164}`}
            className="px-8 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5"
          >
            Text to Schedule
          </a>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-muted-foreground space-y-2">
        <p>Florida License HI3589 • Radon License R2355 • Serving Punta Gorda since 2020</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}
