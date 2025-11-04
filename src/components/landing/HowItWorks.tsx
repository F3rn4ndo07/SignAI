import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Scan, Languages, ShieldCheck } from 'lucide-react';
import { AIExplanation } from './AIExplanation';

const steps = [
  {
    icon: <Scan className="h-8 w-8 text-primary" />,
    title: '1. Captura Precisa',
    description: 'Nuestros wearables utilizan sensores IMU y visión por computador para capturar gestos, movimientos y expresiones faciales con alta fidelidad.',
  },
  {
    icon: <Languages className="h-8 w-8 text-primary" />,
    title: '2. Traducción Instantánea',
    description: 'Modelos de Machine Learning avanzados procesan los datos y los convierten en texto o voz en tiempo real, rompiendo las barreras de comunicación.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: '3. Privacidad Garantizada',
    description: 'Priorizamos la seguridad con ejecución on-device y técnicas de anonimización para la mejora continua de nuestros modelos, respetando siempre la privacidad.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnología que conecta mundos
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Descubre cómo SignAI convierte la lengua de señas en comunicación fluida y accesible en solo tres pasos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                  {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription className="pt-2">{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <AIExplanation />
        </div>
      </div>
    </section>
  );
}
