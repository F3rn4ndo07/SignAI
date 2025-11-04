import { CheckCircle2 } from 'lucide-react';

const features = [
  { name: 'Cifrado de extremo a extremo', description: 'Toda la comunicación está protegida para garantizar la confidencialidad.' },
  { name: 'Control de Acceso Basado en Roles', description: 'Administra permisos para asegurar que solo personal autorizado acceda a la información.' },
  { name: 'Auditoría y Registros', description: 'Mantenemos un registro de actividad para monitoreo y cumplimiento normativo.' },
  { name: 'Ejecución On-Device', description: 'Procesamiento en el dispositivo siempre que es posible para máxima privacidad.' },
  { name: 'Cumplimiento de Ley N° 29733', description: 'Alineados con la Ley de Protección de Datos Personales de Perú.' },
  { name: 'Actualizaciones de Seguridad', description: 'Nuestro equipo trabaja constantemente para protegerte de nuevas amenazas.' }
];

export function Compliance() {
  return (
    <section id="cumplimiento" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cumplimiento y Seguridad: Nuestra Máxima Prioridad
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Diseñamos SignAI con los más altos estándares de seguridad y privacidad, para que puedas innovar con total tranquilidad y confianza.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">{feature.name}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
