
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
  title: "Cape Coral FL Home Inspector | Seawall & Dock Inspections | Mayne Home Inspectors",
  description:
    "Professional home inspections in Cape Coral, FL since 2020. Specializing in waterfront properties, seawalls, and docks. Wind Mitigation, 4-Point. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/cape-coral" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/cape-coral",
    title: "Cape Coral Home Inspector | Waterfront & Seawall Inspections",
    description:
      "Local Cape Coral home inspector since 2020. Fast scheduling, detailed reports for waterfront homes, seawalls, and docks. Licensed HI3589.",
    images: [{ url: "/images/og/cape-coral-veterans-memorial.jpg", width: 1200, height: 630, alt: "Home inspector in Cape Coral, Florida examining a waterfront property" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cape Coral FL Home Inspector | Mayne Home Inspectors",
    description: "Professional home inspections in Cape Coral since 2020. Waterfront specialist. Same-day reports.",
    images: ["/images/og/cape-coral-veterans-memorial.jpg"],
  },
}

const faqs = [
  {
    q: "Do you inspect seawalls and boat docks in Cape Coral?",
    a: "Yes, as a standard part of our home inspections in Cape Coral, we perform a visual-only evaluation of seawalls, boat docks, and lifts. Given the number of waterfront properties, this is a critical part of our service in the area."
  },
  {
    q: "How fast can you schedule a home inspection in Cape Coral?",
    a: "We can typically schedule an inspection in Cape Coral within 24 hours. We understand the fast-paced real estate market in the area and offer same-day reports to help you meet your deadlines."
  },
  {
    q: "What are common home issues found in Cape Coral properties?",
    a: "In Cape Coral, we frequently find issues related to its many canals and waterfront exposure. This includes moisture intrusion, seawall and dock deterioration, stress cracks in foundations from settling soil, and issues with tile roofs common in the area."
  },
  {
    q: "Do you provide wind mitigation inspections for Cape Coral?",
    a: "Absolutely. We complete the official OIR-B1-1802 wind mitigation form, which is essential for Cape Coral homeowners to secure insurance discounts due to the city's coastal location."
  }
]

const testimonials = [
  {
    name: "Susan P.",
    location: "SW Cape Coral",
    text: "The inspector was fantastic. He did a thorough check of the seawall and dock, which was our biggest concern. The report was clear and helped us understand what we were buying. Highly recommend for any waterfront property."
  },
  {
    name: "Brian D.",
    location: "NE Cape Coral",
    text: "Needed a 4-Point and Wind Mitigation for our insurance renewal. Mayne Home Inspectors was fast, affordable, and professional. The reports were accepted by our insurer without any issues."
  },
  {
    name: "Laura V.",
    location: "Cape Coral",
    text: "Great communication and a very detailed inspection. The use of a drone for the roof was a huge plus, as we have a two-story home. Very satisfied with the service."
  }
]

export default function CapeCoralPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/cape-coral",
    "name": BRAND,
    "image": "https://mayneinspectors.com/images/og/cape-coral-veterans-memorial.jpg",
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
      "latitude": "26.6620", // Cape Coral coordinates
      "longitude": "-81.9798"
    },
    "url": "https://mayneinspectors.com",
    "sameAs": [
      "https://www.facebook.com/mayneinspectors",
      "https://www.linkedin.com/company/mayneinspectors"
    ],
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Cape Coral, FL",
      "Pine Island, FL",
      "Matlacha, FL",
      "North Fort Myers, FL",
      "Burnt Store Marina, FL",
      "Lee County, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "Waterfront Property Inspection",
      "Seawall Inspection",
      "Boat Dock Inspection",
      "Wind Mitigation Inspection",
      "4-Point Inspection",
      "Radon Testing"
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
        "name": "Cape Coral",
        "item": "https://mayneinspectors.com/service-areas/cape-coral"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-cape-coral-faq" type="application/ld+json">
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
          <li className="text-foreground">Cape Coral</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Cape Coral, FL Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your waterfront property specialist serving Cape Coral, Pine Island, and Matlacha since 2020. 
          Expert inspections of homes, seawalls, and docks with same-day reports.
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
            src="/images/og/cape-coral-veterans-memorial.jpg"
            alt="Professional home inspector at a waterfront property in Cape Coral, Florida, checking the seawall and dock"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Expertise for Cape Coral's Waterfront Lifestyle
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            With over 400 miles of canals, Cape Coral offers a unique waterfront lifestyle that requires specialized inspection knowledge. Since 2020, we've provided Cape Coral homeowners with inspections that focus on the specific challenges of living on the water, from seawall integrity to the effects of a saltwater environment on your home's systems.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Whether you're buying a home on a direct-access canal, a property in a newer gated community, or a classic Florida home, our inspections provide a complete picture. We include a visual assessment of seawalls, docks, and lifts as a standard part of our service because we know how crucial they are to your property's value and safety.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Popular Services in Cape Coral</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/home-inspection" className="text-primary hover:underline">
                  Waterfront Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive inspection including a visual check of seawalls, docks, and lifts—essential for any Cape Coral property.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/wind-mitigation" className="text-primary hover:underline">
                  Wind Mitigation (OIR-B1-1802)
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                A must-have for reducing insurance premiums in coastal Cape Coral. We identify all available credits to save you money.
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
          <h2 className="text-2xl font-semibold mb-6">Why Cape Coral Homeowners Choose Us</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Waterfront Specialists</p>
                <p className="text-sm text-muted-foreground">We know what to look for in seawalls, docks, and canal homes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Fast, 24-Hour Reports</p>
                <p className="text-sm text-muted-foreground">Critical for the fast-moving Cape Coral real estate market.</p>
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
                <p className="font-medium">Drone & Infrared Tech</p>
                <p className="text-sm text-muted-foreground">We use advanced tools to inspect every part of your property.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Honest & Clear Communication</p>
                <p className="text-sm text-muted-foreground">We explain our findings clearly, without scare tactics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Areas We Serve Around Cape Coral</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "SW Cape Coral",
            "SE Cape Coral",
            "NW Cape Coral",
            "NE Cape Coral",
            "Pine Island",
            "Matlacha",
            "Burnt Store Marina",
            "North Fort Myers",
            "All of Lee County"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Cape Coral Customers Say</h2>
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
          Frequently Asked Questions - Cape Coral Inspections
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
          Ready to Schedule Your Cape Coral Home Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Protect your waterfront investment. Call or text today for fast, expert service from Cape Coral's trusted home inspector.
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
        <p>Florida License HI3589 • Radon License R2355 • Serving Cape Coral since 2020</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}
