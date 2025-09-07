// src/components/sections/FaqJsonLd.tsx
// Server-safe JSON-LD injector (no hooks, no client boundary)
export default function FaqJsonLd({ qa }: { qa: { q: string; a: string }[] }) {
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: qa.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    };
  
    return (
      <script
        type="application/ld+json"
        // JSON.stringify once so it’s valid JSON, not [Object object]
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );
  }
  