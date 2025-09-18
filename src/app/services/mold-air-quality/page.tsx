
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"
const EMAIL = "info@mayneinspectors.com"

export const metadata: Metadata = {
  title: "Mold & Air Quality Testing | Southwest Florida | Mayne Home Inspectors",
  description:
    "Professional mold inspection and air quality testing in Southwest Florida. We identify potential mold growth, moisture issues, and provide lab-analyzed air/surface samples. Licensed HI3589. Call (863) 843-0735.",
  alternates: { canonical: "/services/mold-air-quality" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/mold-air-quality",
    title: "Mold Inspection and Air Quality Testing Services in FL",
    description:
      "Protect your family's health with professional mold and air quality testing. We offer visual inspections, air sampling, and surface sampling with detailed lab reports.",
    images: [{ url: "/images/og/mold-inspection.jpg", width: 1200, height: 630, alt: "Mold and air quality testing services in a Florida home" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mold & Air Quality Testing FL | Mayne Home Inspectors",
    description: "Identify hidden mold and allergens with our professional air and surface sample testing.",
    images: ["/images/og/mold-inspection.jpg"],
  },
}

const faqs = [
    {
        q: "What are the signs I might have a mold problem?",
        a: "Common signs include a persistent musty odor, visible mold growth (which can be black, green, or white), water stains on walls or ceilings, and experiencing allergic reactions like sneezing, runny nose, or itchy eyes only when at home."
    },
    {
        q: "What's involved in a mold inspection?",
        a: "A mold inspection starts with a thorough visual assessment of the property to identify signs of past or present moisture intrusion. We use tools like moisture meters and infrared cameras to find hidden moisture. If needed, we can then take air or surface samples for lab analysis."
    },
    {
        q: "What is the difference between air sampling and surface sampling?",
        a: "Air sampling measures the concentration and types of mold spores in the air you breathe, which is useful for identifying hidden mold. Surface sampling involves taking a swab or tape lift from a visible substance to confirm if it is mold."
    },
    {
        q: "How long does it take to get the lab results?",
        a: "Lab results for mold samples are typically available within 2-3 business days after the samples are collected. We will provide you with the full lab report and a clear explanation of the findings."
    },
    {
        q: "If mold is found, do you perform the removal?",
        a: "No, as inspectors, we maintain our objectivity by only identifying and testing for mold. Performing remediation would be a conflict of interest. If mold is confirmed, we will recommend you consult with a licensed mold remediation specialist."
    },
    {
        q: "Can I bundle mold testing with a regular home inspection?",
        a: "Yes, absolutely. Our Premium Inspection package includes mold and air quality testing at a discounted rate. You can also add it as a standalone service to any other inspection package."
    }
]

const testimonials = [
  {
    name: "Amanda G.",
    location: "Gateway, Fort Myers",
    text: "We had a musty smell we couldn't locate. The air quality test confirmed elevated mold spores, and the inspector's infrared camera found a hidden leak behind the shower. Invaluable service!"
  },
  {
    name: "David R.",
    location: "Port Charlotte",
    text: "Very professional and educational. The inspector explained the whole process of air sampling and what the results meant. The report was clear and helped us address the issue properly."
  },
  {
    name: "Jessica L.",
    location: "Lehigh Acres",
    text: "After the hurricane, we were concerned about mold. Mayne Home Inspectors did a thorough inspection and testing, giving us the peace of mind that our home was safe for our family."
  }
]

const inspectionProcess = [
    {
        category: "Visual Inspection",
        items: [
            "Assess property for signs of water damage and moisture",
            "Identify areas with visible mold-like growth",
            "Check for musty odors indicating hidden mold",
            "Evaluate HVAC system for potential contamination"
        ]
    },
    {
        category: "Advanced Technology",
        items: [
            "Use infrared (thermal imaging) cameras to find hidden moisture",
            "Employ moisture meters to measure dampness in materials",
            "Assess relative humidity levels within the home"
        ]
    },
    {
        category: "Sample Collection (If Warranted)",
        items: [
            "Air sampling to measure indoor spore counts vs. outdoor air",
            "Surface (swab or tape) sampling to identify visible growth",
            "Samples are sent to an accredited third-party laboratory"
        ]
    },
    {
        category: "Detailed Reporting",
        items: [
            "Receive a comprehensive lab analysis report",
            "Clear explanation of findings and identified mold types",
            "Recommendations for next steps if remediation is needed"
        ]
    }
]

export default function MoldAirQualityPage() {
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
    "@id": "https://mayneinspectors.com/services/mold-air-quality",
    "name": "Mold & Air Quality Testing",
    "description": "Professional mold inspection and air quality testing services in Southwest Florida, including visual assessment, moisture detection, and lab-analyzed sampling.",
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
    "serviceType": "Mold Inspection and Testing",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mold & Air Quality Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Mold Inspection & Air Quality Testing"
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
        "name": "Mold & Air Quality",
        "item": "https://mayneinspectors.com/services/mold-air-quality"
      }
    ]
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-mold-faq" type="application/ld+json">
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
          <li className="text-foreground">Mold & Air Quality</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Mold & Air Quality Testing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Ensure a healthy indoor environment for your family. We identify hidden moisture and potential mold issues with visual inspections, advanced technology, and professional lab sampling.
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
            Text to Schedule a Test
          </a>
        </div>
      </section>

      <section className="mt-10">
        <div
          className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden"
          style={{ aspectRatio: "1200 / 630" }}
        >
          <Image
            src="/images/og/mold-inspection.jpg"
            alt="Inspector taking an air quality sample in a home to test for mold"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Protecting Your Home's Health
        </h2>
        <div className="prose max-w-4xl mx-auto text-muted-foreground">
          <p className="text-lg leading-relaxed">
            In Florida's humid climate, moisture intrusion can quickly lead to mold growth, which can cause property damage and potential health problems. Our Mold & Air Quality testing services are designed to give you a clear, scientific assessment of your home's indoor environment.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We go beyond what you can see, using advanced tools and accredited labs to uncover hidden issues. Whether you have a visible concern, a musty smell, or simply want peace of mind, our professional testing provides the data you need to ensure your home is safe and healthy.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Mold Inspection & Testing Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {inspectionProcess.map((category, index) => (
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
        <h2 className="text-2xl font-semibold text-center mb-8">What You Receive</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Actionable Data & Reporting</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Detailed report of visual findings and moisture readings</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Official laboratory analysis of any samples taken</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Clear explanation of identified mold types and spore counts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Unbiased recommendations for next steps if issues are found</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional & Reliable Service</h3>
            <ul className="space-y-3 text-muted-foreground">
               <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Fast scheduling, often within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Testing performed by a licensed home inspector</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Post-inspection support for any questions about your report</span>
              </li>
               <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Bundled pricing available with any home inspection package</span>
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
          Frequently Asked Questions About Mold Testing
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
          Concerned About Mold or Your Home's Air Quality?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't wait. Schedule a professional mold inspection and air quality test today for peace of mind. Call or text for fast, expert service in Southwest Florida.
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
        <p>Florida License HI3589 • Serving Southwest Florida since 2020</p>
      </footer>
    </main>
  )
}
