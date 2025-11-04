'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dra. Elena García',
    title: 'Jefa de Admisión, Hospital Nacional',
    avatarId: 'testimonial-avatar-1',
    text: 'SignAI ha revolucionado nuestra área de triaje. La comunicación con pacientes sordos es ahora fluida y precisa, reduciendo errores y tiempos de espera. Es una herramienta indispensable.',
  },
  {
    name: 'Mg. Carlos Valdivia',
    title: 'Decano, Facultad de Ingeniería de Sistemas',
    avatarId: 'testimonial-avatar-2',
    text: 'Implementamos el piloto en nuestras aulas y la diferencia es notable. Los estudiantes con discapacidad auditiva participan más y su rendimiento ha mejorado. La tecnología es impresionante.',
  },
  {
    name: 'Juan Pérez',
    title: 'Gerente de Atención al Ciudadano',
    avatarId: 'testimonial-avatar-3',
    text: 'Nuestra municipalidad ahora es verdaderamente inclusiva. Los ciudadanos sordos pueden realizar sus trámites con total autonomía. El feedback ha sido increíblemente positivo.',
  },
];

const logos = PlaceHolderImages.filter(img => img.id.startsWith('company-logo-'));

export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Confianza respaldada por líderes
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Instituciones de primer nivel en Perú ya están experimentando el impacto de SignAI en sus operaciones diarias.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const avatarImage = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
            return (
              <Card key={index} className="shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="italic text-muted-foreground mb-4">"{testimonial.text}"</blockquote>
                  <div className="flex items-center gap-4">
                    {avatarImage && (
                      <Avatar>
                        <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <p className="text-center font-semibold text-muted-foreground mb-6">INSTITUCIONES QUE CONFÍAN EN NOSOTROS</p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {logos.map((logo) => (
                <CarouselItem key={logo.id} className="md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                    <div className="flex aspect-video items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                      <Image
                        src={logo.imageUrl}
                        alt={logo.description}
                        width={150}
                        height={50}
                        className="object-contain"
                        data-ai-hint={logo.imageHint}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px]" />
            <CarouselNext className="absolute right-[-50px]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
