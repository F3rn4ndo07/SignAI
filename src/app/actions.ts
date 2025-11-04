
'use server';

import { explainAITranslation } from '@/ai/flows/explain-ai-translation';

export async function getAIExplanation(): Promise<string> {
  try {
    const result = await explainAITranslation({});
    return result.explanation;
  } catch (error) {
    console.error('Error fetching AI explanation:', error);
    return 'Lo sentimos, no pudimos generar la explicación en este momento. Por favor, inténtalo de nuevo más tarde.';
  }
}
