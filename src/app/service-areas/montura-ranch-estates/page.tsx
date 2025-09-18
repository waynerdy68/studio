
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
  title: "Montura Ranch Estates FL Home Inspector | Acreage & Ranch Inspections | Mayne Home Inspectors",
  description:
    "Specialized home inspections for Montura Ranch Estates, FL. Expertise in large acreage properties, ranches, manufactured homes, and well/septic systems. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/montura-ranch-estates" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/montura-ranch-estates",
    title: "Montura Ranch Estates Home Inspector | Acreage & Ranch Specialist",
    description:
      "Local Montura Ranch inspector for large properties, manufactured homes, and equestrian estates. We understand the unique needs of rural Hendry County properties.",
    images: [{ url: "/images/og/service-area-montura-ranch.jpg", width: 1200, height: 630, alt: "A rural property with a manufactured home in Montura Ranch Estates awaiting inspection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montura Ranch FL Home Inspector | Mayne Home Inspectors",
    description: "Professional inspections for large acreage and manufactured homes in Montura Ranch.",
    images: ["/images/og/service-area-montura-ranch.jpg"],
  },
}

const faqs = [
  {
    q: "Do you have experience with manufactured homes in Montura Ranch?",
    a: "Yes, we specialize in inspecting manufactured and mobile homes, which are common in Montura Ranch Estates. Our inspections cover tie-downs, foundations, and the specific systems unique to these types of properties."
  },
  {
    q: "How quickly can you schedule an inspection for a large property in Montura?",
    a: "We can typically schedule an inspection in Montura Ranch within 24-48 hours. We understand that larger properties may require more time and we allocate our schedule accordingly to ensure a thorough assessment."
  },
  {
    q: "What do you look for in a Montura Ranch home inspection?",
    a: "In Montura Ranch, we focus on issues common to rural and large-acreage properties. This includes the condition of well and septic systems, the integrity of outbuildings and barns, fencing, proper grading and drainage across the acreage, and the specifics of manufactured homes."
  },
  {
    q: "Why do I need a professional inspector for a property in Montura Ranch?",
    a: "Properties in Montura have unique characteristics not found in typical suburban homes. An experienced inspector can identify issues with wells, septic systems, large-scale electrical needs, and the specific structural requirements for manufactured homes, ensuring your rural investment is a sound one."
  }
]

const testimonials = [
  {
    name: "Frank G.",
    location: "Montura Ranch Estates",
    text: "Finally, an inspector who understands ranch properties! He checked our well system, the barn, and the main house. The report was incredibly detailed and gave us a full picture of our 5-acre property. Excellent service."
  },
  {
    name: "Maria C.",
    location: "Montura Ranch",
    text: "We were buying a manufactured home and were nervous about the inspection. The inspector was so knowledgeable and patient, explaining everything about the foundation and tie-downs. We feel much more confident now."
  },
  {
    name: "David S.",
    location: "Montura Ranch Estates",
    text: "Fast, professional, and thorough. It's hard to find good services out here, but Mayne Home Inspectors exceeded our expectations. They understand the challenges of rural properties. Highly recommended."
  }
]

export default function MonturaRanchPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/montura-ranch-estates",
    "name": BRAND,
    "image": "https://mayneinspectors.com/images/og/service-area-montura-ranch.jpg",
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
      "latitude": "26.6578",
      "longitude": "-81.1687"
    },
    "url": "https://mayneinspectors.com",
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Montura Ranch Estates, FL",
      "Clewiston, FL",
      "LaBelle, FL",
      "Hendry County, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "Manufactured Home Inspection",
      "Well and Septic Inspection",
      "Ranch and Acreage Inspection",
      "4-Point Inspection"
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
        "name": "Montura Ranch Estates",
        "item": "https://mayneinspectors.com/service-areas/montura-ranch-estates"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-montura-faq" type="application/ld+json">
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
          <li className="text-foreground">Montura Ranch Estates</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Montura Ranch Estates Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your local specialist for manufactured homes, large acreage, and equestrian properties in Montura Ranch. We provide thorough, reliable inspections for rural Hendry County.
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
            Text for a Rural Property Quote
          </a>
        </div>
      </section>

      <section className="mt-10">
        <div className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden" style={{ aspectRatio: "1200 / 630" }}>
          <Image
            src="/images/og/service-area-montura-ranch.jpg"
            alt="A rural property with a manufactured home and large acreage in Montura Ranch Estates"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Expert Inspections for the Montura Ranch Lifestyle
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Montura Ranch Estates offers a unique rural and equestrian lifestyle on large acreage properties. Inspecting these homes requires a different kind of expertise. We specialize in the types of properties common in Montura, including manufactured homes, ranch houses, and properties with significant land.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We understand the importance of checking systems that are critical to rural living. Our inspections place special emphasis on the condition of private wells, septic systems, outbuildings, and the overall state of the property's land and drainage. We provide the detailed assessment you need to invest confidently in the spacious, private lifestyle that Montura Ranch offers.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Our Specialized Montura Services</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/mobile-home-inspection" className="text-primary hover:underline">
                  Manufactured Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Expert assessment of manufactured and mobile homes, focusing on foundations, tie-downs, and systems specific to these structures.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/well-water-testing" className="text-primary hover:underline">
                  Well & Septic System Evaluation
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Visual inspection of crucial well and septic components to assess their condition and functionality for rural living.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/home-inspection" className="text-primary hover:underline">
                  Acreage & Outbuilding Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                We inspect barns, sheds, and other outbuildings, and assess the general grading and drainage of your large property.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Inspect in Montura Ranch?</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Verify Rural Systems</p>
                <p className="text-sm text-muted-foreground">Ensure your well and septic systems are in good working order.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Check Manufactured Home Integrity</p>
                <p className="text-sm text-muted-foreground">Confirm proper foundation, tie-downs, and structural condition.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Assess Outbuildings</p>
                <p className="text-sm text-muted-foreground">Understand the condition of barns, workshops, and sheds on the property.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Peace of Mind for Your Investment</p>
                <p className="text-sm text-muted-foreground">Buy your piece of the country with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Serving Montura Ranch and Surrounding Areas</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Montura Ranches",
            "Pioneer Plantation",
            "Flaghole",
            "Clewiston",
            "LaBelle",
            "All of Rural Hendry County"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Montura Ranch Residents Say</h2>
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
          Montura Ranch Estates FAQs
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
          Protect Your Montura Ranch Investment
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Schedule your specialized rural property inspection today. Call or text for a fast quote and to discuss the unique needs of your acreage property.
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
        <p>Florida License HI3589 • Serving Montura Ranch Estates & Hendry County</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}
