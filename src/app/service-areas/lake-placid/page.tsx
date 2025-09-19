
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const BUSINESS_ADDRESS = "LaBelle, FL 33935"
const EMAIL = "castenhome@gmail.com"

export const metadata: Metadata = {
  title: "Lake Placid FL Home Inspector | Lakefront & Inland Homes | Mayne Home Inspectors",
  description:
    "Trusted home inspections in Lake Placid, FL. Specializing in lakefront properties, older homes, and manufactured homes. Wind Mitigation, 4-Point. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/lake-placid" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/lake-placid",
    title: "Lake Placid Home Inspector | Lakefront & Inland Inspections",
    description:
      "Local Lake Placid home inspector. Fast scheduling and detailed reports for lakefront homes, golf course properties, and more. Licensed HI3589.",
    images: [{ url: "/images/og/lake-placid-bank-commercial-inspection.jpg", width: 1200, height: 630, alt: "Home inspector at a lakefront property in Lake Placid, Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lake Placid FL Home Inspector | Mayne Home Inspectors",
    description: "Professional home inspections in Lake Placid. Lakefront and inland specialist.",
    images: ["/images/og/lake-placid-bank-commercial-inspection.jpg"],
  },
}

const faqs = [
  {
    q: "Do you inspect homes on the freshwater lakes in Lake Placid?",
    a: "Yes, we have extensive experience with lakefront properties in Lake Placid. Our inspections include a visual assessment of docks, seawalls, and boat lifts, and we pay special attention to issues related to moisture and the unique environment of lakeside living."
  },
  {
    q: "How quickly can you schedule an inspection in Lake Placid or Sebring?",
    a: "We can typically schedule an inspection in Lake Placid and the surrounding Highlands County area within 24-48 hours. We understand the need for timely service and provide fast, detailed reports."
  },
  {
    q: "What are common issues you find in Lake Placid homes?",
    a: "In Lake Placid, common issues include older plumbing and electrical systems in homes built from the 50s-70s, moisture-related problems in lakefront properties, roof condition due to Florida's weather, and specific considerations for manufactured homes, which are common in the area."
  },
  {
    q: "Do you offer insurance inspections like Wind Mitigation in Lake Placid?",
    a: "Absolutely. We provide both Wind Mitigation (OIR-B1-1802) and 4-Point Inspections, which are essential for homeowners in Lake Placid to obtain and save money on their insurance."
  }
]

const testimonials = [
  {
    name: "George K.",
    location: "Lake Placid",
    text: "The inspector was extremely thorough on our lake house. He checked the dock and retaining wall carefully and found a few things we needed to address. The report was easy to follow. Great local service."
  },
  {
    name: "Linda H.",
    location: "Sebring",
    text: "Needed a 4-Point and Wind Mitigation for my parents' older home. The inspector was patient, professional, and explained everything clearly. The reports helped us get the insurance sorted out without a hitch."
  },
  {
    name: "Robert P.",
    location: "Lake Placid",
    text: "Honest and reliable service. The inspector used a drone to get a good look at our steep roof, which was impressive. We felt much more confident about our purchase after his inspection."
  }
]

export default function LakePlacidPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mayneinspectors.com/service-areas/lake-placid",
    "name": BRAND,
    "image": "https://mayneinspectors.com/images/og/lake-placid-bank-commercial-inspection.jpg",
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
      "latitude": "27.2959",
      "longitude": "-81.3637"
    },
    "url": "https://mayneinspectors.com",
    "sameAs": [
      "https://www.facebook.com/mayneinspectors",
      "https://www.linkedin.com/company/mayneinspectors"
    ],
    "priceRange": "$$",
    "foundingDate": "2020",
    "areaServed": [
      "Lake Placid, FL",
      "Sebring, FL",
      "Avon Park, FL",
      "Lorida, FL",
      "Venus, FL",
      "Highlands County, FL"
    ],
    "serviceType": [
      "Home Inspection",
      "Lakefront Property Inspection",
      "Manufactured Home Inspection",
      "Wind Mitigation Inspection",
      "4-Point Inspection"
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
        "name": "Lake Placid",
        "item": "https://mayneinspectors.com/service-areas/lake-placid"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-lake-placid-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>
      <Script id="ldjson-local-business" type="application/ld+json">
        {JSON.stringify(localBusinessLd)}
      </Script>
      <Script id="ldjson-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbLd)}
      </Script>

      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-muted-foreground">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>→</li>
          <li><Link href="/service-areas" className="hover:text-primary">Service Areas</Link></li>
          <li>→</li>
          <li className="text-foreground">Lake Placid</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Lake Placid, FL Home Inspector
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your trusted inspector for lakefront, golf course, and inland properties in Lake Placid, Sebring, and Highlands County. We provide thorough, reliable inspections with same-day reports.
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
            src="/images/og/lake-placid-bank-commercial-inspection.jpg"
            alt="A beautiful lakefront home in Lake Placid, Florida, awaiting inspection"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Local Expertise for the "Town of Murals"
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Lake Placid, known for its beautiful freshwater lakes and charming murals, offers a diverse range of properties that require a knowledgeable inspector. From historic homes in the town center to modern lakefront estates and manufactured homes in quiet communities, we understand the specific needs of properties in Highlands County.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Our inspections are tailored to address common local concerns, including issues related to lakeside living, older construction, and the specific requirements for manufactured housing. We provide the detailed information you need to confidently invest in the unique lifestyle that Lake Placid and the surrounding areas like Sebring and Avon Park offer.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Key Services for Lake Placid</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/home-inspection" className="text-primary hover:underline">
                  Lakefront Property Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Specialized inspection for homes on Lake Istokpoga, Lake June in Winter, and other area lakes, including visual checks of docks and seawalls.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/mobile-home-inspection" className="text-primary hover:underline">
                  Manufactured Home Inspection
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Expert assessment of manufactured and mobile homes, focusing on tie-downs, foundations, and specific systems common in these properties.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                <Link href="/services/wind-mitigation" className="text-primary hover:underline">
                  Wind Mitigation & 4-Point
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Essential insurance inspections to help you secure coverage and save money on your premiums in Highlands County.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us for Your Inspection</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Highlands County Knowledge</p>
                <p className="text-sm text-muted-foreground">We understand the local building practices and environmental factors.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">All Property Types</p>
                <p className="text-sm text-muted-foreground">Expertise in site-built, lakefront, and manufactured homes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Fast, 24-Hour Reports</p>
                <p className="text-sm text-muted-foreground">Get the information you need quickly to make timely decisions.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Licensed & Certified</p>
                <p className="text-sm text-muted-foreground">Florida HI3589 • Radon R2355</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Serving Lake Placid and Beyond</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Lake Placid",
            "Sebring",
            "Avon Park",
            "Lorida",
            "Venus",
            "Sun 'n Lake",
            "Highlands Park Estates",
            "Placid Lakes",
            "All of Highlands County"
          ].map(area => (
            <div key={area} className="text-center p-4 rounded-lg border">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Lake Placid Area Customers Say</h2>
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

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions - Lake Placid Inspections
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

      <section className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Schedule Your Lake Placid Inspection?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether it's a lakefront retreat, a golf course home, or your first house, get the peace of mind you deserve. Call or text for fast, expert service.
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
        <p>Florida License HI3589 • Radon License R2355 • Serving Highlands County</p>
        <p>{BUSINESS_ADDRESS} • {PHONE_DISPLAY}</p>
      </footer>
    </main>
  )
}

    