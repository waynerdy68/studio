import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"

export const metadata: Metadata = {
  title: "Home Inspections in LaBelle, FL | Mayne Home Inspectors",
  description:
    "Local home inspections in LaBelle, FL. Same-day reports, Wind Mitigation (OIR-B1-1802) and 4-Point for insurance. Call (863) 843-0735.",
  alternates: { canonical: "/service-areas/labelle" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/service-areas/labelle",
    title: "LaBelle Home Inspections | Mayne Home Inspectors",
    description:
      "Local since 2013. Fast scheduling, clear reports, and insurance forms when you need them.",
    images: [{ url: "/images/og/service-area.jpg", width: 1200, height: 630, alt: "Home inspections in LaBelle, Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaBelle Home Inspections | Mayne Home Inspectors",
    description: "Local since 2013. Same-day reports available.",
    images: ["/images/og/service-area.jpg"],
  },
}

const faqs = [
  { q: "Do you handle wind credits for LaBelle carriers?", a: "Yes. We complete the OIR-B1-1802 with labeled photos so insurers can apply wind credits." },
  { q: "How fast can you inspect in LaBelle?", a: "Often within 24 hours. Call or text and we’ll get you on the calendar." },
]

export default function LabellePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-labelle-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">LaBelle, FL Home Inspections</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Local inspections along the Caloosahatchee — clear photos, straight talk, and insurance forms when needed.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`tel:${PHONE_E164}`} className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:opacity-90" aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}>
            Call {PHONE_DISPLAY}
          </a>
          <a href={`sms:${PHONE_E164}`} className="px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5">
            Text Us to Schedule
          </a>
        </div>
      </section>

      <section className="mt-10">
        <div className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden" style={{ aspectRatio: "1200 / 630" }}>
          <Image src="/images/og/service-area.jpg" alt="LaBelle Florida home inspection" fill className="object-cover" sizes="(min-width: 768px) 768px, 100vw" />
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Popular services in LaBelle</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• <Link href="/services/home-inspection" className="underline">Home Inspection</Link></li>
            <li>• <Link href="/services/wind-mitigation" className="underline">Wind Mitigation (OIR-B1-1802)</Link></li>
            <li>• <Link href="/services/4-point-inspection" className="underline">4-Point (Roof/Electrical/Plumbing/HVAC)</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Why locals choose us</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Same-day or 24-hour reports</li>
            <li>• Licensed: HI3589 • Radon R2355</li>
            <li>• Clear recommendations without scare tactics</li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">LaBelle FAQ</h2>
        <div className="mt-6 space-y-6">
          {faqs.map(f => (
            <details key={f.q} className="group rounded-xl border p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-muted-foreground">
        Florida HI3589 • Radon R2355 • Local since 2013
      </footer>
    </main>
  )
}
