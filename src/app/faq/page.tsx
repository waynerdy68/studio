
import { FaqSection } from "@/components/sections/faq-section";
import { faqData } from "@/lib/faq-data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Mayne Inspectors",
  description: "Find answers to common questions about home inspections, pricing, services, and scheduling with Mayne Inspectors in Southwest Florida.",
  keywords: "faq, home inspection questions, pricing, services, scheduling, 4-point inspection cost, wind mitigation cost",
};


// Generate the JSON-LD structured data for the FAQ page
const generateFaqJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer.replace(/<[^>]*>?/gm, '') // Strip HTML for plain text answer
      }
    }))
  };
};

export default function FAQPage() {
  const jsonLd = generateFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqSection />
    </>
  );
}
