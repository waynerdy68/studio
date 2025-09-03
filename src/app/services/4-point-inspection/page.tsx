
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"

export const metadata: Metadata = {
  title: "4-Point Inspections in LaBelle, Lehigh Acres & Clewiston | Mayne Home Inspectors",
  description:
    "Insurance-required 4-Point inspections (roof, electrical, plumbing, HVAC). 24-hour PDF with photos. Call (863) 843-0735.",
  alternates: { canonical: "/services/4-point-inspection" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/4-point-inspection",
    title: "4-Point Inspections | Mayne Home Inspectors",
    description:
      "Roof, electrical, plumbing, HVAC. 24-hour report. Serving LaBelle, Lehigh Acres, Clewiston & nearby.",
    images: [{ url: "/images/og/4-point-inspection.jpg", width: 1200, height: 630, alt: "4-Point Inspection in Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "4-Point Inspections | Mayne Home Inspectors",
    description:
      "Roof, electrical, plumbing, HVAC. 24-hour report. Serving LaBelle, Lehigh Acres, Clewiston & nearby.",
    images: ["/images/og/4-point-inspection.jpg"],
  },
}

const faqs = [
  { q: "What is a 4-Point inspection?",
    a: "An insurance-focused check of the home’s four major systems: roof, electrical, plumbing, and HVAC. Many carriers require it for older homes." },
  { q: "Do you include photos and insurer forms?",
    a: "Yes—clear photos and a carrier-friendly PDF delivered fast (within 24 hours)." },
  { q: "Will a 4-Point fail my home sale?",
    a: "No. It’s not a pass/fail home inspection. It documents current condition and materials for underwriting." },
  { q: "How long is it valid?",
    a: "Most insurers accept a 4-Point for 1–2 years, but policies vary." },
  { q: "Can you bundle with a wind mitigation?",
    a: "Absolutely—bundling saves time and often money. Ask when you call." },
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

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Script id="ldjson-4pt-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">4-Point Inspections</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insurance-ready report: roof, electrical, plumbing, HVAC. 24-hour PDF with photos.
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

      {/* Visible hero image (uses your OG image asset) */}
      <section className="mt-10">
        <div
          className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden"
          style={{ aspectRatio: "1200 / 630" }}
        >
          <Image
            src="/images/og/4-point-inspection.jpg"
            alt="4-Point Inspection in Florida"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
            priority={false}
          />
        </div>
      </section>

      {/* What’s included */}
      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">What we check</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Roof covering, visible condition, age evidence</li>
            <li>• Electrical panel brand/amps, visible hazards, GFCI/AFCI (as applicable)</li>
            <li>• Plumbing supply/drain materials, water heater age & TPR, visible leaks</li>
            <li>• HVAC system age, cooling/heating method, visible condition</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">What you receive</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Concise PDF formatted for insurers</li>
            <li>• Clear labeled photos of key items</li>
            <li>• Notes on items carriers commonly flag</li>
            <li>• Fast digital delivery (within 24 hours)</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <p className="text-muted-foreground">
          Serving LaBelle, Lehigh Acres, Clewiston, Moore Haven, Fort Myers & Cape Coral.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#schedule" className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90">
            Schedule Online
          </Link>
          <a
            href={`tel:${PHONE_E164}`}
            className="px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5"
            aria-label={`Call ${BRAND} at ${PHONE_DISPLAY}`}
          >
            Or call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">4-Point FAQ</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-muted-foreground">
      Certified Home Inspector HI3589 • State Contractor CRC1328070 • Radon Technician R2355 • National Association Home Inspectors NACHI10122704     </footer>
    </main>
  )
}
