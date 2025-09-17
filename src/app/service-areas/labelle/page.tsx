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
  title: "LaBelle FL Home Inspector | Wind Mitigation & 4-Point Inspections | Mayne Home Inspectors",
  description:
    "Professional home inspections in LaBelle, FL since 2020. Same-day reports, Wind Mitigation (OIR-B1-1802), 4-Point inspections. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/labelle" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/labelle",
    title: "LaBelle Home Inspector | Wind Mitigation & Insurance Inspections",
    description:
      "Local LaBelle home inspector since 2020. Fast scheduling, detailed reports, wind mitigation for insurance discounts. Licensed HI3589.",
    images: [{ url: "/images/og/service-area.jpg", width: 1200, height: 630, alt: "Home inspector in LaBelle, Florida examining property" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaBelle FL Home Inspector | Mayne Home Inspectors",
    description: "Professional home inspections in LaBelle since 2013. Same-day reports available.",
    images: ["/images/og/service-area.jpg"],
  },
}

const faqs = [
  { 
    q: "Do you handle wind mitigation inspections for LaBelle insurance carriers?", 
    a: "Yes, we complete the official OIR-B1-1802 wind mitigation form with detailed labeled photos so your insurance company can properly apply wind credits and discounts to your premium." 
  },
  { 
    q: "How quickly can you schedule a home inspection in LaBelle?", 
    a: "We typically schedule inspections within 24 hours in LaBelle and surrounding Hendry County areas. Call or text us and we'll get you on the calendar as soon as possible." 
  },
  {
    q: "What areas of LaBelle do you serve?",
    a: "We serve all of LaBelle including Port LaBelle, downtown LaBelle, Caloosahatchee River area, and extend to nearby communities like Alva, Felda, and throughout Hendry County."
  },
  {
    q: "What common issues do you find in LaBelle homes?",
    a: "Common issues in our area include hurricane damage, moisture problems from our humid climate, electrical issues in older homes, and HVAC concerns. Our detailed reports help identify these issues early."
  }
]

const testimonials = [
  {
    name: "Sarah M.",
    location: "Port LaBelle",
    text: "Mike was incredibly thorough with our home inspection. The report was detailed and helped us negotiate repairs before closing. Highly recommend!"
  },
  {
    name: "Robert K.",
    location: "LaBelle",
    text: "Needed a wind mitigation inspection for insurance discounts. Got the report same day and saved $400/year on premiums. Professional service!"
  },
  {
    name: "Jennifer L.",
    location: "Downtown LaBelle",
    text: "Fast scheduling, fair pricing, and clear communication. The 4-point inspection was exactly what my insurance company needed."
  }
]

export default function LabellePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/labelle",
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
      "latitude": "26.7612", // LaBelle coordinates
      "longitude": "-81.4312"
    },
    "url": "https://mayneinspectors.com",
    "sameAs": [
      "https://www.facebook.com/mayneinspectors", // Add your actual social media
      "https://www.linkedin.com/company/mayneinspectors"
    ],
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "LaBelle, FL",
      "Port LaBelle, FL",
      "Hendry County, FL",
      "Alva, FL",
      "Felda, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "Wind Mitigation Inspection", 
      "4-Point Inspection",
      "Radon Testing"
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
        "name": "LaBelle",
        "item": "https://mayneinspectors.com/service-areas/labelle"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-labelle-faq" type="application/ld+json">
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
          <li className="text-foreground">LaBelle</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          LaBelle, FL Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional home inspections serving LaBelle, Port LaBelle, and Hendry County since 2020. 
          Get detailed reports, wind mitigation for insurance discounts, and 4-point inspections — often with same-day delivery.
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
            alt="Professional home inspector examining a LaBelle Florida property for wind mitigation and structural issues" 
            fill 
            className="object-cover" 
            sizes="(min-width: 768px) 768px, 100vw" 
          />
        </div>
      </section>

      {/* Enhanced Service Description */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Comprehensive Home Inspections in LaBelle
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            As a locally established home inspection company serving LaBelle and Hendry County since 2020, 
            we understand the unique challenges facing homeowners in Southwest Florida. From hurricane preparedness 
            to the effects of our humid subtropical climate, our inspections are tailored to identify issues 
            specific to our region.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Whether you're buying a home in downtown LaBelle, Port LaBelle, or anywhere along the beautiful 
            Caloosahatchee River, our detailed inspections give you the confidence to make informed decisions. 
            We also serve surrounding communities including Alva, Felda, and throughout Hendry County.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Popular Services in LaBelle</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/home-inspection" className="text-primary hover:underline">
                  Complete Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Thorough evaluation of structural, electrical, plumbing, HVAC, and safety systems. 
                Perfect for buyers and sellers in LaBelle area.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/wind-mitigation" className="text-primary hover:underline">
                  Wind Mitigation (OIR-B1-1802)
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Official wind mitigation inspection for insurance discounts. Can save LaBelle homeowners 
                hundreds per year on premiums.
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
                Required by many insurers for homes over 30 years old.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Why LaBelle Homeowners Choose Us</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Fast Turnaround</p>
                <p className="text-sm text-muted-foreground">24-hour reports standard</p>
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
                <p className="font-medium">Local Knowledge</p>
                <p className="text-sm text-muted-foreground">10+ years serving Hendry County area</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Clear Communication</p>
                <p className="text-sm text-muted-foreground">No scare tactics, just honest assessments</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Insurance Ready</p>
                <p className="text-sm text-muted-foreground">All forms completed properly for discounts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Areas We Serve Around LaBelle</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Downtown LaBelle",
            "Port LaBelle", 
            "Fort Denaud",
            "Alva",
            "Felda", 
            "Banyon Village"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What LaBelle Customers Say</h2>
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
          Frequently Asked Questions - LaBelle Home Inspections
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
          Ready to Schedule Your LaBelle Home Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get peace of mind with a thorough inspection from LaBelle's trusted home inspector. 
          Call or text today for fast scheduling and expert service.
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
        <p>Florida License HI3589 • Radon License R2355 • Serving LaBelle since 2020</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}
