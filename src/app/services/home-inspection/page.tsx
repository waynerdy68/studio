import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const EMAIL = "info@mayneinspectors.com"

export const metadata: Metadata = {
  title: "Professional Home Inspection Services FL | Same-Day Reports | Mayne Home Inspectors",
  description:
    "Comprehensive home inspections in Southwest Florida since 2020. Same-day reports, detailed photos, licensed HI3589. Serving LaBelle, Lehigh Acres, Clewiston, Immokalee. Call (863) 843-0735.",
  alternates: { canonical: "/services/home-inspection" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/home-inspection",
    title: "Professional Home Inspection Services Southwest Florida",
    description:
      "Licensed home inspector with same-day reports, detailed photos, and clear recommendations. No scare tactics, just honest assessments.",
    images: [{ url: "/images/og/home-inspection.jpg", width: 1200, height: 630, alt: "Professional home inspection services in Southwest Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Inspection Services FL | Mayne Home Inspectors",
    description: "Professional home inspections with same-day reports and detailed photos.",
    images: ["/images/og/home-inspection.jpg"],
  },
}

const faqs = [
  { 
    q: "What does a comprehensive home inspection include?",
    a: "Our thorough inspection covers exterior, roof covering (viewed from accessible areas), structure, attic/insulation/ventilation, electrical systems, plumbing, HVAC, interior components, doors/windows, and built-in appliances. We focus on safety issues and major defects that could affect your investment." 
  },
  { 
    q: "How long does a typical home inspection take?",
    a: "Most inspections take 2-3 hours for a standard single-family home, depending on size and age. We also reserve time at the end for your questions and a walkthrough of key findings." 
  },
  { 
    q: "When will I receive my inspection report?",
    a: "You'll receive your detailed report within 24 hours of the inspection. It includes labeled photos of all findings and plain-language explanations of any issues discovered." 
  },
  { 
    q: "Should I attend the home inspection?",
    a: "Absolutely! We encourage buyers to attend, especially the final 30-45 minutes for a comprehensive walkthrough where we'll explain our findings and answer your questions on-site." 
  },
  { 
    q: "Do you inspect new construction and offer pre-listing inspections?",
    a: "Yes, we provide new construction phase inspections during various building stages and pre-listing inspections for sellers who want to identify issues before putting their home on the market." 
  },
  {
    q: "What areas do you serve for home inspections?",
    a: "We provide home inspection services throughout Southwest Florida including LaBelle, Lehigh Acres, Clewiston, Immokalee, Moore Haven, Fort Myers, Cape Coral, and surrounding areas in Lee, Collier, Hendry, and Glades counties."
  },
  {
    q: "What makes your inspection reports different?",
    a: "Our reports feature clear, labeled photos of every finding, plain-language explanations without technical jargon, practical recommendations, and a summary section highlighting the most important issues. No scare tactics - just honest, professional assessments."
  }
]

const testimonials = [
  {
    name: "Jennifer M.",
    location: "Fort Myers",
    text: "Extremely thorough inspection with a detailed report delivered the next day. Found several issues that could have been costly down the road. Professional and educational approach."
  },
  {
    name: "Mark D.",
    location: "LaBelle",
    text: "Great experience from start to finish. The inspector took time to explain everything and the report was easy to understand. Helped us negotiate repairs with confidence."
  },
  {
    name: "Lisa R.",
    location: "Cape Coral",
    text: "Fast scheduling and comprehensive inspection. The photos in the report were incredibly helpful for understanding the issues. Highly recommend for anyone buying in Southwest Florida."
  }
]

const inspectionItems = [
  {
    category: "Exterior Systems",
    items: [
      "Siding, trim, and exterior materials",
      "Foundation and grading around home",
      "Drainage and water management",
      "Decks, porches, and outdoor structures",
      "Driveways, walkways, and landscaping impact"
    ]
  },
  {
    category: "Roof & Attic",
    items: [
      "Roof covering condition and materials",
      "Gutters, downspouts, and flashings",
      "Attic insulation and ventilation",
      "Visible structural components",
      "Signs of leaks or moisture intrusion"
    ]
  },
  {
    category: "Electrical Systems", 
    items: [
      "Main electrical panel and service",
      "Circuit breakers and safety devices",
      "Wiring throughout accessible areas",
      "Outlets, switches, and fixtures",
      "GFCI and safety compliance"
    ]
  },
  {
    category: "Plumbing Systems",
    items: [
      "Water supply lines and materials",
      "Drain, waste, and vent systems", 
      "Water heater condition and safety",
      "Fixtures and water pressure",
      "Potential leak indicators"
    ]
  },
  {
    category: "HVAC Systems",
    items: [
      "Heating and cooling equipment",
      "Ductwork in accessible areas",
      "Air filtration and ventilation",
      "Thermostat operation",
      "Energy efficiency observations"
    ]
  },
  {
    category: "Interior Components",
    items: [
      "Walls, ceilings, and floors",
      "Doors, windows, and hardware",
      "Stairs, railings, and safety features",
      "Built-in appliances operation",
      "Bathroom and kitchen functionality"
    ]
  }
]

export default function HomeInspectionPage() {
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
    "@id": "https://mayneinspectors.com/services/home-inspection",
    "name": "Home Inspection Services",
    "description": "Comprehensive home inspection services in Southwest Florida with same-day reports and detailed photos",
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
    "serviceType": "Home Inspection",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Inspection Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Comprehensive Home Inspection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Construction Inspection"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Pre-Listing Inspection"
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
        "name": "Home Inspection",
        "item": "https://mayneinspectors.com/services/home-inspection"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-home-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>
      <Script id="ldjson-service" type="application/ld+json">
        {JSON.stringify(serviceLd)}
      </Script>
      <Script id="ldjson-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbLd)}
      </Script>

      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-muted-foreground">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>→</li>
          <li><Link href="/services" className="hover:text-primary">Services</Link></li>
          <li>→</li>
          <li className="text-foreground">Home Inspection</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Professional Home Inspection Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive home inspections throughout Southwest Florida with same-day reports, detailed photos, and clear recommendations. 
          Licensed, experienced, and committed to helping you make informed decisions about your property investment.
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

      {/* Hero Image */}
      <section className="mt-10">
        <div
          className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden"
          style={{ aspectRatio: "1200 / 630" }}
        >
          <Image
            src="/images/og/home-inspection.jpg"
            alt="Professional home inspector examining property systems and documenting findings with detailed photos"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      {/* Service Overview */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Our Home Inspection Services
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            A home inspection is one of the most important steps in your property purchase. Our comprehensive inspections 
            go beyond basic checklists to provide you with a thorough understanding of your potential investment. 
            Since 2020, we've been helping Southwest Florida homebuyers, sellers, and property owners make informed 
            decisions with detailed, honest assessments.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We understand that buying a home is often the largest investment you'll make. That's why we take the time 
            to thoroughly examine all accessible systems and components, document our findings with clear photos, and 
            explain everything in plain language. No technical jargon, no scare tactics – just professional, 
            straightforward information you can use to move forward with confidence.
          </p>
        </div>
      </section>

      {/* What We Inspect - Enhanced Grid */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Comprehensive Inspection Coverage</h2>
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

      {/* What You Receive */}
      <section className="mt-16 bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">What You Receive</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Detailed Inspection Report</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>High-resolution, labeled photos of all findings</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Plain-language explanations without technical jargon</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Executive summary of major issues and safety concerns</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Practical recommendations for addressing issues</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Service</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>24-hour report delivery standard</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>On-site walkthrough of key findings</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Post-inspection support via phone or text</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Licensed and insured for your protection</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Types of Home Inspections We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Buyer's Inspection</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive pre-purchase inspection to identify issues before you buy. 
              Perfect for making informed decisions and negotiating repairs.
            </p>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">New Construction</h3>
            <p className="text-sm text-muted-foreground">
              Phase inspections during construction and final walkthrough before closing. 
              Ensures quality and identifies issues while they're easier to fix.
            </p>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Pre-Listing</h3>
            <p className="text-sm text-muted-foreground">
              Get ahead of buyer inspections by identifying issues before listing. 
              Address problems proactively and price your home accurately.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Southwest Florida Service Areas</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { name: "LaBelle", link: "/service-areas/labelle" },
            { name: "Lehigh Acres", link: "/service-areas/lehigh-acres" },
            { name: "Clewiston", link: "/service-areas/clewiston" },
            { name: "Immokalee", link: "/service-areas/immokalee" },
            { name: "Moore Haven", link: "/service-areas/moore-haven" },
            { name: "Fort Myers", link: "#" },
            { name: "Cape Coral", link: "#" },
            { name: "Naples", link: "#" }
          ].map(area => (
            <div key={area.name} className="text-center p-4 rounded-lg border hover:bg-muted/50 transition-colors">
              <Link href={area.link} className="font-medium hover:text-primary">
                {area.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
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

      {/* Process Section */}
      <section className="mt-16 bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Inspection Process</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Schedule</h3>
            <p className="text-sm text-muted-foreground">Call or text to book your inspection, typically within 24 hours</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Inspect</h3>
            <p className="text-sm text-muted-foreground">Thorough 2-3 hour inspection with detailed documentation and photos</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Review</h3>
            <p className="text-sm text-muted-foreground">On-site walkthrough of findings and Q&A session</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Report</h3>
            <p className="text-sm text-muted-foreground">Detailed report with photos delivered within 24 hours</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions About Home Inspections
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

      {/* CTA Section */}
      <section className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Schedule Your Home Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get professional inspection services throughout Southwest Florida. Fast scheduling, 
          detailed reports, and the peace of mind you need to make confident decisions.
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
        <p>Florida License HI3589 • State Contractor CRC1328070 • Radon License R2355</p>
        <p>National Association of Home Inspectors NACHI10122704 • Serving Southwest Florida since 2020</p>
      </footer>
    </main>
  )
}
