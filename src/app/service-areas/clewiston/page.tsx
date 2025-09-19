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
  title: "Clewiston FL Home Inspector | Wind Mitigation & 4-Point Inspections | Mayne Home Inspectors",
  description:
    "Professional home inspections in Clewiston, FL since 2020. Wind Mitigation (OIR-B1-1802), 4-Point inspections. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/clewiston" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/clewiston",
    title: "Clewiston Home Inspector | Wind Mitigation & Insurance Inspections",
    description:
      "Local Clewiston home inspector since 2020. Fast scheduling, detailed reports, wind mitigation for insurance discounts. Licensed HI3589.",
    images: [{ url: "/images/og/clewiston-flag-sugar-town.jpg", width: 1200, height: 630, alt: "Home inspector in Clewiston, Florida examining property" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clewiston FL Home Inspector | Mayne Home Inspectors",
    description: "Professional home inspections in Clewiston since 2020. Same-day reports available.",
    images: ["/images/og/clewiston-flag-sugar-town.jpg"],
  },
}

const faqs = [
  { 
    q: "Do you provide wind mitigation inspections for Clewiston homeowners?", 
    a: "Yes, we complete the official OIR-B1-1802 wind mitigation form with detailed labeled photos so your insurance company can apply wind credits and premium discounts. This is especially important for Clewiston homes given our location in hurricane-prone South Florida." 
  },
  { 
    q: "How quickly can you schedule a home inspection in Clewiston?", 
    a: "We typically schedule inspections within 24 hours in Clewiston and throughout Hendry County. Call or text us and we'll get you on the calendar quickly, often with same-day report delivery." 
  },
  {
    q: "What areas around Clewiston do you serve?",
    a: "We serve all of Clewiston including Sugarland, Harlem, downtown Clewiston near Lake Okeechobee, and extend to surrounding areas like Moore Haven, Pahokee, and throughout Hendry and Glades counties."
  },
  {
    q: "What are common home issues found in Clewiston properties?",
    a: "In Clewiston, we commonly find issues related to our location near Lake Okeechobee including moisture problems, foundation settling in sandy soil, roof damage from storms, older electrical systems, and HVAC efficiency concerns in our humid subtropical climate."
  },
  {
    q: "Do you inspect older homes and historical properties in Clewiston?",
    a: "Absolutely. Clewiston has many homes from different eras, and we're experienced with older construction methods, historical properties, and the unique challenges of homes built in different decades throughout the area's development."
  }
]

const testimonials = [
  {
    name: "James T.",
    location: "Clewiston",
    text: "Great service for our lake home purchase. The inspector knew exactly what to look for in our area and found some moisture issues we never would have noticed. Very professional."
  },
  {
    name: "Maria S.",
    location: "Sugarland, Clewiston",
    text: "Needed a 4-point inspection for insurance on our older home. Quick scheduling, thorough work, and helped us understand what needed attention. Highly recommend!"
  },
  {
    name: "David R.",
    location: "Clewiston",
    text: "Fair pricing and excellent communication. The wind mitigation inspection helped us save significantly on insurance premiums. Will definitely use again."
  }
]

