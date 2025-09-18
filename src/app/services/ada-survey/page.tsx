
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const EMAIL = "castenhome@gmail.com"

export const metadata: Metadata = {
  title: "ADA Compliance Surveys | Southwest FL | Mayne Home Inspectors",
  description:
    "Ensure your commercial property is accessible and compliant with an ADA Survey. We identify barriers to access for businesses in Southwest FL. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/services/ada-survey" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/ada-survey",
    title: "ADA Compliance Survey Services for Commercial Properties",
    description:
      "Our ADA Surveys help business owners and property managers ensure their facilities are accessible to everyone and compliant with federal regulations.",
    images: [{ url: "/images/og/ada-survey.jpg", width: 1200, height: 630, alt: "ADA compliance survey for a commercial building" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADA Survey FL | Mayne Home Inspectors",
    description: "Ensure your commercial property meets ADA standards with a professional compliance survey.",
    images: ["/images/og/ada-survey.jpg"],
  },
}

const faqs = [
    {
        q: "What is an ADA Survey?",
        a: "An ADA Survey, or Accessibility Survey, is an inspection of a commercial property to determine its compliance with the Americans with Disabilities Act (ADA). It identifies physical barriers that could limit access for people with disabilities."
    },
    {
        q: "Is an ADA Survey required for my business?",
        a: "All public accommodations and commercial facilities are required to be accessible to individuals with disabilities. An ADA survey is a proactive step to ensure compliance, mitigate legal risks, and make your business welcoming to all customers."
    },
    {
        q: "What areas of a property do you inspect during an ADA Survey?",
        a: "We inspect all public-facing areas, including parking lots (accessible spaces, signage), pathways to the entrance, ramps and stairs, entrance doors, interior routes, public restrooms, and service counters."
    },
    {
        q: "How does this differ from a standard commercial inspection?",
        a: "While a commercial inspection focuses on the physical condition and systems of a building (like roof, HVAC, electrical), an ADA Survey focuses specifically on compliance with accessibility standards. It's about access, not just condition."
    },
    {
        q: "What happens if you find non-compliant items?",
        a: "Our report will provide a clear, photo-documented list of any identified barriers to accessibility. This report is a tool you can use to plan for 'readily achievable' barrier removal, helping you prioritize improvements and demonstrate a commitment to compliance."
    }
]

const testimonials = [
  {
    name: "Commercial Property Owner",
    location: "Lee County",
    text: "The ADA survey was incredibly detailed and eye-opening. It gave us a clear roadmap for making our shopping center more accessible. This is a must-have service for any commercial property owner."
  },
  {
    name: "Restaurant Manager",
    location: "Fort Myers",
    text: "We wanted to ensure our new restaurant was welcoming to everyone. The survey identified a few issues with our restroom and entrance that were easy fixes. It's peace of mind knowing we are compliant."
  },
  {
    name: "Real Estate Investor",
    location: "Southwest Florida",
    text: "I now get an ADA survey on every commercial property I consider purchasing. It's a crucial part of my due diligence to understand potential costs and liabilities. Mayne Home Inspectors provides a clear, actionable report."
  }
]

const inspectionScope = [
    {
        category: "Exterior & Site",
        items: [
            "Accessible parking spaces (number, size, signage)",
            "Accessible routes from parking to entrance",
            "Curb ramps and sidewalk conditions",
            "Building entrances and door hardware"
        ]
    },
    {
        category: "Interior Routes",
        items: [
            "Hallway and aisle widths",
            "Floor surface traction and level changes",
            "Accessibility to goods and services",
            "Signage and directional information"
        ]
    },
    {
        category: "Public Restrooms",
        items: [
            "Doorway clearance and hardware",
            "Stall dimensions and grab bar placement",
            "Sink and mirror heights",
            "Accessible toilet and faucet controls"
        ]
    },
    {
        category: "Additional Areas",
        items: [
            "Service counters and drinking fountain heights",
            "Elevator accessibility and controls",
            "Fire alarm systems (visual and audible alerts)",
            "General safety and accessibility features"
        ]
    }
]

export default function AdaSurveyPage() {
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
    "@id": "https://mayneinspectors.com/services/ada-survey",
    "name": "ADA Compliance Survey",
    "description": "Professional accessibility surveys for commercial properties in Southwest Florida to ensure compliance with the Americans with Disabilities Act.",
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
    "serviceType": "ADA Compliance Survey"
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
        "name": "ADA Survey",
        "item": "https://mayneinspectors.com/services/ada-survey"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-ada-faq" type="application/ld+json">
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
          <li className="text-foreground">ADA Survey</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          ADA Compliance Surveys
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Ensure your business is open and accessible to everyone. Our ADA Surveys help you identify and address accessibility barriers, promoting inclusivity and mitigating legal risks.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90"
            aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
          >
            Call for a Commercial Quote
          </a>
          <a
            href={`mailto:${EMAIL}?subject=ADA%20Survey%20Quote%20Request`}
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
            src="/images/og/ada-survey.jpg"
            alt="An accessibility ramp leading into a commercial building"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Accessibility is Good Business
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Ensuring your commercial property is compliant with the Americans with Disabilities Act (ADA) is not just a legal requirement—it's a fundamental part of good business. An accessible property welcomes more customers, reduces the risk of lawsuits, and demonstrates your commitment to serving the entire community.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Our ADA Surveys provide a comprehensive evaluation of your property based on the ADA Standards for Accessible Design. We deliver a clear, actionable report that identifies barriers and provides guidance on how to address them, allowing you to create a safe and welcoming environment for all patrons and employees.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Scope of Our ADA Survey</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
        <h2 className="text-2xl font-semibold text-center mb-8">Who Needs an ADA Survey?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Business Owners</h3>
            <p className="text-sm text-muted-foreground">Ensure your storefront, restaurant, or office is welcoming to all customers and employees.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Property Managers</h3>
            <p className="text-sm text-muted-foreground">Proactively manage risk and enhance the value of your commercial properties.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Real Estate Investors</h3>
            <p className="text-sm text-muted-foreground">Incorporate potential accessibility upgrade costs into your due diligence before purchasing.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Our Clients Say</h2>
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
          ADA Survey FAQs
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
          Ensure Your Property is Accessible to All
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Take the proactive step to ensure compliance and create a welcoming environment. Contact us today for a custom quote on an ADA Survey for your commercial property.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90"
            aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
          >
            Call for an ADA Survey Quote
          </a>
          <a
            href={`mailto:${EMAIL}?subject=ADA%20Survey%20Quote%20Request`}
            className="px-8 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5"
          >
            Email for a Quote
          </a>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-muted-foreground space-y-2">
        <p>Florida License HI3589 • Supporting accessible businesses in Southwest Florida</p>
      </footer>
    </main>
  )
}
