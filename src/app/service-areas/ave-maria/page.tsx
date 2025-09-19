
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const BUSINESS_ADDRESS = "LaBelle, FL 33935"
const EMAIL = "castenhome@gmail.com"

export const metadata: Metadata = {
  title: "Ave Maria FL Home Inspector | New Construction & Family Homes | Mayne Home Inspectors",
  description:
    "Trusted home inspections in Ave Maria, FL. Specializing in new construction, family homes, and university-area properties. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/ave-maria" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/ave-maria",
    title: "Ave Maria Home Inspector | New Construction Specialist",
    description:
      "Local Ave Maria home inspector. Fast scheduling and detailed reports for new construction and family homes in this growing community. Licensed HI3589.",
    images: [{ url: "/images/og/ave-maria-inspection-church.jpg", width: 1200, height: 630, alt: "A family home in the planned community of Ave Maria, Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ave Maria FL Home Inspector | Mayne Home Inspectors",
    description: "Professional new construction and home inspections in Ave Maria.",
    images: ["/images/og/ave-maria-inspection-church.jpg"],
  },
}

const faqs = [
  {
    q: "Do you specialize in new construction inspections in Ave Maria?",
    a: "Yes, new construction is one of our primary services in Ave Maria. We offer phased inspections (pre-drywall, final walkthrough) to ensure your new home is built to the highest standard, providing an independent check on the builder's work."
  },
  {
    q: "How quickly can you schedule an inspection in Ave Maria?",
    a: "We can typically schedule an inspection in Ave Maria within 24-48 hours. We work closely with builders, realtors, and homeowners to meet tight construction and closing schedules."
  },
  {
    q: "What are common issues you find in new Ave Maria homes?",
    a: "Even in new builds, we often find minor issues like cosmetic defects, improper sealing around windows and doors, missing insulation, and occasionally more significant items like plumbing or electrical errors. Our job is to catch these before you close."
  },
  {
    q: "Why do I need my own inspector for a new home from a reputable builder?",
    a: "An independent inspector is your advocate. We provide an unbiased, third-party assessment to verify quality and catch potential issues that might be overlooked, ensuring your investment is sound from day one."
  }
]

const testimonials = [
  {
    name: "The Rodriguez Family",
    location: "Ave Maria",
    text: "So glad we hired them for our new home in Del Webb. They found a few small but important issues that the builder fixed immediately. It's peace of mind you can't put a price on."
  },
  {
    name: "Michael B.",
    location: "Maple Ridge, Ave Maria",
    text: "Professional, punctual, and extremely thorough. The report was detailed and helped us create a punch list for the builder before our final walkthrough. A must-do for any new build."
  },
  {
    name: "Jennifer S.",
    location: "Ave Maria",
    text: "As a real estate agent in the area, I recommend Mayne Home Inspectors to all my clients buying in Ave Maria. They are reliable, knowledgeable about new construction, and great with first-time buyers."
  }
]

export default function AveMariaPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/ave-maria",
    "name": BRAND,
    "image": "https://mayneinspectors.com/images/og/ave-maria-inspection-church.jpg",
    "telephone": PHONE_DISPLAY,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "LaBelle",
      "addressRegion": "FL",
      "postalCode": "33935",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.3159",
      "longitude": "-81.4334"
    },
    "url": "https://mayneinspectors.com",
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Ave Maria, FL",
      "Immokalee, FL",
      "Orangetree, FL",
      "Naples, FL",
      "Collier County, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "New Construction Inspection",
      "Pre-Drywall Inspection",
      "Final Walkthrough Inspection",
      "11-Month Warranty Inspection"
    ],
    "hasCredential": [
      "Florida License HI3589"
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
        "name": "Ave Maria",
        "item": "https://mayneinspectors.com/service-areas/ave-maria"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-ave-maria-faq" type="application/ld+json">
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
          <li className="text-foreground">Ave Maria</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Ave Maria, FL Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your new construction inspection expert for the growing community of Ave Maria. We provide independent, thorough assessments for your new family home.
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
            Text for a New Build Quote
          </a>
        </div>
      </section>

      <section className="mt-10">
        <div className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden" style={{ aspectRatio: "1200 / 630" }}>
          <Image
            src="/images/og/ave-maria-inspection-church.jpg"
            alt="A beautiful family home in a new construction neighborhood in Ave Maria, Florida"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Independent Inspections for Ave Maria's New Homes
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Ave Maria is one of Southwest Florida's fastest-growing communities, known for its beautiful neighborhoods and family-friendly atmosphere. As a homebuyer here, you're investing in a quality lifestyle, and an independent home inspection is the best way to ensure your new home matches that standard.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            While builders have their own inspectors, we work exclusively for you. Our role is to provide an unbiased, expert evaluation of your new home's construction and systems, catching the details that can be missed during a busy build. From pre-drywall checks of the structure and systems to the final walkthrough, we're your trusted partner.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Our New Construction Services</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/new-construction-inspection" className="text-primary hover:underline">
                  Pre-Drywall Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                We inspect the home's structure, plumbing, and electrical systems before the walls are closed up—the most critical time to catch structural issues.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/new-construction-inspection" className="text-primary hover:underline">
                  Final Walkthrough Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                A top-to-bottom inspection of the finished home before closing, ensuring every detail is complete, safe, and functional.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/new-construction-inspection" className="text-primary hover:underline">
                  11-Month Warranty Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Before your builder's one-year warranty expires, we conduct a full inspection to identify any issues that have developed since moving in.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Inspect a New Ave Maria Home?</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Verify Builder Quality</p>
                <p className="text-sm text-muted-foreground">Ensure your home meets the high standards you paid for.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Identify Hidden Issues</p>
                <p className="text-sm text-muted-foreground">Catch builder oversights and subcontractor errors.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Gain Leverage for Repairs</p>
                <p className="text-sm text-muted-foreground">Our report is your tool to get the builder to fix issues before you close.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Long-Term Peace of Mind</p>
                <p className="text-sm text-muted-foreground">Move in with confidence, knowing your home has been independently verified.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Serving All Neighborhoods in Ave Maria</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Del Webb Naples",
            "Maple Ridge",
            "Avalon Park",
            "The National",
            "Silverwood",
            "And all new developments!"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Ave Maria Homeowners Say</h2>
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
          New Construction FAQs
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
          Protect Your Ave Maria Investment
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Schedule your independent new construction inspection today. Call or text for a fast quote and to coordinate with your builder's timeline.
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
            Text for a Quote
          </a>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-muted-foreground space-y-2">
        <p>Florida License HI3589 • New Construction Certified • Serving Ave Maria & Collier County</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}
