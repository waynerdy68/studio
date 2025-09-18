
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const EMAIL = "castenhome@gmail.com"

export const metadata: Metadata = {
  title: "Radon Gas Testing Services | Southwest Florida | Mayne Home Inspectors",
  description:
    "Protect your family with professional radon testing. We use continuous 48-hour monitors for accurate results. Serving Southwest FL. Licensed R2355. Call (863) 843-0735.",
  alternates: { canonical: "/services/radon-testing" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/radon-testing",
    title: "Radon Gas Testing Services for SWFL Homeowners",
    description:
      "Identify and measure radon, a leading cause of lung cancer, with our certified 48-hour testing service. Same-day summary and clear reports.",
    images: [{ url: "/images/og/radon-testing.jpg", width: 1200, height: 630, alt: "Radon testing monitor in a Florida home" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radon Testing FL | Mayne Home Inspectors",
    description: "Protect your home from radon gas with our certified 48-hour continuous monitoring test.",
    images: ["/images/og/radon-testing.jpg"],
  },
}

const faqs = [
    {
        q: "What is radon and why is it dangerous?",
        a: "Radon is a naturally occurring radioactive gas that is invisible, odorless, and tasteless. It is the second leading cause of lung cancer in the United States. Since you can't see or smell it, testing is the only way to know the level of radon in your home."
    },
    {
        q: "How does the 48-hour radon test work?",
        a: "We place a continuous radon monitor in the lowest livable area of your home. This device takes hourly readings for a minimum of 48 hours to provide an accurate average concentration of radon gas, which is more reliable than a one-time charcoal test."
    },
    {
        q: "What is considered a high level of radon?",
        a: "The EPA recommends taking action to reduce radon levels if the result is 4.0 picoCuries per liter (pCi/L) or higher. Even levels between 2.0 and 3.9 pCi/L are worth considering for mitigation."
    },
    {
        q: "What do I need to do to prepare for a radon test?",
        a: "For an accurate test, it's important to maintain 'closed-house conditions.' This means keeping all windows and outside doors closed as much as possible for 12 hours before and during the 48-hour test period. Normal entry and exit are fine."
    },
    {
        q: "If high radon levels are found, what's next?",
        a: "If your home has high radon levels, we will recommend that you consult with a qualified and licensed radon mitigation professional. Radon mitigation systems are effective at reducing radon levels and can often be installed in a single day."
    },
    {
        q: "Can radon testing be done with my home inspection?",
        a: "Yes, radon testing is included in our Premium Inspection package and can be added to any other inspection. Scheduling them together is convenient and ensures you have all the information you need before closing."
    }
]

const testimonials = [
  {
    name: "Laura V.",
    location: "Cape Coral",
    text: "We added on the radon test to our home inspection for peace of mind. The inspector explained the process, and the report was very clear. Thankfully our levels were low, but it was worth knowing for sure."
  },
  {
    name: "Mark D.",
    location: "LaBelle",
    text: "The continuous monitor test was impressive. It showed how the radon levels changed over two days, which felt much more accurate than a simple canister test. Professional service all around."
  },
  {
    name: "Chris W.",
    location: "South Fort Myers",
    text: "Great communication and a straightforward process. The radon report was easy to understand, and the inspector was available to answer our questions about the EPA guidelines."
  }
]

const testingProcess = [
    {
        category: "Device Placement",
        items: [
            "A calibrated Continuous Radon Monitor (CRM) is placed",
            "Located in the lowest livable area of the home",
            "Placed away from drafts, vents, and direct sunlight"
        ]
    },
    {
        category: "48-Hour Monitoring",
        items: [
            "The device runs uninterrupted for at least 48 hours",
            "Hourly measurements of radon concentration are recorded",
            "Maintains closed-house conditions for accuracy"
        ]
    },
    {
        category: "Data Analysis",
        items: [
            "The device is retrieved after the testing period",
            "Data is downloaded and analyzed for an overall average",
            "Report generated with hourly readings and EPA guidelines"
        ]
    },
    {
        category: "Clear Reporting",
        items: [
            "Receive a same-day summary of the results",
            "Detailed PDF report with graphs and explanations",
            "Clear recommendations if mitigation is advised"
        ]
    }
]

export default function RadonTestingPage() {
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
    "@id": "https://mayneinspectors.com/services/radon-testing",
    "name": "Radon Gas Testing",
    "description": "Professional 48-hour continuous radon monitoring services in Southwest Florida to ensure a safe indoor environment.",
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
    "serviceType": "Radon Testing",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Radon Testing Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "48-Hour Continuous Radon Test"
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
        "item": "https://mayneinspectors.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Radon Testing",
        "item": "https://mayneinspectors.com/services/radon-testing"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-radon-faq" type="application/ld+json">
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
          <li className="text-foreground">Radon Testing</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Radon Gas Testing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Protect your family from the dangers of radon gas. Our 48-hour continuous monitoring provides accurate, reliable results to ensure your home's air is safe.
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
            Text to Schedule Your Test
          </a>
        </div>
      </section>

      <section className="mt-10">
        <div
          className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden"
          style={{ aspectRatio: "1200 / 630" }}
        >
          <Image
            src="/images/og/radon-testing.jpg"
            alt="A continuous radon monitor placed in a home for a 48-hour test"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          The Invisible Danger in Your Home
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Radon is a naturally occurring radioactive gas that you can't see, smell, or taste, making it a hidden threat in any home. It's the #1 cause of lung cancer among non-smokers and is responsible for thousands of deaths each year in the U.S. Because Florida's geology can produce radon, the EPA and Surgeon General recommend testing for all homes.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Our professional radon testing service provides the accurate data you need to make an informed decision. Unlike simple, one-time charcoal kits, our 48-hour continuous radon monitors provide a detailed profile of your home's radon levels, giving you a reliable average and peace of mind.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Our 48-Hour Continuous Monitoring Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testingProcess.map((category, index) => (
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
        <h2 className="text-2xl font-semibold text-center mb-8">What You Receive With Your Test</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Accurate & Clear Reporting</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>A detailed graph showing hourly radon fluctuations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>A clear, easy-to-understand average pCi/L reading</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Comparison to EPA action levels and guidelines</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Unbiased recommendation for next steps if needed</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional & Reliable Service</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Service from a licensed inspector (R2355)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Fast scheduling and efficient device placement/retrieval</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Same-day summary after test completion</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Available as a standalone service or bundled with your home inspection</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

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
      
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions About Radon Testing
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
          Is Your Home Safe? Find Out for Sure.
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't leave your family's health to chance. Schedule a professional radon test today for accurate results and peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#schedule" className="px-8 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90">
            Schedule a Radon Test
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
        <p>Florida Radon Measurement Technician License R2355 • Serving Southwest Florida since 2020</p>
      </footer>
    </main>
  )
}
