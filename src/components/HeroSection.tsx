import { MessageCircle, MousePointer } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const whatsappNumber = '+1234567890'; // Replace with actual number

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-secondary via-white to-secondary/30 py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <MousePointer className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Reserva en segundos</span>
          </div>

          {/* Main Heading */}
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight pb-2">
            Limpieza Profesional a un <span className="text-primary">Click</span> para tu Hogar y Oficina
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
            Reservar tu servicio de aseo nunca fue tan fácil y rápido. ¡Pide tu cotización ahora!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 shadow-lg shadow-accent/30"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola, me gustaría solicitar una cotización para servicio de limpieza`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 px-8 py-6"
              onClick={() => {
                const element = document.getElementById('servicios');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Servicios
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>+500 clientes satisfechos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Profesionales verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Disponibilidad inmediata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
