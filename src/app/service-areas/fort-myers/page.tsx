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
  title: "Fort Myers FL Home Inspector | Wind Mitigation & 4-Point Inspections | Mayne Home Inspectors",
  description:
    "Professional home inspections in Fort Myers, FL since 2020. Same-day reports, Wind Mitigation (OIR-B1-1802), 4-Point inspections. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/fort-myers" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/fort-myers",
    title: "Fort Myers Home Inspector | Wind Mitigation & Insurance Inspections",
    description:
      "Local Fort Myers home inspector since 2020. Fast scheduling, detailed reports, wind mitigation for insurance discounts. Licensed HI3589.",
    images: [{ url: "/images/og/fort-myers-home-inspector.jpg", width: 1200, height: 630, alt: "Home inspector in Fort Myers, Florida examining property" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fort Myers FL Home Inspector | Mayne Home Inspectors",
    description: "Professional home inspections in Fort Myers since 2020. Same-day reports available.",
    images: ["/images/og/fort-myers-home-inspector.jpg"],
  },
}

const faqs = [
  { 
    q: "Do you provide wind mitigation inspections in Fort Myers?", 
    a: "Yes, we complete the official OIR-B1-1802 wind mitigation form with detailed labeled photos, which is crucial for Fort Myers homeowners to get insurance discounts, especially after recent hurricane seasons." 
  },
  { 
    q: "How fast can you schedule a home inspection in Fort Myers?", 
    a: "We typically schedule inspections within 24 hours in Fort Myers and throughout Lee County. Call or text us and we'll get you on the calendar quickly, often with same-day report delivery." 
  },
  {
    q: "What areas of Fort Myers do you serve?",
    a: "We serve all of Fort Myers, including the historic downtown River District, McGregor corridor, Gateway, South Fort Myers, and extend to nearby areas like Estero, Bonita Springs, and throughout Lee County."
  },
  {
    q: "What are common home issues in Fort Myers properties?",
    a: "In Fort Myers, we frequently find issues related to storm damage (roofs, windows), moisture intrusion from humidity and flooding, aging electrical and plumbing systems in older homes, and HVAC efficiency concerns in our hot, humid climate."
  }
]

const testimonials = [
  {
    name: "David H.",
    location: "Fort Myers",
    text: "After the hurricane, we needed a thorough inspection for our purchase. The inspector was incredibly knowledgeable about local conditions and found issues we never would have seen. Highly recommended for peace of mind."
  },
  {
    name: "Amanda G.",
    location: "Gateway, Fort Myers",
    text: "Needed a 4-Point and Wind Mitigation for our new insurance policy. The process was fast, professional, and the report helped us get all the credits we were entitled to."
  },
  {
    name: "Chris W.",
    location: "South Fort Myers",
    text: "Fantastic service. The drone inspection of our tile roof was a huge plus, and the inspector explained everything in a way that was easy to understand. Fair price and great communication."
  }
]

export default function FortMyersPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/fort-myers",
    "name": BRAND,
    "image": "https://mayneinspectors.com/images/og/fort-myers-home-inspector.jpg",
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
      "latitude": "26.5448", // Fort Myers coordinates
      "longitude": "-81.8284"
    },
    "url": "https://mayneinspectors.com",
    "sameAs": [
      "https://www.facebook.com/mayneinspectors",
      "https://www.linkedin.com/company/mayneinspectors"
    ],
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Fort Myers, FL",
      "Gateway, FL",
      "Estero, FL",
      "Bonita Springs, FL",
      "San Carlos Park, FL",
      "Iona, FL",
      "North Fort Myers, FL",
      "Lee County, FL"
    ],
    "serviceType": [
      "Home Inspection",
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
        "name": "Fort Myers",
        "item": "https://mayneinspectors.com/service-areas/fort-myers"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-fort-myers-faq" type="application/ld+json">
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
          <li className="text-foreground">Fort Myers</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Fort Myers, FL Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional home inspections serving Fort Myers, Gateway, and all of Lee County since 2020. 
          Get detailed reports, wind mitigation for insurance savings, and 4-point inspections — often with same-day delivery.
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
            src="/images/og/fort-myers-home-inspector.jpg" 
            alt="Professional home inspector examining a Fort Myers Florida property with a waterfront view for wind mitigation and structural issues" 
            fill 
            className="object-cover" 
            sizes="(min-width: 768px) 768px, 100vw" 
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Trusted Home Inspections in the City of Palms
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            As a licensed home inspection company serving Fort Myers and Lee County since 2020, 
            we understand the unique challenges facing property owners in Southwest Florida. From the historic homes along the McGregor corridor to the new developments in Gateway, our inspections are tailored to identify issues specific to our coastal region, including hurricane resilience and moisture management.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Whether you're buying a waterfront property, a historic downtown condo, or a family home in a gated community, our detailed inspections give you the confidence to make informed decisions. We provide thorough, honest assessments of all major systems, helping you understand your property’s condition and plan for the future.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Popular Services in Fort Myers</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/home-inspection" className="text-primary hover:underline">
                  Complete Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Thorough evaluation of structural, electrical, plumbing, HVAC, and safety systems, perfect for any home purchase in Fort Myers.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/wind-mitigation" className="text-primary hover:underline">
                  Wind Mitigation (OIR-B1-1802)
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Official wind mitigation inspection for insurance discounts. A crucial service for Fort Myers homeowners that can lead to significant savings.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/4-point-inspection" className="text-primary hover:underline">
                  4-Point Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Focused inspection of roof, electrical, plumbing, and HVAC systems. Required by many insurers for homes over 30 years old.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Fort Myers Homeowners Choose Us</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Fast Turnaround</p>
                <p className="text-sm text-muted-foreground">24-hour reports standard</p>
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
                <p className="font-medium">Local Knowledge</p>
                <p className="text-sm text-muted-foreground">10+ years serving Lee County and Southwest Florida</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Clear Communication</p>
                <p className="text-sm text-muted-foreground">No scare tactics, just honest assessments</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Insurance Ready</p>
                <p className="text-sm text-muted-foreground">All forms completed properly for discounts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Areas We Serve Around Fort Myers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Downtown Fort Myers",
            "Gateway", 
            "South Fort Myers",
            "McGregor Corridor",
            "Iona", 
            "San Carlos Park",
            "Estero",
            "Bonita Springs",
            "North Fort Myers"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Fort Myers Customers Say</h2>
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
          Frequently Asked Questions - Fort Myers Home Inspections
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
          Ready to Schedule Your Fort Myers Home Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get peace of mind with a thorough inspection from Fort Myers' trusted home inspector. 
          Call or text today for fast scheduling and expert service.
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
        <p>Florida License HI3589 • Radon License R2355 • Serving Fort Myers since 2020</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}