export default function ClewistonPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/clewiston",
    "name": BRAND,
    "image": "https://mayneinspectors.com/images/og/clewiston-flag-sugar-town.jpg",
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
      "latitude": "26.7542", // Clewiston coordinates
      "longitude": "-80.9338"
    },
    "url": "https://mayneinspectors.com",
    "sameAs": [
      "https://www.facebook.com/mayneinspectors", // Add your actual social media
      "https://www.linkedin.com/company/mayneinspectors"
    ],
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Clewiston, FL",
      "Sugarland, FL",
      "Harlem, FL",
      "Moore Haven, FL",
      "Pahokee, FL",
      "Hendry County, FL",
      "Glades County, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "Wind Mitigation Inspection", 
      "4-Point Inspection",
      "Radon Testing",
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
        "name": "Clewiston",
        "item": "https://mayneinspectors.com/service-areas/clewiston"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-clewiston-faq" type="application/ld+json">
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
          <li className="text-foreground">Clewiston</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Clewiston, FL Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional home inspections serving Clewiston, Sugarland, and Lake Okeechobee area since 2020. 
          Detailed reports, wind mitigation for insurance savings, and expertise with historical properties — with reliable service.
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
            src="/images/og/clewiston-flag-sugar-town.jpg" 
            alt="Professional home inspector examining a Clewiston Florida property near Lake Okeechobee for wind mitigation and structural issues" 
            fill 
            className="object-cover" 
            sizes="(min-width: 768px) 768px, 100vw" 
          />
        </div>
      </section>

      {/* Enhanced Service Description */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Trusted Home Inspections in America's Sweetest Town
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Known as "America's Sweetest Town" for its sugar industry heritage, Clewiston sits on the southern shore 
            of Lake Okeechobee and presents unique inspection challenges that require local expertise. Since 2020, 
            we've been helping homeowners navigate the diverse housing stock in Clewiston, from historic downtown 
            properties to newer developments in Sugarland and surrounding rural areas.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Our location near Lake Okeechobee means homes face specific environmental factors including high humidity, 
            potential flooding concerns, sandy soil conditions, and the effects of our subtropical climate. We understand 
            these regional challenges and tailor our inspections accordingly, whether you're buying a charming historic 
            home near downtown, a lakefront property, or a rural residence in the agricultural areas surrounding town.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            From the established neighborhoods near the sugar mill to newer construction throughout Hendry County, 
            we provide thorough, honest assessments that help you understand your property's condition and make 
            informed decisions about your Clewiston area investment.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Popular Services in Clewiston</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/home-inspection" className="text-primary hover:underline">
                  Complete Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive evaluation tailored to Clewiston's unique environmental factors 
                and diverse housing from historic to modern construction.
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
                Essential for Clewiston homeowners in hurricane-prone South Florida.
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
                Often required for insurance on older Clewiston area properties.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/historical-inspection" className="text-primary hover:underline">
                  Historical Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Specialized inspections for Clewiston's historic properties with 
                understanding of period construction methods and materials.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Clewiston Homeowners Choose Us</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Local Area Expertise</p>
                <p className="text-sm text-muted-foreground">Deep knowledge of Lake Okeechobee area challenges</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Fast Service</p>
                <p className="text-sm text-muted-foreground">24-hour scheduling with same-day reports available</p>
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
                <p className="font-medium">Historical Property Experience</p>
                <p className="text-sm text-muted-foreground">Expertise with older and historic construction methods</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Environmental Awareness</p>
                <p className="text-sm text-muted-foreground">Understanding of moisture, soil, and climate impacts</p>
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
        <h2 className="text-2xl font-semibold text-center mb-8">Areas We Serve Around Clewiston</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Downtown Clewiston",
            "Sugarland", 
            "Harlem",
            "Lake Okeechobee Area",
            "Moore Haven",
            "Pahokee",
            "Hendry County",
            "Glades County",
            "Rural Agricultural Areas"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local Challenges Section */}
      <section className="mt-16 bg-muted/30 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Common Clewiston Area Home Challenges We Address
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="font-semibold">Moisture Issues</h3>
            <p className="text-sm text-muted-foreground mt-2">High humidity and lake proximity effects on homes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-semibold">Foundation Settling</h3>
            <p className="text-sm text-muted-foreground mt-2">Sandy soil conditions and structural implications</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold">Storm Damage</h3>
            <p className="text-sm text-muted-foreground mt-2">Hurricane and severe weather impact assessments</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold">Older Electrical</h3>
            <p className="text-sm text-muted-foreground mt-2">Historic home electrical system evaluations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="font-semibold">HVAC Efficiency</h3>
            <p className="text-sm text-muted-foreground mt-2">Climate control system performance in humid conditions</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold">Historic Preservation</h3>
            <p className="text-sm text-muted-foreground mt-2">Maintaining character while ensuring safety and function</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Clewiston Customers Say</h2>
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
          Frequently Asked Questions - Clewiston Home Inspections
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
          Ready to Schedule Your Clewiston Home Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get professional inspection services in America's Sweetest Town and throughout the Lake Okeechobee area. 
          Local expertise, fast scheduling, and all insurance forms completed properly.
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
        <p>Florida License HI3589 • Radon License R2355 • Serving Clewiston since 2020</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}