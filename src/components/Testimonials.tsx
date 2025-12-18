import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      role: 'Propietaria de Casa',
      comment: 'Excelente servicio! Mi casa quedó impecable. El equipo fue muy profesional y puntual. Definitivamente los recomiendo y los volveré a contratar.',
      rating: 5,
      initials: 'MG',
    },
    {
      name: 'Carlos Ramírez',
      role: 'Gerente de Oficina',
      comment: 'Llevamos 6 meses usando sus servicios para nuestra oficina. Siempre cumplen con los horarios y la calidad es excelente. Muy satisfechos.',
      rating: 5,
      initials: 'CR',
    },
    {
      name: 'Ana Martínez',
      role: 'Madre de Familia',
      comment: 'Como madre ocupada, este servicio me ha salvado la vida. Rápidos, eficientes y confiables. El proceso de reserva por WhatsApp es súper fácil.',
      rating: 5,
      initials: 'AM',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground mb-6 relative z-10">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
