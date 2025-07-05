'use server';
/**
 * @fileOverview An AI agent that generates a pre-inspection checklist for a property.
 *
 * - generateChecklist - A function that handles the checklist generation process.
 * - GenerateChecklistInput - The input type for the generateChecklist function.
 * - GenerateChecklistOutput - The return type for the generateChecklist function.
 */

import {ai} from '@/ai/genkit';
import { GenerateChecklistInputSchema, GenerateChecklistOutputSchema, type GenerateChecklistInput, type GenerateChecklistOutput } from '@/ai/schemas/checklist-schema';

export async function generateChecklist(input: GenerateChecklistInput): Promise<GenerateChecklistOutput> {
  return generateChecklistFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateChecklistPrompt',
  input: {schema: GenerateChecklistInputSchema},
  output: {schema: GenerateChecklistOutputSchema},
  prompt: `You are an expert home inspector with decades of experience. Your task is to generate a helpful, preliminary pre-inspection checklist for a potential home buyer.

The user has provided the following details about the property:
- Property Type: {{{propertyType}}}
- Property Age: {{{propertyAge}}}
{{#if userConcerns}}- Specific User Concerns: {{{userConcerns}}}{{/if}}

Based on this information, create a structured checklist. Focus on common issues found in properties of this type and age. For example, older homes might have galvanized plumbing or outdated electrical systems. A condo might have shared wall and ceiling considerations.

Organize the checklist into logical categories (e.g., Exterior, Roofing, Plumbing, Electrical, HVAC, Interior, Foundation). Provide clear, actionable items for the user to look for. Keep the language simple and easy for a non-expert to understand.

Address the user's specific concerns directly within the relevant categories.`,
});

const generateChecklistFlow = ai.defineFlow(
  {
    name: 'generateChecklistFlow',
    inputSchema: GenerateChecklistInputSchema,
    outputSchema: GenerateChecklistOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
