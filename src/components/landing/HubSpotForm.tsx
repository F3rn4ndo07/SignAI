'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackConversion } from '@/lib/events';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

type HubSpotFormProps = {
  portalId: string;
  formId: string;
  region: string;
};

// Global window declaration for hbspt
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: any) => void;
      };
    };
  }
}

export function HubSpotForm({ portalId, formId, region }: HubSpotFormProps) {
  const searchParams = useSearchParams();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptAddedRef = useRef(false);

  useEffect(() => {
    if (!portalId || !formId) {
      return;
    }

    const utms = {
      utm_source: searchParams.get('utm_source'),
      utm_medium: searchParams.get('utm_medium'),
      utm_campaign: searchParams.get('utm_campaign'),
      utm_content: searchParams.get('utm_content'),
      origen: searchParams.get('origen'),
    };

    const createForm = () => {
      if (window.hbspt && formContainerRef.current) {
        // Clear previous form if any
        formContainerRef.current.innerHTML = '';
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: `#${formContainerRef.current.id}`,
          onFormReady: ($form: any) => {
            Object.entries(utms).forEach(([key, value]) => {
              if (value) {
                const input = $form.querySelector(`input[name="${key}"]`);
                if (input) {
                  input.value = value;
                }
              }
            });
          },
          onFormSubmitted: () => {
            trackConversion({ eventName: 'lead_submitted' });
          },
        });
      }
    };

    if (window.hbspt) {
      createForm();
    } else if (!scriptAddedRef.current) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.defer = true;
      script.onload = createForm;
      document.body.appendChild(script);
      scriptAddedRef.current = true;
      
      return () => {
        // Clean up script if component unmounts
        // Note: HubSpot script might not be easily removable.
        // This is a basic cleanup attempt.
        try {
          document.body.removeChild(script);
        } catch (e) {
          // Ignore error if script is already gone
        }
        scriptAddedRef.current = false;
      };
    }
  }, [portalId, formId, region, searchParams]);

  if (!portalId || !formId) {
    return (
       <Card className="border-destructive/50 text-destructive bg-destructive/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Error de Configuración
          </CardTitle>
          <CardDescription className="text-destructive/90">
            El formulario de contacto no está configurado. Por favor, contacte al administrador del sitio.
          </CardDescription>
        </CardHeader>
       </Card>
    );
  }

  return <div ref={formContainerRef} id="hubspot-form-container" className="w-full" />;
}
