
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const EMAIL = "castenhome@gmail.com"
export const metadata: Metadata = {
  title: "Wind Mitigation Inspection FL | Insurance Savings | Mayne Home Inspectors",
  description:
    "Official Wind Mitigation Inspections (OIR-B1-1802) in Southwest Florida to lower your homeowners insurance. Same-day reports. Licensed HI3589. Serving LaBelle, Lehigh Acres, Clewiston. Call (863) 843-0735.",
  alternates: { canonical: "/services/wind-mitigation" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/wind-mitigation",
    title: "Wind Mitigation Inspection for Florida Insurance Savings",
    description:
      "Lower your Florida homeowners insurance with a certified Wind Mitigation Inspection. We provide the official OIR-B1-1802 form with same-day reports.",
    images: [{ url: "/images/og/wind-mitigation.jpg", width: 1200, height: 630, alt: "Wind Mitigation Inspection in Florida showing roof clips" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wind Mitigation Inspections FL | Mayne Home Inspectors",
    description: "Lower your insurance premiums with a certified Wind Mitigation Inspection. Same-day OIR-B1-1802 form.",
    images: ["/images/og/wind-mitigation.jpg"],
  },
}

const faqs = [
    { 
        q: "What is a wind mitigation inspection?",
        a: "A wind mitigation inspection is a specific type of home inspection that identifies construction features that have been shown to reduce losses in hurricanes. Documenting these features on the official OIR-B1-1802 form can lead to significant discounts on your Florida homeowners insurance." 
    },
    { 
        q: "How much can I save on my insurance?",
        a: "Savings vary widely based on your home's features, location, and insurance carrier, but it's not uncommon for homeowners to save hundreds of dollars per year. The cost of the inspection is often recovered within the first year." 
    },
    { 
        q: "How long does a wind mitigation inspection take?",
        a: "A typical wind mitigation inspection takes about 30-60 minutes. We'll need access to your attic to document roof-to-wall connections and roof deck attachments." 
    },
    {
        q: "When will I get my report?",
        a: "You will receive the completed OIR-B1-1802 form with all required photos as a PDF within 24 hours, often the same day as the inspection."
    },
    {
        q: "How long is the inspection report valid?",
        a: "A wind mitigation inspection report is typically valid for five years from the date of the inspection, as long as no material changes have been made to the roof or structure."
    },
    {
        q: "Can you do a Wind Mitigation and 4-Point inspection at the same time?",
        a: "Yes, many homeowners bundle these two inspections together for convenience and cost savings, especially when required for a new insurance policy. We can complete both during a single visit."
    }
]

const testimonials = [
  {
    name: "Robert K.",
    location: "LaBelle",
    text: "Needed a wind mitigation inspection for insurance discounts. Got the report same day and saved $400/year on premiums. Professional service and great communication."
  },
  {
    name: "Susan P.",
    location: "Cape Coral",
    text: "The inspector was fantastic. He clearly documented all the wind-resistant features of our home. The report was professional and accepted by our insurance company without any issues."
  },
  {
    name: "Brian D.",
    location: "Lehigh Acres",
    text: "Combined our 4-Point and Wind Mitigation inspections. Mayne Home Inspectors was fast, affordable, and professional. The reports were clear and helped us maximize our insurance credits."
  }
]

const inspectionItems = [
    {
        category: "Roof Covering",
        items: [
            "Material type (shingles, tile, metal)",
            "Permit documentation and age verification",
            "Compliance with Florida Building Code (FBC)"
        ]
    },
    {
        category: "Roof Deck Attachment",
        items: [
            "Nail size and spacing inspection",
            "Plywood or OSB thickness verification",
            "Ensures the roof deck is securely fastened"
        ]
    },
    {
        category: "Roof-to-Wall Connection",
        items: [
            "Identifies clips, single wraps, or double wraps",
            "Crucial for preventing roof lift-off",
            "One of the most significant insurance credits"
        ]
    },
    {
        category: "Roof Geometry",
        items: [
            "Determines if the roof is Hip, Gable, or Flat",
            "Hip roofs typically receive a substantial discount",
            "Calculations based on non-hip feature lengths"
        ]
    },
    {
        category: "Secondary Water Resistance (SWR)",
        items: [
            "Sealed roof deck or self-adhering underlayment",
            "Provides a backup barrier against water intrusion",
            "Commonly applied during a re-roof"
        ]
    },
    {
        category: "Opening Protection",
        items: [
            "Impact-rated windows, doors, and garage doors",
            "Documentation of rated shutters or panels",
            "Ensures all openings are protected from windborne debris"
        ]
    }
]

export default function WindMitigationPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://mayneinspectors.com/services/wind-mitigation",
    "name": "Wind Mitigation Inspection Services",
    "description": "Professional Wind Mitigation Inspections in Florida to qualify for homeowners insurance discounts. We provide the official OIR-B1-1802 form.",
    "provider": {
      "@type": "LocalBusiness",
      "name": BRAND,
      "telephone": PHONE_DISPLAY,
      "email": EMAIL
    },
    "areaServed": [
      "LaBelle, FL",
      "Lehigh Acres, FL", 
      "Clewiston, FL",
      "Immokalee, FL",
      "Moore Haven, FL",
      "Fort Myers, FL",
      "Cape Coral, FL",
      "Southwest Florida"
    ],
    "serviceType": "Wind Mitigation Inspection",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Wind Mitigation Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Wind Mitigation Inspection (OIR-B1-1802)"
                }
            }
        ]
    }
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
        "name": "Services", 
        "item": "https://mayneinspectors.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Wind Mitigation Inspection",
        "item": "https://mayneinspectors.com/services/wind-mitigation"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-windmit-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>
      <Script id="ldjson-service" type="application/ld+json">
        {JSON.stringify(serviceLd)}
      </Script>
      <Script id="ldjson-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbLd)}
      </Script>

      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-muted-foreground">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>→</li>
          <li><Link href="/services" className="hover:text-primary">Services</Link></li>
          <li>→</li>
          <li className="text-foreground">Wind Mitigation</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Wind Mitigation Inspections
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Lower your Florida homeowners insurance premiums by documenting your home's wind-resistant features. 
          We provide the official OIR-B1-1802 form with same-day reports to help you save.
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
        <div
          className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden"
          style={{ aspectRatio: "1200 / 630" }}
        >
          <Image
            src="/images/og/wind-mitigation.jpg"
            alt="Wind Mitigation Inspection in Florida showing roof clips and hurricane shutters"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Unlock Insurance Savings with a Wind Mitigation Report
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            In Florida, a Wind Mitigation Inspection is one of the smartest investments a homeowner can make. 
            By documenting the specific features that make your home more resistant to hurricane-force winds, you can 
            qualify for significant discounts on your homeowners insurance policy.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Since 2020, our licensed inspectors have helped countless Southwest Florida residents lower their insurance costs. 
            We provide a thorough and accurate assessment, delivering the official OIR-B1-1802 form and all necessary photos 
            directly to you, ready to be sent to your insurance agent. The process is quick, affordable, and the savings 
            can last for years.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Key Features We Document for Credits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspectionItems.map((category, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-primary">{category.category}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">What You Receive</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Official Insurance Documentation</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Completed Florida OIR-B1-1802 Form</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>High-quality, labeled photos for each credit</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Clear documentation of all wind-resistant features</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>PDF report ready to email to your agent</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Fast & Professional Service</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>24-hour report delivery standard</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Quick and efficient on-site inspection</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Post-inspection support for any questions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Licensed (HI3589) and insured inspector</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Our Customers Say</h2>
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
          Frequently Asked Questions About Wind Mitigation
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border p-6 shadow-sm">
              <summary className="cursor-pointer font-medium text-lg">{f.q}</summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Lower Your Insurance Premiums?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Schedule your Wind Mitigation Inspection today and start saving. Call or text for fast scheduling 
          and expert service throughout Southwest Florida.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#schedule" className="px-8 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90">
            Schedule Online
          </Link>
          <a
            href={`tel:${PHONE_E164}`}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90"
            aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
          >
            Or Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-muted-foreground space-y-2">
        <p>Florida License HI3589 • Serving Southwest Florida since 2020</p>
      </footer>
    </main>
  )
}
