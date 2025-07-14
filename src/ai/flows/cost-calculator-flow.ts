
'use server';
/**
 * @fileOverview An AI agent that estimates material costs for home repairs.
 *
 * - calculateMaterialCost - A function that handles the cost estimation process.
 * - CostCalculatorInput - The input type for the calculateMaterialCost function.
 * - CostCalculatorOutput - The return type for the calculateMaterialCost function.
 */

import {ai} from '@/ai/genkit';
import { CostCalculatorInputSchema, CostCalculatorOutputSchema, type CostCalculatorInput, type CostCalculatorOutput } from '@/ai/schemas/cost-calculator-schema';

export async function calculateMaterialCost(input: CostCalculatorInput): Promise<CostCalculatorOutput> {
  return costCalculatorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'costCalculatorPrompt',
  input: {schema: CostCalculatorInputSchema},
  output: {schema: CostCalculatorOutputSchema},
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
  prompt: `You are an expert home inspector and experienced contractor. Your task is to provide a rough estimate of MATERIAL COSTS ONLY for a given home repair deficiency.

The user has described the following issue:
"{{{deficiencyDescription}}}"

Based on this description:
1.  Identify the most likely repair needed.
2.  List the essential materials required to complete this repair. Be specific (e.g., "P-trap kit", "Plumber's putty", "Channel-lock pliers").
3.  Estimate a realistic cost range (min and max) for these materials in USD, based on typical prices at major home improvement stores.
4.  Provide a clear, professional disclaimer. This is critical. The disclaimer must state that this is a rough estimate for materials ONLY, does not include labor, taxes, or permit fees, and that prices can vary significantly by location and material quality. It should strongly recommend consulting a qualified professional for an accurate quote.

Structure your response according to the output schema.`,
});

const costCalculatorFlow = ai.defineFlow(
  {
    name: 'costCalculatorFlow',
    inputSchema: CostCalculatorInputSchema,
    outputSchema: CostCalculatorOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
