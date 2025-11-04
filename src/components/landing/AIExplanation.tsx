'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAIExplanation } from '@/app/actions';
import { Loader2, Sparkles } from 'lucide-react';

export function AIExplanation() {
  const [explanation, setExplanation] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleExplain = async () => {
    setIsLoading(true);
    setError('');
    setExplanation('');
    try {
      const result = await getAIExplanation();
      setExplanation(result);
    } catch (e) {
      setError('Hubo un error al generar la explicación. Por favor, intente de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center">
      <Button onClick={handleExplain} disabled={isLoading} variant="outline" size="lg">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="mr-2 h-4 w-4" />
        )}
        Generar explicación técnica con IA
      </Button>

      {explanation && (
        <Card className="mt-8 max-w-3xl text-left w-full bg-card border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Sparkles />
              Análisis de nuestra IA
            </CardTitle>
            <CardDescription>
                Esta explicación fue generada por IA para dar una visión detallada de nuestro proceso.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 whitespace-pre-line">{explanation}</p>
          </CardContent>
        </Card>
      )}
      {error && <p className="mt-4 text-destructive">{error}</p>}
    </div>
  );
}
