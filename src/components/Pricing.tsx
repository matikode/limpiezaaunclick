import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Pricing() {
  const plans = [
    {
      name: 'Básico',
      description: 'Perfecto para mantenimiento regular',
      price: '$49',
      period: 'por servicio',
      features: [
        'Limpieza de hasta 2 habitaciones',
        '1 baño incluido',
        'Sala y cocina',
        'Aspirado y trapeado',
        '2 horas de servicio',
      ],
      popular: false,
    },
    {
      name: 'Estándar',
      description: 'Ideal para hogares medianos',
      price: '$89',
      period: 'por servicio',
      features: [
        'Limpieza de hasta 4 habitaciones',
        '2 baños incluidos',
        'Todas las áreas comunes',
        'Limpieza profunda',
        '4 horas de servicio',
        'Productos eco-friendly',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      description: 'Servicio completo y profesional',
      price: '$149',
      period: 'por servicio',
      features: [
        'Limpieza ilimitada de habitaciones',
        'Todos los baños',
        'Áreas exteriores incluidas',
        'Limpieza profunda premium',
        'Jornada completa',
        'Productos premium incluidos',
        'Garantía extendida',
      ],
      popular: false,
    },
  ];

  const whatsappNumber = '+1234567890';

  return (
    <section id="precios" className="py-20 bg-gradient-to-b from-secondary/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Precios Transparentes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Sin sorpresas, sin costos ocultos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-white ${plan.popular
                  ? 'border-2 border-primary shadow-2xl scale-105 z-10'
                  : 'border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1'
                } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-accent hover:bg-accent rounded-bl-lg rounded-tr-lg px-4 py-1">
                    Más Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-8 pt-6">
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular
                      ? 'bg-accent hover:bg-accent/90'
                      : 'bg-primary hover:bg-primary/90'
                    }`}
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa el plan ${plan.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar Ahora
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          ¿Necesitas un servicio personalizado? <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Contáctanos para una cotización a medida</a>
        </p>
      </div>
    </section>
  );
}
