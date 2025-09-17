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
  title: "Moore Haven FL Home Inspector | Wind Mitigation & 4-Point Inspections | Mayne Home Inspectors",
  description:
    "Professional home inspections in Moore Haven, FL since 2020. Same-day reports, Wind Mitigation (OIR-B1-1802), 4-Point inspections. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/moore-haven" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/moore-haven",
    title: "Moore Haven Home Inspector | Wind Mitigation & Insurance Inspections",
    description:
      "Local Moore Haven home inspector since 2020. Fast scheduling, detailed reports, wind mitigation for insurance discounts. Licensed HI3589.",
    images: [{ url: "/images/og/service-area.jpg", width: 1200, height: 630, alt: "Home inspector in Moore Haven, Florida examining property" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moore Haven FL Home Inspector | Mayne Home Inspectors",
    description: "Professional home inspections in Moore Haven since 2020. Same-day reports available.",
    images: ["/images/og/service-area.jpg"],
  },
}

const faqs = [
  { 
    q: "Do you provide wind mitigation inspections for Moore Haven homeowners?", 
    a: "Absolutely. We complete the official OIR-B1-1802 wind mitigation form with detailed labeled photos so your insurance company can apply wind credits and premium discounts. This is crucial for Moore Haven homes given our location in hurricane-prone South Florida." 
  },
  { 
    q: "How quickly can you schedule a home inspection in Moore Haven?", 
    a: "We typically schedule inspections within 24 hours in Moore Haven and throughout Glades County. Call or text us and we'll get you on the calendar quickly, often with same-day report delivery." 
  },
  {
    q: "What areas around Moore Haven do you serve?",
    a: "We serve all of Moore Haven including the historic downtown area, Caloosahatchee River waterfront properties, and extend to surrounding areas like Clewiston, Buckhead Ridge, and throughout Glades and Hendry counties."
  },
  {
    q: "What are common home issues found in Moore Haven properties?",
    a: "In Moore Haven, we commonly find issues related to our riverfront location including moisture problems from high humidity, older electrical systems in historic homes, foundation concerns in sandy soil, roof damage from storms, and HVAC challenges in our subtropical climate."
  },
  {
    q: "Do you inspect waterfront and historic homes in Moore Haven?",
    a: "Yes, we specialize in both waterfront properties along the Caloosahatchee River and historic homes throughout Moore Haven's downtown area. We understand the unique challenges these property types face in our area."
  }
]

const testimonials = [
  {
    name: "Patricia L.",
    location: "Moore Haven",
    text: "Excellent work on our historic downtown home inspection. Found issues we never would have seen and explained everything clearly. Very knowledgeable about older construction."
  },
  {
    name: "Robert C.",
    location: "Moore Haven",
    text: "Fast service for our riverfront property inspection. The inspector understood the unique challenges of waterfront homes and was thorough in checking for moisture issues."
  },
  {
    name: "Sandra K.",
    location: "Moore Haven",
    text: "Professional service and fair pricing. The wind mitigation inspection saved us hundreds on insurance. Highly recommend for anyone in the Moore Haven area."
  }
]

export default function MooreHavenPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/moore-haven",
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
      "latitude": "26.8339", // Moore Haven coordinates
      "longitude": "-81.0931"
    },
    "url": "https://mayneinspectors.com",
    "sameAs": [
      "https://www.facebook.com/mayneinspectors", // Add your actual social media
      "https://www.linkedin.com/company/mayneinspectors"
    ],
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Moore Haven, FL",
      "Clewiston, FL",
      "Buckhead Ridge, FL",
      "Lakeport, FL",
      "Glades County, FL",
      "Hendry County, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "Wind Mitigation Inspection", 
      "4-Point Inspection",
      "Radon Testing",
      "Waterfront Home Inspection",
      "Historical Home Inspection"
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
        "name": "Moore Haven",
        "item": "https://mayneinspectors.com/service-areas/moore-haven"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-moorehaven-faq" type="application/ld+json">
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
          <li className="text-foreground">Moore Haven</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Moore Haven, FL Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional home inspections serving Moore Haven, the Glades County seat, and Caloosahatchee River area since 2020. 
          Specialized in waterfront properties, historic homes, and wind mitigation — with reliable local service.
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
            alt="Professional home inspector examining a Moore Haven Florida waterfront property along the Caloosahatchee River for wind mitigation and structural issues" 
            fill 
            className="object-cover" 
            sizes="(min-width: 768px) 768px, 100vw" 
          />
        </div>
      </section>

      {/* Enhanced Service Description */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Trusted Home Inspections in the Heart of the Glades
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            As the county seat of Glades County, Moore Haven holds a special place along the Caloosahatchee River 
            with a rich history dating back to the early 1900s. Since 2020, we've been helping homeowners navigate 
            the unique challenges of properties in this historic river town, from charming downtown homes to 
            waterfront properties along the scenic Caloosahatchee.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Moore Haven's location along the river and connection to Lake Okeechobee creates specific environmental 
            factors that affect homes including high humidity, potential flooding concerns, and the unique challenges 
            of waterfront living. Our inspections are tailored to these regional considerations, whether you're 
            buying a historic downtown property, a riverfront home, or a rural residence in the surrounding area.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            From the established neighborhoods near the courthouse to waterfront properties with boat access, 
            we provide thorough inspections that help you understand your property's condition and make informed 
            decisions about your Moore Haven area investment. Our local knowledge spans both the historic character 
            of the town and the practical realities of living in South Florida's unique environment.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Popular Services in Moore Haven</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/home-inspection" className="text-primary hover:underline">
                  Complete Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive evaluation tailored to Moore Haven's riverfront location 
                and historic property considerations.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/waterfront-inspection" className="text-primary hover:underline">
                  Waterfront Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Specialized inspections for Caloosahatchee River properties with focus 
                on moisture, marine structures, and water access features.
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
                Essential for Moore Haven homeowners in hurricane-prone South Florida.
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
                Often required for insurance on older Moore Haven properties.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Moore Haven Homeowners Choose Us</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Waterfront Expertise</p>
                <p className="text-sm text-muted-foreground">Specialized knowledge of riverfront property challenges</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Historic Property Experience</p>
                <p className="text-sm text-muted-foreground">Understanding of older construction and preservation needs</p>
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
                <p className="font-medium">Local Knowledge</p>
                <p className="text-sm text-muted-foreground">10+ years serving Glades County communities</p>
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
        <h2 className="text-2xl font-semibold text-center mb-8">Areas We Serve Around Moore Haven</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Downtown Moore Haven",
            "Caloosahatchee River Waterfront", 
            "Buckhead Ridge",
            "Lakeport",
            "Clewiston",
            "All of Glades County",
            "Hendry County",
            "Rural Areas",
            "Riverfront Communities"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Property Types & Challenges Section */}
      <section className="mt-16 bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Moore Haven Property Types & Common Challenges
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold">Waterfront Properties</h3>
            <p className="text-sm text-muted-foreground mt-2">River access homes with unique marine and moisture considerations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold">Historic Downtown Homes</h3>
            <p className="text-sm text-muted-foreground mt-2">Early 1900s construction with period-specific challenges</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="font-semibold">Moisture Management</h3>
            <p className="text-sm text-muted-foreground mt-2">River proximity and humidity impact on structures</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold">Storm Resilience</h3>
            <p className="text-sm text-muted-foreground mt-2">Hurricane preparedness and wind damage assessment</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-semibold">Foundation Concerns</h3>
            <p className="text-sm text-muted-foreground mt-2">Sandy soil and water table effects on foundations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold">Marine Structures</h3>
            <p className="text-sm text-muted-foreground mt-2">Docks, seawalls, and water access infrastructure</p>
          </div>
        </div>
      </section>

      {/* Local History & Character */}
      <section className="mt-16">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Moore Haven: Where History Meets the River
          </h2>
          <div className="max-w-3xl mx-auto text-center text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Established in the early 1900s along the scenic Caloosahatchee River, Moore Haven serves as 
              the county seat of Glades County. This historic river town combines small-town charm with 
              waterfront living, creating unique opportunities and challenges for homeowners.
            </p>
            <p className="mt-4 leading-relaxed">
              From historic downtown buildings to modern riverfront homes, Moore Haven's diverse housing 
              stock requires specialized inspection knowledge. Our local expertise helps ensure your property 
              investment is protected whether you're drawn to the town's rich history or its natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Moore Haven Customers Say</h2>
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
          Frequently Asked Questions - Moore Haven Home Inspections
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
          Ready to Schedule Your Moore Haven Home Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get professional inspection services in historic Moore Haven and throughout the Caloosahatchee River area. 
          Waterfront expertise, historic property knowledge, and all insurance forms completed properly.
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
        <p>Florida License HI3589 • Radon License R2355 • Serving Moore Haven since 2020</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}