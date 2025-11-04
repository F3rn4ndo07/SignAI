import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Stethoscope, School, Building } from 'lucide-react';

const sectorsData = {
  salud: {
    icon: <Stethoscope className="h-10 w-10 text-primary mb-4" />,
    title: "Sector Salud",
    description: "Humanizando la atención médica para la comunidad sorda.",
    cases: [
      { title: "Triaje y Admisión", details: "Agiliza el registro de pacientes, capturando síntomas y datos de forma precisa y rápida." },
      { title: "Ventanilla de Informes", details: "Facilita la entrega de resultados y la programación de citas sin barreras de comunicación." },
      { title: "Teleatención Inclusiva", details: "Integra SignAI en tus plataformas de telemedicina para consultas remotas accesibles." },
    ]
  },
  educacion: {
    icon: <School className="h-10 w-10 text-primary mb-4" />,
    title: "Sector Educación",
    description: "Potenciando el aprendizaje y la participación estudiantil.",
    cases: [
      { title: "Clases y Conferencias", details: "Ofrece traducción en tiempo real para que los estudiantes sordos no pierdan ningún detalle." },
      { title: "Atención en Ventanilla", details: "Mejora la experiencia en secretaría académica, biblioteca y otros servicios." },
      { title: "Tutorías Personalizadas", details: "Permite una comunicación fluida y directa entre tutores y estudiantes." },
    ]
  },
  gobierno: {
    icon: <Building className="h-10 w-10 text-primary mb-4" />,
    title: "Gobierno Local",
    description: "Construyendo un puente de comunicación con cada ciudadano.",
    cases: [
      { title: "Atención Ciudadana", details: "Facilita trámites y consultas en plataformas de atención presencial y virtual." },
      { title: "Programas Sociales", details: "Asegura que la información y los beneficios de programas sociales lleguen a todos." },
      { title: "Eventos Públicos", details: "Haz que los anuncios y eventos comunitarios sean accesibles para la comunidad sorda." },
    ]
  }
};

export function Sectors() {
  return (
    <section id="sectores" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Adaptado a las necesidades de tu sector
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Implementamos SignAI con un enfoque especializado para maximizar el impacto en los servicios que ofreces.
          </p>
        </div>
        <Tabs defaultValue="salud" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="salud">Salud</TabsTrigger>
            <TabsTrigger value="educacion">Educación</TabsTrigger>
            <TabsTrigger value="gobierno">Gobierno Local</TabsTrigger>
          </TabsList>
          {Object.entries(sectorsData).map(([key, sector]) => (
            <TabsContent key={key} value={key}>
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="text-center">
                  {sector.icon}
                  <CardTitle className="text-2xl">{sector.title}</CardTitle>
                  <CardDescription>{sector.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {sector.cases.map((useCase, index) => (
                      <div key={index} className="p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">{useCase.title}</h4>
                        <p className="text-muted-foreground">{useCase.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
