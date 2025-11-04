'use server';

/**
 * @fileOverview Explains the AI-powered translation process of SignAI.
 *
 * - explainAITranslation - A function that generates an explanation of the AI translation process.
 * - ExplainAITranslationInput - The input type for the explainAITranslation function (empty object).
 * - ExplainAITranslationOutput - The return type for the explainAITranslation function (string).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainAITranslationInputSchema = z.object({});
export type ExplainAITranslationInput = z.infer<typeof ExplainAITranslationInputSchema>;

const ExplainAITranslationOutputSchema = z.object({
  explanation: z.string().describe('A clear and concise explanation of the AI-powered translation process.'),
});
export type ExplainAITranslationOutput = z.infer<typeof ExplainAITranslationOutputSchema>;

export async function explainAITranslation(input: ExplainAITranslationInput): Promise<ExplainAITranslationOutput> {
  return explainAITranslationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainAITranslationPrompt',
  input: {schema: ExplainAITranslationInputSchema},
  output: {schema: ExplainAITranslationOutputSchema},
  prompt: `You are an AI expert explaining how the SignAI wearable device translates sign language in real-time to potential clients.

Explain the process in a clear and concise manner, highlighting the use of IMU sensors and computer vision to capture hand and facial expressions, the conversion of these inputs into text and voice using machine learning models, and the importance of on-device processing and anonymization techniques for privacy.

Focus on building trust in the technology and demonstrating its value in real-time sign language conversion. The response should be in Spanish.`,
});

const explainAITranslationFlow = ai.defineFlow(
  {
    name: 'explainAITranslationFlow',
    inputSchema: ExplainAITranslationInputSchema,
    outputSchema: ExplainAITranslationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
