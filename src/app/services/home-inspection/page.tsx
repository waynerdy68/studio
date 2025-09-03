
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"

export const metadata: Metadata = {
  title: "Home Inspections in LaBelle, Lehigh Acres & Clewiston | Mayne Home Inspectors",
  description:
    "Thorough home inspections with clear reports and photos. 24-hour delivery available. Serving LaBelle, Lehigh Acres, Clewiston & nearby.",
  alternates: { canonical: "/services/home-inspection" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/home-inspection",
    title: "Home Inspections | Mayne Home Inspectors",
    description:
      "Straight talk. Detailed photos. 24-hour report available.",
    images: [{ url: "/images/og/home-inspection.jpg", width: 1200, height: 630, alt: "Home Inspection in Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Inspections | Mayne Home Inspectors",
    description:
      "Straight talk. Detailed photos. 24-hour report available.",
    images: ["/images/og/home-inspection.jpg"],
  },
}

const faqs = [
  { q: "What does a home inspection include?",
    a: "Exterior, roof covering (viewed from accessible areas), structure, attic/insulation/ventilation, electrical, plumbing, HVAC, interior, doors/windows, and appliances. Safety and major defect focused." },
  { q: "How long does it take?",
    a: "Typically 2–3 hours on a standard single-family home, plus time for your questions on site." },
  { q: "When do I get the report?",
    a: "Within 24 hours. It includes labeled photos and plain-language summaries." },
  { q: "Can I attend the inspection?",
    a: "Absolutely. We encourage buyers to attend the final 30–45 minutes for a walkthrough and Q&A." },
  { q: "Do you do new-construction and pre-listing?",
    a: "Yes—new-build phase inspections and pre-listing inspections are available." },
]

export default function HomeInspectionPage() {
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
      <Script id="ldjson-home-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Home Inspections
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Thorough inspections. Straight talk. Detailed photos. 24-hour report available.
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

      {/* Visible hero image (match your OG asset) */}
      <section className="mt-10">
        <div
          className="relative mx-auto max-w-3xl rounded-xl shadow overflow-hidden"
          style={{ aspectRatio: "1200 / 630" }}
        >
          <Image
            src="/images/og/home-inspection.jpg"
            alt="Home inspection in Florida"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </section>

      {/* What we inspect / What you get */}
      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">What we inspect</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Roof covering (visible condition, signs of active leaks)</li>
            <li>• Exterior: siding, grading, drainage, decks/porches</li>
            <li>• Structure (visible framing/settlement indicators)</li>
            <li>• Attic: insulation, ventilation, accessible areas</li>
            <li>• Electrical: service/panel, visible hazards</li>
            <li>• Plumbing: supply/drain materials, water heater</li>
            <li>• HVAC: equipment, age/operation (weather permitting)</li>
            <li>• Interior: doors/windows, walls/ceilings, bathrooms, kitchen</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">What you receive</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Clear report with labeled photos</li>
            <li>• Summary of major issues & safety items</li>
            <li>• Practical recommendations (no scare tactics)</li>
            <li>• 24-hour turnaround</li>
            <li>• Post-inspection Q&A by phone/text</li>
          </ul>
        </div>
      </section>

      {/* Service area & CTA */}
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
        <h2 className="text-2xl font-semibold">Home Inspection FAQ</h2>
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
        Certified Home Inspector HI3589 • State Contractor CRC1328070 • Radon Technician R2355 • National Association Home Inspectors NACHI10122704
      </footer>
    </main>
  )
}
