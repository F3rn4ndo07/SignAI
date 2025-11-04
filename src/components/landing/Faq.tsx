import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿SignAI requiere una conexión a internet constante?",
    answer: "No necesariamente. Nuestro sistema está diseñado para realizar la traducción en el propio dispositivo (on-device) para tareas críticas, garantizando funcionamiento incluso sin conexión. La conectividad se utiliza para actualizaciones y la mejora opcional de nuestros modelos."
  },
  {
    question: "¿Qué variantes de la Lengua de Señas Peruana (LSP) soporta?",
    answer: "Nuestro modelo base está entrenado con la variante estándar de la LSP. Durante el piloto, podemos realizar ajustes y re-entrenamiento para adaptarnos a regionalismos o jergas específicas de su institución, asegurando una alta precisión."
  },
  {
    question: "¿Cómo se maneja la privacidad de las conversaciones?",
    answer: "La privacidad es fundamental. Las traducciones se procesan localmente siempre que es posible. Cuando los datos se usan para mejorar el modelo, son completamente anonimizados, eliminando cualquier información personal identificable, en cumplimiento con la Ley N° 29733."
  },
  {
    question: "¿Cuánto tiempo toma desplegar un piloto en mi institución?",
    answer: "Un despliegue piloto estándar toma entre 1 y 2 semanas. Esto incluye la configuración inicial, una sesión de capacitación para el personal clave y la entrega de los dispositivos wearable."
  },
  {
    question: "¿Qué costo tiene el piloto de 30 días?",
    answer: "El costo del piloto varía según la cantidad de dispositivos y el nivel de soporte requerido. Ofrecemos paquetes flexibles para adaptarnos a las necesidades de su institución. Contáctenos para una cotización personalizada."
  },
  {
    question: "¿Qué tipo de soporte técnico se incluye durante el piloto?",
    answer: "El piloto incluye soporte técnico completo a través de email, teléfono y un portal de cliente. Nuestro equipo estará disponible para resolver cualquier incidencia y asegurar que aproveche al máximo la tecnología."
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Resolvemos tus dudas para que tomes la mejor decisión hacia la inclusión.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
             <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
