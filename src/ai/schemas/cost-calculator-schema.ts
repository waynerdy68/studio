import {z} from 'zod';

export const CostCalculatorInputSchema = z.object({
  deficiencyDescription: z.string().min(10, "Please provide a more detailed description of the issue.").describe('A description of the home repair deficiency.'),
});
export type CostCalculatorInput = z.infer<typeof CostCalculatorInputSchema>;

export const CostCalculatorOutputSchema = z.object({
  estimatedMinCost: z.number().describe('The estimated minimum cost for materials in USD.'),
  estimatedMaxCost: z.number().describe('The estimated maximum cost for materials in USD.'),
  requiredMaterials: z.array(z.string()).describe('A list of materials typically required for the repair.'),
  disclaimer: z.string().describe('A disclaimer stating this is a material-only estimate and not a formal quote.'),
});
export type CostCalculatorOutput = z.infer<typeof CostCalculatorOutputSchema>;
