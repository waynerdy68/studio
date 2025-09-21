
import { CostCalculatorSection } from "@/components/sections/cost-calculator-section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Repair Cost Estimator | Mayne Home Inspectors",
  description: "Get an AI-powered estimate for home repair material costs. Describe the issue and our tool will provide a cost range and list of required materials.",
  keywords: "repair cost estimator, home repair costs, AI cost calculator, material cost estimate",
};

export default function CostEstimatorPage() {
  return (
    <>
      <CostCalculatorSection />
    </>
  );
}
