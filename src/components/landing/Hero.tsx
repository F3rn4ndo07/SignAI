import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Video } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-primary/5 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <Badge
          variant="outline"
          className="mb-4 border-primary/30 bg-primary/10 text-primary"
        >
          Inclusión en tiempo real
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
          Traducción de Lengua de Señas con IA en tu institución
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Asegura el cumplimiento normativo, mejora la experiencia de usuarios sordos y eleva la eficiencia operativa con nuestra solución de traducción en tiempo real.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild size="lg">
            <Link href="#contacto">
              Solicitar piloto 30 días <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#">
              <Video className="mr-2 h-5 w-5" />
              Ver demo 90s
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
