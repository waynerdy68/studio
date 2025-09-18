
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const EMAIL = "info@mayneinspectors.com"

export const metadata: Metadata = {
  title: "Condo & Townhouse Inspection | Southwest FL | Mayne Home Inspectors",
  description:
    "Specialized condo and townhouse inspections in Southwest Florida. We focus on interior systems and accessible common areas. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/services/condo-townhouse-inspection" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/condo-townhouse-inspection",
    title: "Condo & Townhouse Inspection Services in SWFL",
    description:
      "Protect your investment with a specialized inspection for condos and townhouses, focusing on the unique aspects of shared properties.",
    images: [{ url: "/images/og/condo-inspection.jpg", width: 1200, height: 630, alt: "Modern condo building inspection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Condo Inspection FL | Mayne Home Inspectors",
    description: "Detailed condo and townhouse inspections for buyers and owners.",
    images: ["/images/og/condo-inspection.jpg"],
  },
}

const faqs = [
    {
        q: "How is a condo inspection different from a single-family home inspection?",
        a: "A condo inspection focuses on the interior of the unit and the systems that are the owner's responsibility. This includes electrical panels, plumbing fixtures, HVAC units serving only your unit, and all interior components. We also perform a visual assessment of readily accessible common areas like hallways, roofing (from the ground or balcony), and exterior walls."
    },
    {
        q: "What common elements do you look at?",
        a: "While we can't inspect areas that are the HOA's responsibility in detail, we do a visual assessment of what we can safely access. This might include the building's exterior, foundations, walkways, and shared roofing to identify any obvious issues that could potentially affect your unit."
    },
    {
        q: "Should I review the HOA documents before the inspection?",
        a: "Absolutely. The HOA or condo association documents are crucial as they define which systems are your responsibility versus the association's. Knowing this helps us focus the inspection on the areas that matter most to you financially."
    },
    {
        q: "What are common issues found in condos and townhouses?",
        a: "Common issues include leaks from units above, problems with shared plumbing (drainage stacks), window and sliding door failures, and issues with the unit's dedicated HVAC system. We also check for proper sound insulation and fire separation between units where visible."
    },
    {
        q: "How long does a condo inspection take?",
        a: "A typical condo or townhouse inspection takes about 1.5 to 2.5 hours, depending on the size and complexity of the unit."
    }
]

const testimonials = [
  {
    name: "Samantha P.",
    location: "Fort Myers",
    text: "The inspector was great at explaining what was my responsibility versus the HOA's. The report was detailed and helped me understand the condition of my new condo's interior systems. Highly recommend for any condo buyer."
  },
  {
    name: "Daniel Kim",
    location: "Cape Coral",
    text: "I was buying a townhouse and needed a thorough inspection. They identified a slow leak under the kitchen sink and an issue with the electrical panel that I was able to get fixed before closing. Very professional service."
  },
  {
    name: "Jessica L.",
    location: "Lehigh Acres",
    text: "As a real estate agent, I recommend Mayne Home Inspectors for condo inspections. They are knowledgeable about the unique aspects of these properties and provide clear, concise reports that my clients appreciate."
  }
]

const inspectionScope = [
    {
        category: "Interior Systems",
        items: [
            "Electrical panel, outlets, and switches within the unit",
            "Plumbing fixtures, shut-off valves, and water heater",
            "HVAC system dedicated to the unit",
            "Built-in appliances (kitchen, laundry)"
        ]
    },
    {
        category: "Interior Components",
        items: [
            "Walls, ceilings, and floors",
            "Windows and doors (including balconies/patios)",
            "Cabinets and countertops",
            "Stairs and railings within the unit"
        ]
    },
    {
        category: "Accessible Common Areas (Visual)",
        items: [
            "Exterior walls and siding",
            "Roofing (viewed from ground or balcony)",
            "Foundations and slabs",
            "Shared walkways, stairs, and railings"
        ]
    }
]

export default function CondoTownhouseInspectionPage() {
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
    "@id": "https://mayneinspectors.com/services/condo-townhouse-inspection",
    "name": "Condo & Townhouse Inspection",
    "description": "Specialized home inspections for condominium and townhouse properties in Southwest Florida.",
    "provider": {
      "@type": "LocalBusiness",
      "name": BRAND,
      "telephone": PHONE_DISPLAY,
      "email": EMAIL
    },
    "areaServed": [
      "Fort Myers, FL",
      "Cape Coral, FL",
      "Lehigh Acres, FL",
      "LaBelle, FL",
      "Southwest Florida"
    ],
    "serviceType": "Condo & Townhouse Inspection"
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
        "item": "https://mayneinspectors.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Condo & Townhouse Inspection",
        "item": "https://mayneinspectors.com/services/condo-townhouse-inspection"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-condo-faq" type="application/ld+json">
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
          <li><Link href="/#services" className="hover:text-primary">Services</Link></li>
          <li>→</li>
          <li className="text-foreground">Condo & Townhouse Inspection</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Condo & Townhouse Inspections
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A specialized inspection focused on the unique aspects of your condo or townhouse. We inspect the systems you're responsible for, so you can invest with confidence.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90"
            aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
          >
            Call for a Condo Quote
          </a>
          <a
            href={`sms:${PHONE_E164}`}
            className="px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5"
          >
            Text to Schedule
          </a>
        </div>
      </section>

      <section className="mt-10">
        <div
          className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden"
          style={{ aspectRatio: "1200 / 630" }}
        >
          <Image
            src="/images/og/condo-inspection.jpg"
            alt="Interior of a modern condo living room"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          The Right Inspection for Your Shared Property
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Inspecting a condominium or townhouse is different from inspecting a single-family home. While the association is responsible for common areas, you are responsible for the "walls-in" interior of your unit. Our specialized condo inspections focus on the systems and components that are your financial responsibility.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We provide a detailed assessment of your unit's interior, from the electrical panel and plumbing fixtures to the HVAC system and appliances. We also visually assess accessible common elements like balconies, windows, and exterior walls to identify any issues that might impact your unit. Understanding the boundary between your responsibility and the HOA's is key to a smart purchase.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Condo & Townhouse Inspection Scope</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {inspectionScope.map((category, index) => (
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
        <h2 className="text-2xl font-semibold text-center mb-8">Why a Specialized Condo Inspection is Crucial</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Understand Your Responsibility</h3>
            <p className="text-sm text-muted-foreground">Clarify what you own and are responsible for maintaining and repairing versus what the HOA covers.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Identify Inter-Unit Issues</h3>
            <p className="text-sm text-muted-foreground">Discover potential problems like leaks from neighboring units that could become your headache.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Assess System Health</h3>
            <p className="text-sm text-muted-foreground">Evaluate the condition of the HVAC, electrical, and plumbing systems that exclusively serve your unit.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
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
          Condo & Townhouse Inspection FAQs
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
          Schedule Your Condo or Townhouse Inspection
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get a clear, detailed picture of your new condo or townhouse before you finalize your purchase. Contact us today for fast, expert service.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90"
            aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
          >
            Call for a Quote
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
        <p>Florida License HI3589 • Serving all of Southwest Florida's communities</p>
      </footer>
    </main>
  )
}

    