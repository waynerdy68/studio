import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const BUSINESS_ADDRESS = "LaBelle, FL 33935" // Replace with actual address
const EMAIL = "castenhome@gmail.com" // Replace with actual email

export const metadata: Metadata = {
  title: "Immokalee FL Home Inspector | Wind Mitigation & 4-Point Inspections | Mayne Home Inspectors",
  description:
    "Professional home inspections in Immokalee, FL since 2020. Same-day reports, Wind Mitigation (OIR-B1-1802), 4-Point inspections. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/immokalee" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/immokalee",
    title: "Immokalee Home Inspector | Wind Mitigation & Insurance Inspections",
    description:
      "Local Immokalee home inspector since 2020. Fast scheduling, detailed reports, wind mitigation for insurance discounts. Licensed HI3589.",
    images: [{ url: "/images/og/service-area.jpg", width: 1200, height: 630, alt: "Home inspector in Immokalee, Florida examining property" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immokalee FL Home Inspector | Mayne Home Inspectors",
    description: "Professional home inspections in Immokalee since 2020. Same-day reports available.",
    images: ["/images/og/service-area.jpg"],
  },
}

const faqs = [
  { 
    q: "Do you provide wind mitigation inspections for Immokalee homeowners?", 
    a: "Yes, we complete the official OIR-B1-1802 wind mitigation form with detailed labeled photos so your insurance company can apply wind credits and premium discounts. This is especially important for Immokalee homes given our location in hurricane-prone Southwest Florida." 
  },
  { 
    q: "How quickly can you schedule a home inspection in Immokalee?", 
    a: "We typically schedule inspections within 24 hours throughout Immokalee and Collier County. Call or text us and we'll get you on the calendar quickly, often with same-day report delivery." 
  },
  {
    q: "What areas of Immokalee do you serve?",
    a: "We serve all of Immokalee including downtown, New Market Road area, Farm Worker Village, Eden Park, and extend to surrounding areas like Ave Maria, Orangetree, and throughout eastern Collier County."
  },
  {
    q: "What are common home issues found in Immokalee properties?",
    a: "In Immokalee, we commonly find issues related to our agricultural environment including moisture problems from irrigation systems, older electrical systems, roof damage from storms, foundation settling, and HVAC efficiency concerns in our humid subtropical climate."
  },
  {
    q: "Do you work with first-time homebuyers and affordable housing in Immokalee?",
    a: "Absolutely. We understand the importance of affordable housing in Immokalee and work with first-time buyers, providing clear, educational reports that help families make informed decisions about their home purchase."
  }
]

const testimonials = [
  {
    name: "Carlos M.",
    location: "Immokalee",
    text: "Excellent service for our family's first home purchase. The inspector explained everything clearly and helped us understand what to expect. Very professional and fair pricing."
  },
  {
    name: "Maria G.",
    location: "Eden Park, Immokalee",
    text: "Fast scheduling and thorough inspection. Found some issues we never would have noticed. The wind mitigation saved us money on insurance right away."
  },
  {
    name: "Robert L.",
    location: "Immokalee",
    text: "Professional service and clear communication. Understood the unique aspects of our area and provided a detailed report that was easy to understand."
  }
]

export default function ImmokaleeePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/immokalee",
    "name": BRAND,
    "image": "https://mayneinspectors.com/images/og/service-area.jpg",
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
      "latitude": "26.4187", // Immokalee coordinates
      "longitude": "-81.4176"
    },
    "url": "https://mayneinspectors.com",
    "sameAs": [
      "https://www.facebook.com/mayneinspectors", // Add your actual social media
      "https://www.linkedin.com/company/mayneinspectors"
    ],
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Immokalee, FL",
      "Ave Maria, FL",
      "Orangetree, FL",
      "Eden Park, FL",
      "Farm Worker Village, FL",
      "Eastern Collier County, FL",
      "Naples, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "Wind Mitigation Inspection", 
      "4-Point Inspection",
      "Radon Testing",
      "First-Time Buyer Consultation",
      "Affordable Housing Inspection"
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
        "name": "Immokalee",
        "item": "https://mayneinspectors.com/service-areas/immokalee"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-immokalee-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>
      <Script id="ldjson-local-business" type="application/ld+json">
        {JSON.stringify(localBusinessLd)}
      </Script>
      <Script id="ldjson-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbLd)}
      </Script>

      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-muted-foreground">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>→</li>
          <li><Link href="/service-areas" className="hover:text-primary">Service Areas</Link></li>
          <li>→</li>
          <li className="text-foreground">Immokalee</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Immokalee, FL Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional home inspections serving Immokalee, Southwest Florida's agricultural hub, since 2020. 
          Detailed reports, wind mitigation for insurance savings, and first-time buyer support — with reliable local service.
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
            src="/images/og/service-area.jpg" 
            alt="Professional home inspector examining an Immokalee Florida property in Southwest Florida's agricultural community for wind mitigation and structural issues" 
            fill 
            className="object-cover" 
            sizes="(min-width: 768px) 768px, 100vw" 
          />
        </div>
      </section>

      {/* Enhanced Service Description */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Trusted Home Inspections in Southwest Florida's Agricultural Heart
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            As Southwest Florida's agricultural hub, Immokalee is a vibrant, diverse community where farming heritage 
            meets modern growth. Since 2020, we've been helping families navigate home purchases in this unique area, 
            from established neighborhoods near downtown to newer developments like Ave Maria and growing communities 
            throughout eastern Collier County.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Immokalee's agricultural environment creates specific considerations for home inspections including effects 
            from irrigation systems, dust from farming operations, and the unique challenges of properties in rural 
            and semi-rural settings. Our inspections are tailored to these regional factors, whether you're buying 
            your first home in Eden Park, a property near the farming areas, or a residence in one of the newer developments.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We understand the importance of homeownership in Immokalee's community and work with first-time buyers, 
            families participating in affordable housing programs, and anyone looking to invest in this growing area. 
            Our goal is to provide clear, educational inspections that help you make informed decisions about your 
            Immokalee area property investment.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Popular Services in Immokalee</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/home-inspection" className="text-primary hover:underline">
                  Complete Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive evaluation tailored to Immokalee's agricultural environment 
                and diverse housing from affordable homes to new construction.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/first-time-buyer" className="text-primary hover:underline">
                  First-Time Buyer Consultation
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Educational inspections with clear explanations to help first-time buyers 
                understand their new home and what to expect.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/wind-mitigation" className="text-primary hover:underline">
                  Wind Mitigation (OIR-B1-1802)
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Official wind mitigation inspection for maximum insurance discounts. 
                Essential for Immokalee homeowners in hurricane-prone Southwest Florida.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/4-point-inspection" className="text-primary hover:underline">
                  4-Point Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Focused inspection of roof, electrical, plumbing, and HVAC systems. 
                Often required for insurance on older Immokalee properties.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Immokalee Homeowners Choose Us</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Community-Focused Service</p>
                <p className="text-sm text-muted-foreground">Understanding of local housing needs and first-time buyer support</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Agricultural Area Expertise</p>
                <p className="text-sm text-muted-foreground">Knowledge of farming environment effects on properties</p>
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
                <p className="font-medium">Fast Turnaround</p>
                <p className="text-sm text-muted-foreground">24-hour scheduling with same-day reports available</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Clear Communication</p>
                <p className="text-sm text-muted-foreground">Educational approach with easy-to-understand reports</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Insurance Ready</p>
                <p className="text-sm text-muted-foreground">All forms completed properly for maximum savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Areas We Serve Around Immokalee</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Downtown Immokalee",
            "Eden Park", 
            "Farm Worker Village",
            "New Market Road Area",
            "Ave Maria",
            "Orangetree",
            "Eastern Collier County",
            "Rural Communities",
            "Agricultural Areas"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agricultural Community Features */}
      <section className="mt-16 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Understanding Immokalee's Unique Environment
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="font-semibold">Agricultural Impact</h3>
            <p className="text-sm text-muted-foreground mt-2">Effects of farming operations, irrigation, and dust on properties</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="font-semibold">Climate Considerations</h3>
            <p className="text-sm text-muted-foreground mt-2">Subtropical humidity, seasonal weather patterns, and HVAC needs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold">Diverse Housing Stock</h3>
            <p className="text-sm text-muted-foreground mt-2">From affordable housing to new developments like Ave Maria</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="font-semibold">Community Support</h3>
            <p className="text-sm text-muted-foreground mt-2">First-time buyer education and affordable housing assistance</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold">Storm Preparedness</h3>
            <p className="text-sm text-muted-foreground mt-2">Hurricane readiness and wind mitigation in Southwest Florida</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold">Growth & Development</h3>
            <p className="text-sm text-muted-foreground mt-2">New construction standards and expanding community needs</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Immokalee Customers Say</h2>
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
          Frequently Asked Questions - Immokalee Home Inspections
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

      {/* Contact CTA */}
      <section className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Schedule Your Immokalee Home Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get professional inspection services in Immokalee and throughout Southwest Florida's agricultural heartland. 
          Community-focused service, first-time buyer support, and all insurance forms completed properly.
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
        <p>Florida License HI3589 • Radon License R2355 • Serving Immokalee since 2020</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}