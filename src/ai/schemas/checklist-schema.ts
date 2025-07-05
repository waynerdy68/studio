import {z} from 'zod';

export const GenerateChecklistInputSchema = z.object({
  propertyType: z.string().describe('The type of property (e.g., Single-Family Home, Condo, Townhouse).'),
  propertyAge: z.string().describe('The approximate age of the property (e.g., Pre-1960, 1960-1980, 1981-2000, Post-2000).'),
  userConcerns: z.string().optional().describe('Any specific concerns the user has about the property.'),
});
export type GenerateChecklistInput = z.infer<typeof GenerateChecklistInputSchema>;

export const GenerateChecklistOutputSchema = z.object({
  checklist: z.array(z.object({
    category: z.string().describe('The category of inspection items (e.g., Roofing, Plumbing, Electrical).'),
    items: z.array(z.string()).describe('A list of specific items to check within this category.'),
  })).describe('A structured pre-inspection checklist.'),
});
export type GenerateChecklistOutput = z.infer<typeof GenerateChecklistOutputSchema>;
