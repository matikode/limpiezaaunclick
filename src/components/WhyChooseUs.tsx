import { Shield, DollarSign, Heart, Zap } from 'lucide-react';

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Shield,
      title: 'Profesionales Verificados',
      description: 'Todo nuestro personal está capacitado y cuenta con certificaciones de calidad',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: DollarSign,
      title: 'Precios Transparentes',
      description: 'Sin costos ocultos. Conoce el precio exacto antes de confirmar tu servicio',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Heart,
      title: 'Satisfacción Garantizada',
      description: 'Si no quedas satisfecho, regresamos sin costo adicional para corregirlo',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Rapidez y Eficiencia',
      description: 'Servicios rápidos sin sacrificar la calidad. Tu tiempo es valioso',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">¿Por Qué Elegirnos?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nos comprometemos a brindarte el mejor servicio de limpieza
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-slate-800">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-[100px] rounded-tr-[20px] -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
