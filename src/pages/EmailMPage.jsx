import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const EmailMarketingPage = () => {
  const { t } = useTranslation("global");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: "📨",
      title: "Templates Responsive Probados",
      description: "Diseños optimizados que funcionan en todos los dispositivos y clientes de email"
    },
    {
      icon: "🤖",
      title: "Automatización Inteligente",
      description: "Flujos automáticos basados en el comportamiento de tus suscriptores"
    },
    {
      icon: "🎯",
      title: "Segmentación Avanzada",
      description: "Envía el mensaje correcto a la audiencia correcta en el momento perfecto"
    },
    {
      icon: "📊",
      title: "Análisis Detallado",
      description: "Métricas de apertura, clics, conversiones y ROI en tiempo real"
    },
    {
      icon: "🔄",
      title: "Integración con CRM",
      description: "Conecta con tus herramientas favoritas para un flujo de trabajo perfecto"
    },
    {
      icon: "🔬",
      title: "A/B Testing Incorporado",
      description: "Prueba diferentes enfoques y optimiza continuamente"
    }
  ];

  const metrics = [
    { value: "98%", label: "Tasa de entrega", color: "text-emerald-500" },
    { value: "45%", label: "Apertura promedio", color: "text-blue-500" },
    { value: "12%", label: "Tasa de clics", color: "text-purple-500" },
    { value: "25%", label: "Conversión promedio", color: "text-orange-500" }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-[#0a0a0a] dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 font-semibold text-sm mb-6">
                📧 MARKETING DIGITAL
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Email Marketing que Conecta
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Campañas de correo electrónico que no solo llegan a la bandeja de entrada, 
                sino que capturan atención, generan confianza y aumentan conversiones.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-3"
                >
                  <span>Potenciar mi Email Marketing</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
                
                <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-300 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
                  <span>Ver Ejemplos de Campañas</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl">
                    <div className={`text-3xl font-bold ${metric.color}`}>{metric.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-700 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📧</div>
                    <div className="space-y-2">
                      <div className="w-48 h-4 bg-white/30 rounded-full mx-auto"></div>
                      <div className="w-40 h-4 bg-white/30 rounded-full mx-auto"></div>
                      <div className="w-36 h-4 bg-white/30 rounded-full mx-auto"></div>
                    </div>
                    <p className="text-cyan-100 mt-4">Campañas que realmente funcionan</p>
                  </div>
                </div>
              </div>
              
              {/* Tech badges */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">▲</span>
                  <span className="font-semibold">Next.js</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">✉️</span>
                  <span className="font-semibold">Resend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                Automatización Inteligente de Email
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Más allá del envío masivo: estrategias personalizadas que construyen relaciones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-transparent hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className={`bg-gradient-to-r from-cyan-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Convierte Suscriptores en Clientes Leales
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              El email marketing tiene el mejor ROI de todas las estrategias digitales. 
              ¿Estás aprovechando todo su potencial?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-cyan-700 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3">
                <span>Estrategia Personalizada</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/10 flex items-center justify-center gap-3">
                <span>Auditoría Gratuita</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              📈 ROI promedio 42:1 • 🤖 Automatización 24/7 • 🎨 Diseño personalizado
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketingPage;