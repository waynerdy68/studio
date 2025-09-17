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
  title: "Lehigh Acres FL Home Inspector | Wind Mitigation & 4-Point Inspections | Mayne Home Inspectors",
  description:
    "Professional home inspections in Lehigh Acres, FL since 2020. Wind Mitigation (OIR-B1-1802), 4-Point inspections. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/lehigh-acres" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/lehigh-acres",
    title: "Lehigh Acres Home Inspector | Wind Mitigation & Insurance Inspections",
    description:
      "Local Lehigh Acres home inspector since 2020. Fast scheduling, detailed reports, wind mitigation for insurance discounts. Licensed HI3589.",
    images: [{ url: "/images/og/service-area.jpg", width: 1200, height: 630, alt: "Home inspector in Lehigh Acres, Florida examining property" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lehigh Acres FL Home Inspector | Mayne Home Inspectors",
    description: "Professional home inspections in Lehigh Acres since 2020. Same-day reports available.",
    images: ["/images/og/service-area.jpg"],
  },
}

const faqs = [
  { 
    q: "Do you provide wind mitigation inspections for Lehigh Acres homeowners?", 
    a: "Absolutely. We complete the official OIR-B1-1802 wind mitigation form with detailed labeled photos so your insurance company can apply proper wind credits and premium discounts to your policy." 
  },
  { 
    q: "How fast can you schedule a home inspection in Lehigh Acres?", 
    a: "We typically schedule inspections within 24 hours throughout Lehigh Acres and Lee County. Call or text us and we'll get you on the calendar quickly, often with same-day report delivery." 
  },
  {
    q: "What neighborhoods in Lehigh Acres do you serve?",
    a: "We serve all areas of Lehigh Acres including Harlem Heights, Village Lakes, Greenbriar, Joel Boulevard corridor, and extend to surrounding areas like Gateway, Estero, and throughout Lee County."
  },
  {
    q: "What are common home issues found in Lehigh Acres properties?",
    a: "In Lehigh Acres, we commonly find issues related to Florida's weather including roof damage from storms, HVAC efficiency problems, moisture intrusion, electrical updates needed in older developments, and foundation settling in sandy soils."
  },
  {
    q: "Do you inspect mobile homes and manufactured homes in Lehigh Acres?",
    a: "Yes, we perform inspections on all types of properties in Lehigh Acres including mobile homes, manufactured homes, single-family homes, and condos. Each inspection is tailored to the specific property type."
  }
]

const testimonials = [
  {
    name: "Michael D.",
    location: "Harlem Heights, Lehigh Acres",
    text: "Excellent service! The inspector was thorough and found several issues that saved me from costly repairs later. Report was delivered same day as promised."
  },
  {
    name: "Lisa R.",
    location: "Village Lakes, Lehigh Acres",
    text: "Needed wind mitigation for my new home insurance. Professional, punctual, and helped me save over $500 annually on premiums. Great value!"
  },
  {
    name: "Carlos M.",
    location: "Lehigh Acres",
    text: "Fair pricing, detailed report, and excellent communication throughout the process. Highly recommend for anyone buying in Lehigh Acres area."
  }
]

