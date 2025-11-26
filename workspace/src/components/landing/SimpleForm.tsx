
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { trackConversion } from '@/lib/events';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  lastName: z.string().min(2, { message: 'El apellido debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  number: z.string().min(7, { message: 'Por favor, introduce un número de teléfono válido.' }),
});

type FormData = z.infer<typeof formSchema>;

export function SimpleForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      number: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Fake delay to simulate network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form data submitted:', data);
    
    // Track conversion event
    trackConversion({ eventName: 'solicitud_piloto' });
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="border-green-500/50 text-green-700 bg-green-500/10">
        <CardHeader>
          <CardTitle>¡Gracias!</CardTitle>
          <CardDescription className="text-green-700/90">
            Hemos recibido tu solicitud. Uno de nuestros especialistas se pondrá en contacto contigo pronto.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="name">Nombre</Label>
                <FormControl>
                  <Input id="name" placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="lastName">Apellido</Label>
                <FormControl>
                  <Input id="lastName" placeholder="Tu apellido" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="email">Email</Label>
              <FormControl>
                <Input id="email" type="email" placeholder="tu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="number">Número de Teléfono</Label>
              <FormControl>
                <Input id="number" type="tel" placeholder="987 654 321" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Enviar Solicitud
        </Button>
      </form>
    </Form>
  );
}
