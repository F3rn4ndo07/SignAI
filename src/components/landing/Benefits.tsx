import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, Gauge, SmilePlus, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Cumplimiento y Seguridad',
    description: 'Reduce incidentes de accesibilidad y cumple con la Ley N° 29535, garantizando una comunicación inclusiva y segura.',
  },
  {
    icon: <Gauge className="h-8 w-8 text-primary" />,
    title: 'Eficiencia Operativa',
    description: 'Minimiza la dependencia de intérpretes externos y acorta los tiempos de atención, optimizando los recursos de tu personal.',
  },
  {
    icon: <SmilePlus className="h-8 w-8 text-primary" />,
    title: 'Mejor Experiencia',
    description: 'Aumenta drásticamente la satisfacción y autonomía de los usuarios sordos, y mejora la moral y capacidad de tu equipo.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Impacto Medible',
    description: 'Obtén métricas claras sobre la mejora en la atención y el cumplimiento, demostrando el valor de la inversión en accesibilidad.',
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beneficios que transforman
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Más que una herramienta, SignAI es un catalizador para una institución más eficiente, inclusiva y humana.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <div className="mb-4">{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription className="pt-2">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
