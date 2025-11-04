import { HubSpotForm } from './HubSpotForm';

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Da el primer paso hacia una institución 100% accesible
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Completa el formulario y uno de nuestros especialistas te contactará para coordinar tu piloto gratuito de 30 días. Descubre de primera mano cómo SignAI puede transformar la comunicación en tu organización.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">✔ Mejora la experiencia de tus usuarios.</li>
              <li className="flex items-center gap-2">✔ Optimiza tus procesos de atención.</li>
              <li className="flex items-center gap-2">✔ Cumple con las normativas de accesibilidad.</li>
            </ul>
          </div>
          <div className="w-full bg-card p-8 rounded-xl shadow-2xl border">
            <h3 className="text-2xl font-bold mb-2 text-center">Solicita tu piloto</h3>
            <p className="text-muted-foreground text-center mb-6">Es rápido, fácil y sin compromiso.</p>
            <HubSpotForm
              portalId={process.env.NEXT_PUBLIC_HS_PORTAL_ID || ''}
              formId={process.env.NEXT_PUBLIC_HS_FORM_ID || ''}
              region={process.env.NEXT_PUBLIC_HS_REGION || 'na1'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
