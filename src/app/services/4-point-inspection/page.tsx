import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const EMAIL = "castenhome@gmail.com"

export const metadata: Metadata = {
  title: "4-Point Inspection Services FL | Insurance Required | Same-Day Reports | Mayne Home Inspectors",
  description:
    "Professional 4-Point Inspections for Florida homeowners insurance. Roof, Electrical, Plumbing, HVAC reports. Same-day delivery. Licensed HI3589. Serving Southwest FL. Call (863) 843-0735.",
  alternates: { canonical: "/services/4-point-inspection" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/4-point-inspection",
    title: "4-Point Inspection Services for Florida Homeowners Insurance",
    description:
      "Get your insurance-required 4-Point Inspection with same-day reports. Licensed inspector covering roof, electrical, plumbing, and HVAC systems.",
    images: [{ url: "/images/og/4-point-inspection.jpg", width: 1200, height: 630, alt: "4-Point Inspection services for Florida homeowners insurance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "4-Point Inspection FL | Mayne Home Inspectors",
    description: "Insurance-required 4-Point Inspections with same-day reports.",
    images: ["/images/og/4-point-inspection.jpg"],
  },
}

const faqs = [
  { 
    q: "What is a 4-Point Inspection and why do I need one?",
    a: "A 4-Point Inspection is a focused assessment of four major home systems: roof, electrical, plumbing, and HVAC. Florida insurance companies require this inspection for homes typically over 30 years old to assess risk and determine coverage eligibility and rates." 
  },
  { 
    q: "How long does a 4-Point Inspection take?",
    a: "Most 4-Point Inspections take 1-2 hours depending on home size and accessibility. Since we're focusing on specific systems rather than the entire home, it's faster than a comprehensive inspection." 
  },
  { 
    q: "When will I receive my 4-Point Inspection report?",
    a: "You'll receive your detailed 4-Point report within 24 hours, often same-day. The report includes photos and documentation formatted specifically for insurance company requirements." 
  },
  { 
    q: "What insurance companies accept your 4-Point Inspections?",
    a: "Our 4-Point Inspections are accepted by all major Florida insurance carriers including Citizens, Universal, Heritage, Florida Peninsula, and others. We format reports to meet industry standards." 
  },
  { 
    q: "How much can a 4-Point Inspection save on insurance?",
    a: "While we can't guarantee savings, many homeowners see reduced premiums or avoid policy cancellation when systems are in good condition. The inspection cost often pays for itself through insurance benefits." 
  },
  {
    q: "What happens if issues are found during the 4-Point Inspection?",
    a: "We document the current condition honestly and professionally. If issues are found, the report helps you understand what may need attention for insurance compliance. We provide practical guidance on addressing any concerns."
  },
  {
    q: "Can you do a 4-Point and Wind Mitigation inspection together?",
    a: "Absolutely! Many homeowners schedule both inspections together for maximum convenience and insurance savings. We can complete both during a single visit and provide separate reports for each."
  }
]

const testimonials = [
  {
    name: "Helen S.",
    location: "Cape Coral",
    text: "Needed a 4-Point for insurance renewal on my 35-year-old home. Fast service, professional report, and my insurance company accepted it immediately. Saved me from having to find new coverage."
  },
  {
    name: "Tom R.",
    location: "LaBelle",
    text: "Great experience with both 4-Point and Wind Mitigation inspections done together. Saved time and money, and the inspector explained everything clearly."
  },
  {
    name: "Maria L.",
    location: "Lehigh Acres",
    text: "Professional service and quick turnaround. The 4-Point report was exactly what my insurance company needed, and the inspector found no major issues with my home systems."
  }
]

const fourPointSystems = [
  {
    system: "Roofing System",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14h8" />
      </svg>
    ),
    description: "Age, material type, condition assessment",
    details: [
      "Roof covering material and age verification",
      "Condition of shingles, tiles, or metal roofing",
      "Gutters, downspouts, and drainage systems", 
      "Visible signs of leaks or damage",
      "Overall structural condition assessment"
    ]
  },
  {
    system: "Electrical System", 
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Panel type, wiring, safety compliance",
    details: [
      "Main electrical panel age and type",
      "Circuit breaker or fuse box condition",
      "Visible wiring throughout accessible areas",
      "GFCI protection where required",
      "Overall electrical safety assessment"
    ]
  },
  {
    system: "Plumbing System",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: "Supply lines, drain systems, water heater",
    details: [
      "Water supply line materials and condition",
      "Drain, waste, and vent system assessment",
      "Water heater age, type, and condition",
      "Visible plumbing fixtures and connections",
      "Signs of leaks or water damage"
    ]
  },
  {
    system: "HVAC System",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    description: "Heating/cooling equipment age and condition",
    details: [
      "Air conditioning and heating unit age",
      "Equipment condition and maintenance status",
      "Ductwork in accessible areas",
      "Thermostat operation and controls",
      "Overall system functionality assessment"
    ]
  }
]

export default function FourPointPage() {
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
    "@id": "https://mayneinspectors.com/services/4-point-inspection",
    "name": "4-Point Inspection Services",
    "description": "Professional 4-Point Inspections for Florida homeowners insurance requirements covering roof, electrical, plumbing, and HVAC systems",
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
    "serviceType": "4-Point Inspection"
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
        "name": "4-Point Inspection",
        "item": "https://mayneinspectors.com/services/4-point-inspection"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-4point-faq" type="application/ld+json">
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
          <li className="text-foreground">4-Point Inspection</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          4-Point Inspection Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional 4-Point Inspections for Florida homeowners insurance requirements. Fast, thorough assessment 
          of your roof, electrical, plumbing, and HVAC systems with same-day reports accepted by all major insurers.
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
            src="/images/og/4-point-inspection.jpg"
            alt="Professional 4-Point Inspection of home systems for Florida homeowners insurance requirements"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      {/* Service Overview */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What is a 4-Point Inspection?
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            A 4-Point Inspection is a focused assessment required by most Florida insurance companies for homes 
            typically over 30 years old. Unlike a comprehensive home inspection, this targeted evaluation examines 
            the four major systems that insurers consider most critical for determining coverage eligibility and rates: 
            roofing, electrical, plumbing, and HVAC systems.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Insurance companies use 4-Point Inspections to assess risk and make informed decisions about coverage. 
            A professionally completed inspection can help you maintain your current policy, secure new coverage, 
            or potentially reduce your premiums. Since 2020, we've been helping Southwest Florida homeowners 
            navigate insurance requirements with thorough, accurate inspections that meet all industry standards.
          </p>
        </div>
      </section>

      {/* Why You Need It */}
      <section className="mt-16 bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">
          Why Florida Homeowners Need 4-Point Inspections
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Policy Requirements</h3>
            <p className="text-sm text-muted-foreground">Insurance companies require 4-Point Inspections for older homes to assess coverage eligibility</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Avoid Cancellation</h3>
            <p className="text-sm text-muted-foreground">Maintain your current coverage by documenting system conditions before renewal</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Potential Savings</h3>
            <p className="text-sm text-muted-foreground">Systems in good condition may qualify for better rates or coverage options</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Peace of Mind</h3>
            <p className="text-sm text-muted-foreground">Know the condition of your major systems and plan for future maintenance</p>
          </div>
        </div>
      </section>

      {/* The 4 Systems */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">The Four Critical Systems We Inspect</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {fourPointSystems.map((system, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {system.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{system.system}</h3>
                  <p className="text-muted-foreground">{system.description}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {system.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="mt-16 bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">What You Receive</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Documentation</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Insurance-compliant 4-Point report format</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>High-quality photos of each system</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Age and condition documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Clear assessment of system functionality</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Fast, Reliable Service</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Same-day or 24-hour report delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Accepted by all major Florida insurers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Licensed and insured inspector</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Post-inspection support and guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Insurance Companies */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Accepted by All Major Florida Insurers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {[
            "Citizens Insurance",
            "Universal Property", 
            "Heritage Insurance",
            "Florida Peninsula",
            "Federated National",
            "Tower Hill",
            "American Coastal",
            "Slide Insurance",
            "United Property",
            "Avatar Property",
            "Lighthouse Insurance",
            "Monarch Insurance"
          ].map(insurer => (
            <div key={insurer} className="text-center p-3 rounded-lg border bg-muted/30">
              <p className="text-sm font-medium">{insurer}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-6">
          ...and many other Florida insurance carriers
        </p>
      </section>

      {/* Process Section */}
      <section className="mt-16 bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">Our 4-Point Inspection Process</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Quick Scheduling</h3>
            <p className="text-sm text-muted-foreground">Call or text to schedule, typically within 24 hours</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Focused Inspection</h3>
            <p className="text-sm text-muted-foreground">1-2 hour assessment of the four critical systems</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Documentation</h3>
            <p className="text-sm text-muted-foreground">Professional photos and condition assessment</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Fast Report</h3>
            <p className="text-sm text-muted-foreground">Insurance-ready report delivered within 24 hours</p>
          </div>
        </div>
      </section>

      {/* Combination Services */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Maximize Your Savings with Combination Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">4-Point + Wind Mitigation</h3>
            <p className="text-muted-foreground mb-4">
              Schedule both inspections together for maximum convenience and insurance savings. 
              One visit, two reports, comprehensive coverage.
            </p>
            <Link href="/services/wind-mitigation" className="text-primary hover:underline">
              Learn about Wind Mitigation →
            </Link>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">4-Point + Full Inspection</h3>
            <p className="text-muted-foreground mb-4">
              Upgrade to a comprehensive home inspection for complete peace of mind. 
              Perfect for buyers who need both insurance compliance and full property assessment.
            </p>
            <Link href="/services/home-inspection" className="text-primary hover:underline">
              Learn about Home Inspections →
            </Link>
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

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions About 4-Point Inspections
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
          Ready to Schedule Your 4-Point Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't let insurance requirements catch you off guard. Get your 4-Point Inspection completed quickly 
          with same-day reports that meet all Florida insurance company standards.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90"
            aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
          >
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={`sms:${PHONE_E164}`}
            className="px-8 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5"
          >
            Text to Schedule Today
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Usually available within 24 hours • Same-day reports • All insurers accepted
        </p>
      </section>

      <footer className="mt-20 text-center text-sm text-muted-foreground space-y-2">
        <p>Florida License HI3589 • State Contractor CRC1328070 • Radon License R2355</p>
        <p>National Association of Home Inspectors NACHI10122704 • Serving Southwest Florida since 2020</p>
      </footer>
    </main>
  )
}
