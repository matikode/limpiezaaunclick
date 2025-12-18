import { MessageCircle, CheckCircle, Sparkles } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Cotiza/Reserva',
      description: 'Elige tu servicio y fecha a través de WhatsApp',
      color: 'text-primary bg-primary/10',
    },
    {
      icon: CheckCircle,
      title: 'Confirmamos',
      description: 'Recibe confirmación inmediata de tu reserva',
      color: 'text-accent bg-accent/10',
    },
    {
      icon: Sparkles,
      title: '¡Listo!',
      description: 'Disfruta de un espacio impecable y reluciente',
      color: 'text-primary bg-primary/10',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">¿Cómo Funciona?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tres simples pasos para tener tu espacio perfectamente limpio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 -z-10"></div>
              )}

              <div className="text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color} mb-6 relative`}>
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="text-primary">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
