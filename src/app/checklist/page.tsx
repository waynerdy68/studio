
import { ChecklistGeneratorSection } from "@/components/sections/checklist-generator-section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Pre-Inspection Checklist Generator | Mayne Home Inspectors",
  description: "Generate a custom pre-inspection checklist for any property. Our AI tool helps you identify common issues based on property type and age before the official inspection.",
  keywords: "pre-inspection checklist, home inspection checklist, AI inspection tool, property checklist",
};


export default function ChecklistPage() {
  return (
    <>
      <ChecklistGeneratorSection />
    </>
  );
}
