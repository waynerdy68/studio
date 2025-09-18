
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const EMAIL = "info@mayneinspectors.com"

export const metadata: Metadata = {
  title: "Commercial Property Inspection | Southwest FL | Mayne Home Inspectors",
  description:
    "Professional commercial property inspections in Southwest Florida. We inspect offices, retail spaces, industrial buildings, and more. Licensed HI3589. Call (863) 843-0735 for a quote.",
  alternates: { canonical: "/services/commercial-inspection" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/commercial-inspection",
    title: "Commercial Property Inspection Services in SWFL",
    description:
      "Protect your investment with a thorough commercial inspection. We assess all major systems for office, retail, and industrial properties.",
    images: [{ url: "/images/og/commercial-inspection.jpg", width: 1200, height: 630, alt: "Commercial building inspection in Southwest Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Inspection FL | Mayne Home Inspectors",
    description: "Detailed commercial property inspections for investors and business owners.",
    images: ["/images/og/commercial-inspection.jpg"],
  },
}

const faqs = [
    {
        q: "What types of commercial properties do you inspect?",
        a: "We inspect a wide range of commercial properties, including office buildings, retail stores and strip malls, industrial warehouses, restaurants, and multi-family residential buildings like apartment complexes."
    },
    {
        q: "How does a commercial inspection differ from a residential one?",
        a: "Commercial inspections are broader in scope. They cover all the systems of a residential inspection but also include commercial-grade systems, parking lots, public accessibility (ADA compliance), fire safety systems, and the unique construction components of commercial buildings."
    },
    {
        q: "How long does a commercial inspection take?",
        a: "The time required varies greatly depending on the size, age, and complexity of the property. A small retail space might take a few hours, while a large industrial warehouse could take a full day or more. We can provide a time estimate when you request a quote."
    },
    {
        q: "What standards do you follow for commercial inspections?",
        a: "Our commercial inspections generally follow the standards set by ASTM E2018-15, the recognized guide for Property Condition Assessments."
    },
    {
        q: "Why is a commercial inspection important for a business owner or investor?",
        a: "A commercial inspection provides a detailed assessment of the property's condition, helping you understand potential immediate repair costs and future capital expenditures. It's a crucial part of due diligence that can save you from significant unexpected expenses."
    },
    {
        q: "Does your inspection include specialized systems like commercial kitchens or elevators?",
        a: "Our standard commercial inspection includes a visual assessment of these systems. However, for a detailed operational analysis, we recommend consulting with a qualified specialist in those fields, and we can help coordinate that if needed."
    }
]

const testimonials = [
  {
    name: "Property Management Group",
    location: "Lee County",
    text: "We use Mayne Home Inspectors for all our commercial property acquisitions. Their reports are incredibly detailed, helping us budget for necessary repairs and negotiate effectively. They are an essential part of our due diligence process."
  },
  {
    name: "Business Owner",
    location: "Fort Myers",
    text: "Before signing the lease on my new retail space, I had it inspected. The report identified a major issue with the HVAC system that the landlord agreed to replace. This service saved me thousands in potential future costs."
  },
  {
    name: "Real Estate Investor",
    location: "Southwest Florida",
    text: "Thorough, professional, and reliable. Their commercial inspection reports are easy to understand and provide the critical information I need to evaluate an investment property. Highly recommended."
  }
]

const inspectionScope = [
    {
        category: "Structure & Exterior",
        items: [
            "Foundation and structural frame",
            "Exterior walls, windows, and doors",
            "Parking lots, sidewalks, and curbing",
            "Landscaping, grading, and site drainage"
        ]
    },
    {
        category: "Roofing System",
        items: [
            "Roof covering material (e.g., TPO, EPDM, metal)",
            "Flashing, coping, and drainage systems",
            "Skylights, vents, and rooftop penetrations"
        ]
    },
    {
        category: "Electrical System",
        items: [
            "Main service panels and sub-panels",
            "Distribution wiring and conduit",
            "Lighting fixtures and emergency lighting",
            "Receptacles and switches"
        ]
    },
    {
        category: "Plumbing System",
        items: [
            "Water supply lines and shut-off valves",
            "Drain, waste, and vent systems",
            "Commercial-grade water heaters",
            "Restroom fixtures and functionality"
        ]
    },
    {
        category: "HVAC System",
        items: [
            "Rooftop units (RTUs) and split systems",
            "Ductwork and ventilation",
            "Thermostats and control systems",
            "Overall condition and age assessment"
        ]
    },
    {
        category: "Interior & Life Safety",
        items: [
            "Interior finishes (walls, floors, ceilings)",
            "Fire suppression systems (visual check)",
            "Accessibility and ADA compliance (visual check)",
            "Means of egress and exit signage"
        ]
    }
]

export default function CommercialInspectionPage() {
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
    "@id": "https://mayneinspectors.com/services/commercial-inspection",
    "name": "Commercial Property Inspection",
    "description": "Comprehensive commercial property inspections for office, retail, and industrial buildings in Southwest Florida.",
    "provider": {
      "@type": "LocalBusiness",
      "name": BRAND,
      "telephone": PHONE_DISPLAY,
      "email": EMAIL
    },
    "areaServed": [
      "LaBelle, FL",
      "Lehigh Acres, FL",
      "Fort Myers, FL",
      "Cape Coral, FL",
      "Southwest Florida"
    ],
    "serviceType": "Commercial Property Inspection"
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
        "name": "Commercial Inspection",
        "item": "https://mayneinspectors.com/services/commercial-inspection"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-commercial-faq" type="application/ld+json">
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
          <li className="text-foreground">Commercial Inspection</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Commercial Property Inspections
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Protect your investment with a comprehensive commercial property inspection. We provide detailed reports for office, retail, and industrial properties across Southwest Florida.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90"
            aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
          >
            Call for a Quote
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5"
          >
            Email for a Quote
          </a>
        </div>
      </section>

      <section className="mt-10">
        <div
          className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden"
          style={{ aspectRatio: "1200 / 630" }}
        >
          <Image
            src="/images/og/commercial-inspection.jpg"
            alt="Inspector reviewing plans at a commercial building site"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Informed Decisions for Your Commercial Investment
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            A commercial property inspection is a critical step in any transaction, whether you are buying, selling, or leasing. Our inspections provide a thorough, unbiased assessment of the property's condition, helping you understand potential risks and future maintenance costs. This crucial information empowers you to negotiate effectively and budget for your investment with confidence.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We inspect a variety of commercial properties, from small storefronts to large industrial warehouses. Our process is tailored to the specific needs of each property, ensuring all major systems and components are evaluated according to industry standards.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Comprehensive Commercial Inspection Scope</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <h2 className="text-2xl font-semibold text-center mb-8">Who Benefits from a Commercial Inspection?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Property Buyers & Investors</h3>
            <p className="text-sm text-muted-foreground">Make informed acquisition decisions and understand potential liabilities and future capital expenditures.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Property Sellers</h3>
            <p className="text-sm text-muted-foreground">Identify and address issues pre-listing to ensure a smoother transaction and justify your asking price.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Lenders & Tenants</h3>
            <p className="text-sm text-muted-foreground">Assess the condition of a property to mitigate risk before financing or signing a long-term lease.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Our Commercial Clients Say</h2>
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
          Commercial Inspection FAQs
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
          Get a Quote for Your Commercial Property
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Due to the unique nature of each commercial property, we provide custom quotes. Contact us today to discuss your property and receive a detailed proposal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90"
            aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
          >
            Call for a Custom Quote
          </a>
          <a
            href={`mailto:${EMAIL}?subject=Commercial%20Inspection%20Quote%20Request`}
            className="px-8 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5"
          >
            Email for a Quote
          </a>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-muted-foreground space-y-2">
        <p>Florida License HI3589 • Serving Southwest Florida's business community since 2020</p>
      </footer>
    </main>
  )
}
