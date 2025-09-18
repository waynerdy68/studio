
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
  title: "Babcock Ranch Home Inspector | New Construction & Green Homes | Mayne Home Inspectors",
  description:
    "Specialized home inspections for Babcock Ranch, FL. Expertise in new construction, solar-powered homes, and green building standards. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/babcock-ranch" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/babcock-ranch",
    title: "Babcock Ranch Home Inspector | New Construction Specialist",
    description:
      "Local Babcock Ranch inspector for new homes. We understand green building, solar, and the unique construction of America's most sustainable community.",
    images: [{ url: "/images/og/service-area-babcock-ranch.jpg", width: 1200, height: 630, alt: "A modern, sustainable home in Babcock Ranch, Florida awaiting inspection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babcock Ranch FL Home Inspector | Mayne Home Inspectors",
    description: "Professional new construction home inspections in Babcock Ranch.",
    images: ["/images/og/service-area-babcock-ranch.jpg"],
  },
}

const faqs = [
  {
    q: "Do you offer new construction inspections in Babcock Ranch?",
    a: "Yes, new construction inspections are one of our specialties in Babcock Ranch. We offer phased inspections (pre-drywall, final walkthrough) to ensure your new home is built to the highest standards, even with a trusted builder."
  },
  {
    q: "How quickly can you schedule an inspection in Babcock Ranch?",
    a: "We can typically schedule an inspection in Babcock Ranch within 24-48 hours. We work closely with builders and homeowners to meet tight construction and closing deadlines."
  },
  {
    q: "What do you look for in a Babcock Ranch home inspection?",
    a: "In Babcock Ranch, we focus on new construction quality, adherence to Florida's green building standards, proper installation of solar and energy-efficient systems, and ensuring all modern building codes are met. We check everything from the foundation to the solar panels."
  },
  {
    q: "Why do I need an independent inspection for a new home?",
    a: "An independent inspector works for you, not the builder. We provide an unbiased, third-party assessment to catch potential issues that might be overlooked during construction, ensuring your investment is sound from day one."
  }
]

const testimonials = [
  {
    name: "Jessica L.",
    location: "Babcock Ranch",
    text: "So glad we hired them for our new build inspection. They found a few minor issues the builder's own team missed, and everything was corrected before we closed. Invaluable service for peace of mind."
  },
  {
    name: "Mark T.",
    location: "Founder's Square, Babcock Ranch",
    text: "The inspector was knowledgeable about the green building features in our home and checked the solar system thoroughly. The report was detailed and helped us understand our new home's systems."
  },
  {
    name: "David R.",
    location: "Babcock Ranch",
    text: "Professional, punctual, and very thorough. It's a smart investment to have a second set of eyes on a new construction home, and Mayne Home Inspectors is the best choice for the job."
  }
]

export default function BabcockRanchPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/babcock-ranch",
    "name": BRAND,
    "image": "https://mayneinspectors.com/images/og/service-area-babcock-ranch.jpg",
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
      "latitude": "26.8373",
      "longitude": "-81.6559"
    },
    "url": "https://mayneinspectors.com",
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Babcock Ranch, FL",
      "Punta Gorda, FL",
      "Fort Myers, FL",
      "Charlotte County, FL",
      "Lee County, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "New Construction Inspection",
      "Pre-Drywall Inspection",
      "Final Walkthrough Inspection",
      "Green Home Inspection",
      "Solar Panel Inspection"
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
        "name": "Babcock Ranch",
        "item": "https://mayneinspectors.com/service-areas/babcock-ranch"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-babcock-faq" type="application/ld+json">
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
          <li className="text-foreground">Babcock Ranch</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Babcock Ranch Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your new construction specialist for America's most sustainable community. We provide expert, independent inspections for your new home in Babcock Ranch.
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
            src="/images/og/service-area-babcock-ranch.jpg"
            alt="A modern, sustainable home in Babcock Ranch, Florida with solar panels"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Independent Inspections for a Smarter Home
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Babcock Ranch is a marvel of modern planning and sustainable living. As a homeowner here, you've invested in a community that values quality and innovation. An independent home inspection is the best way to verify that your new home meets those high standards and protects your investment.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Even the best builders can have oversights. We act as your advocate, providing a thorough, unbiased assessment of your new home's construction and systems. Our expertise in new builds, green technologies, and Florida building codes ensures we catch the details that matter, from foundation and framing to the final fit and finish.
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
                We inspect the home's structure, plumbing, and electrical systems before the walls are closed up—the best time to catch crucial structural issues.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/new-construction-inspection" className="text-primary hover:underline">
                  Final Walkthrough Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                A complete top-to-bottom inspection of the finished home before you close, ensuring everything is safe, complete, and functional.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/new-construction-inspection" className="text-primary hover:underline">
                  11-Month Warranty Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Before your builder's one-year warranty expires, we'll conduct a full inspection to identify any issues that have emerged since you moved in.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Inspect a New Babcock Ranch Home?</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Verify Quality</p>
                <p className="text-sm text-muted-foreground">Ensure your home was built to the high standards you expect.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Catch Builder Oversights</p>
                <p className="text-sm text-muted-foreground">Even the best crews can make mistakes. We find them before they become your problem.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Understand Your Home's Systems</p>
                <p className="text-sm text-muted-foreground">Learn how your home's advanced, energy-efficient systems work.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Gain Leverage for Repairs</p>
                <p className="text-sm text-muted-foreground">Our detailed report is your proof to get the builder to fix issues pre-closing.</p>
              </div>
            </div>
             <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Long-Term Peace of Mind</p>
                <p className="text-sm text-muted-foreground">Start life in your new home with confidence, knowing it's been independently verified.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Serving All Neighborhoods in Babcock Ranch</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Lake Timber",
            "Creekside",
            "Parkside",
            "Lake Babcock",
            "Founder's Square",
            "Babcock National",
            "Edgewater",
            "And all new developments!"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Babcock Ranch Homeowners Say</h2>
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
          Protect Your Babcock Ranch Investment
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Schedule your independent new construction inspection today. Call or text for a fast quote and to coordinate with your builder's schedule.
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
        <p>Florida License HI3589 • New Construction Certified • Serving Babcock Ranch</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}
