// src/components/sections/faq-section.tsx
"use client";

import React, { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FaqSection({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center font-headline">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-4 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-border/50 rounded-lg bg-card/80 backdrop-blur-sm shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
              >
                <span>{item.q}</span>
                <span className="ml-2 text-muted-foreground">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


