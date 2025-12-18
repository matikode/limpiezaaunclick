import { Home, Building2, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Limpieza de Hogares',
      description: 'Servicio profesional para mantener tu hogar impecable',
      image: 'https://images.unsplash.com/photo-1649083048819-3fcd37423f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA5MjAyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Limpieza profunda de todas las habitaciones',
        'Desinfección de superficies',
        'Limpieza de baños y cocina',
        'Aspirado y trapeado de pisos',
        'Organización de espacios',
      ],
    },
    {
      icon: Building2,
      title: 'Limpieza de Oficinas',
      description: 'Espacios de trabajo limpios y productivos',
      image: 'https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHNlcnZpY2V8ZW58MXx8fHwxNzYwOTM4NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Limpieza de escritorios y áreas comunes',
        'Desinfección de equipos de oficina',
        'Limpieza de salas de reuniones',
        'Mantenimiento de baños corporativos',
        'Servicio flexible según horarios',
      ],
    },
  ];

  const whatsappNumber = '+1234567890';

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Servicios profesionales adaptados a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow-md">{service.title}</h3>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa el servicio de ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Cotización
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