export default function LehighAcresPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/lehigh-acres",
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
      "latitude": "26.6258", // Lehigh Acres coordinates
      "longitude": "-81.6248"
    },
    "url": "https://mayneinspectors.com",
    "sameAs": [
      "https://www.facebook.com/mayneinspectors", // Add your actual social media
      "https://www.linkedin.com/company/mayneinspectors"
    ],
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Lehigh Acres, FL",
      "Harlem Heights, FL",
      "Village Lakes, FL",
      "Greenbriar, FL",
      "Gateway, FL",
      "Estero, FL",
      "Lee County, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "Wind Mitigation Inspection", 
      "4-Point Inspection",
      "Radon Testing",
      "Mobile Home Inspection"
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
        "name": "Lehigh Acres",
        "item": "https://mayneinspectors.com/service-areas/lehigh-acres"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-lehigh-faq" type="application/ld+json">
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
          <li className="text-foreground">Lehigh Acres</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Lehigh Acres, FL Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional home inspections serving Lehigh Acres, Harlem Heights, Village Lakes, and Lee County since 2020. 
          Comprehensive reports, wind mitigation for insurance savings, and mobile home inspections — with fast turnaround.
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
            alt="Professional home inspector examining a Lehigh Acres Florida property for wind mitigation and structural issues" 
            fill 
            className="object-cover" 
            sizes="(min-width: 768px) 768px, 100vw" 
          />
        </div>
      </section>

      {/* Enhanced Service Description */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Trusted Home Inspections Throughout Lehigh Acres
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            As one of Lee County's largest unincorporated communities, Lehigh Acres presents unique inspection 
            challenges that require local expertise. Since 2020, we've been helping homeowners navigate the 
            diverse housing stock in Lehigh Acres, from newer developments in Harlem Heights and Village Lakes 
            to established neighborhoods throughout the community.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Our comprehensive inspections cover all property types common in Lehigh Acres, including single-family homes, 
            mobile homes, manufactured housing, and condos. We understand the specific concerns of Southwest Florida 
            living — from hurricane preparedness and wind mitigation to moisture management and HVAC efficiency 
            in our subtropical climate.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Whether you're buying your first home along Joel Boulevard, upgrading to a larger property in one of 
            the newer subdivisions, or need insurance-required inspections, we provide detailed, honest assessments 
            that help you make confident decisions about your Lehigh Acres property investment.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Popular Services in Lehigh Acres</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/home-inspection" className="text-primary hover:underline">
                  Complete Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive evaluation of all home systems. Essential for buyers and sellers in 
                Lehigh Acres' diverse housing market.
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
                Critical for Lehigh Acres homeowners in hurricane-prone Southwest Florida.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/4-point-inspection" className="text-primary hover:underline">
                  4-Point Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Focused inspection of roof, electrical, plumbing, and HVAC. 
                Often required for insurance on older Lehigh Acres properties.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/mobile-home-inspection" className="text-primary hover:underline">
                  Mobile Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Specialized inspections for mobile and manufactured homes. 
                Tailored to the unique needs of these property types in Lehigh Acres.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Lehigh Acres Homeowners Choose Us</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">24 hour Reports</p>
                <p className="text-sm text-muted-foreground">Sasme day turnaround for time-sensitive transactions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Licensed & Insured</p>
                <p className="text-sm text-muted-foreground">Florida HI3589 • Radon R2355</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Local Market Knowledge</p>
                <p className="text-sm text-muted-foreground">10+ years in Lee County and Southwest Florida</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">All Property Types</p>
                <p className="text-sm text-muted-foreground">Homes, condos, mobile homes, manufactured housing</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Insurance Ready</p>
                <p className="text-sm text-muted-foreground">All forms completed for maximum discounts</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Fair & Honest</p>
                <p className="text-sm text-muted-foreground">No scare tactics, just professional assessments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Lehigh Acres Neighborhoods We Serve</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Harlem Heights",
            "Village Lakes", 
            "Greenbriar",
            "Joel Boulevard Area",
            "Lee Boulevard Corridor",
            "Lehigh Acres Boulevard",
            "Gateway",
            "Estero",
            "All of Lee County"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Property Types Section */}
      <section className="mt-16 bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          We Inspect All Property Types in Lehigh Acres
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-semibold">Single-Family Homes</h3>
            <p className="text-sm text-muted-foreground mt-2">Traditional homes throughout all Lehigh Acres neighborhoods</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold">Condominiums</h3>
            <p className="text-sm text-muted-foreground mt-2">Condo inspections with focus on individual unit systems</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14h8" />
              </svg>
            </div>
            <h3 className="font-semibold">Mobile Homes</h3>
            <p className="text-sm text-muted-foreground mt-2">Specialized mobile home inspections with proper protocols</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-semibold">Manufactured Homes</h3>
            <p className="text-sm text-muted-foreground mt-2">Complete manufactured home evaluations and assessments</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Lehigh Acres Customers Say</h2>
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
          Frequently Asked Questions - Lehigh Acres Home Inspections
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
          Ready to Schedule Your Lehigh Acres Home Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get professional inspection services throughout Lehigh Acres and Lee County. 
          Fast scheduling, detailed reports, and all insurance forms completed properly.
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
        <p>Florida License HI3589 • Radon License R2355 • Serving Lehigh Acres since 2020</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}