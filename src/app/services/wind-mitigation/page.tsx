
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const BRAND = "Mayne Home Inspectors"
const PHONE_E164 = "+18638430735"
const PHONE_DISPLAY = "(863) 843-0735"

export const metadata: Metadata = {
  title: "Wind Mitigation Inspections in LaBelle, Lehigh Acres & Clewiston | Mayne Home Inspectors",
  description:
    "Lower insurance premiums with a certified wind mitigation inspection. 24-hour PDF with photos and the OIR-B1-1802 form. Call (863) 843-0735.",
  alternates: { canonical: "/services/wind-mitigation" },
  openGraph: {
    type: "website",
    url: "https://mayneinspectors.com/services/wind-mitigation",
    title: "Wind Mitigation Inspections | Mayne Home Inspectors",
    description:
      "Lower premiums. 24-hour OIR-B1-1802. Serving LaBelle, Lehigh Acres, Clewiston & nearby.",
    images: [{ url: "/images/og/wind-mitigation.jpg", width: 1200, height: 630, alt: "Wind Mitigation Inspection in Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wind Mitigation Inspections | Mayne Home Inspectors",
    description:
      "Lower premiums. 24-hour OIR-B1-1802. Serving LaBelle, Lehigh Acres, Clewiston & nearby.",
    images: ["/images/og/wind-mitigation.jpg"],
  },
}

const faqs = [
  { q: "What is a wind mitigation inspection?",
    a: "A focused inspection that documents wind-resistant features—roof covering, deck attachment, roof-to-wall connections, secondary water resistance, opening protection, roof shape, and code compliance year—so your insurer can apply wind credits." },
  { q: "Do I get the OIR-B1-1802 form?",
    a: "Yes. You’ll receive the Florida OIR-B1-1802 form, completed and signed, with labeled photos—delivered as a PDF within 24 hours in most cases." },
  { q: "How long is the inspection valid?",
    a: "Insurers typically accept wind mitigation reports for 5 years, assuming no major roof or opening changes." },
  { q: "What if my home is older?",
    a: "Older homes can still qualify for credits if they have qualifying features like a re-roof with proper deck attachment/SWR or approved opening protection." },
  { q: "How fast can you schedule?",
    a: "Often within 24 hours. Call or text and we’ll get you on the calendar." },
]

export default function WindMitigationPage() {
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
      {/* Page-level FAQ schema (allowed). Business schema stays in layout.tsx */}
      <Script id="ldjson-windmit-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Wind Mitigation Inspections
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Lower premiums. 24-hour OIR-B1-1802. Clear photos and straight talk.
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
            src="/images/og/wind-mitigation.jpg"
            alt="Wind Mitigation Inspection in Florida"
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
          <h2 className="text-2xl font-semibold">What we document</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Roof covering type and approval</li>
            <li>• Roof deck attachment (nail size/pattern)</li>
            <li>• Roof-to-wall connection (clips, straps, wraps)</li>
            <li>• Secondary water resistance (SWR), if present</li>
            <li>• Opening protection (impact windows/doors or rated shutters)</li>
            <li>• Roof geometry (hip, gable, flat)</li>
            <li>• Building code compliance year / FBC equivalent</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">What you receive</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Completed <span className="font-medium">OIR-B1-1802</span> PDF</li>
            <li>• Labeled photos for each credit</li>
            <li>• Clear recommendations if credits are missing</li>
            <li>• Fast digital delivery (within 24 hours)</li>
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
        <h2 className="text-2xl font-semibold">Wind Mitigation FAQ</h2>
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
