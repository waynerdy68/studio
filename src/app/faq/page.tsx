
import { FaqSection } from "@/components/sections/faq-section";
import { faqData } from "@/lib/faq-data";
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Mayne Home Inspectors",
  description: "Find answers to common questions about home inspections, pricing, services, and scheduling with Mayne Home Inspectors in Southwest Florida.",
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
    <div className="relative">
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/watermark.png"
          alt="Mayne Home Inspectors Watermark"
          width={1024}
          height={1024}
          className="opacity-20"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative z-10">
        <FaqSection />
      </div>
    </div>
  );
}
