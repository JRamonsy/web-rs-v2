import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion"; 
// Si usas Framer Motion, si no lo quitas

const WebSitePage = () => {
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

  // Características de los sitios web corporativos
  const features = [
    {
      icon: "🌍",
      title: t("Services.website.features.0", "Diseño corporativo profesional"),
      description: t("Web-site-page.functions-section.card-1")
    },
    {
      icon: "🗣️",
      title: t("Services.website.features.1", "Multi-idioma (Español/Inglés)"),
      description: t("Web-site-page.functions-section.card-2")
    },
    {
      icon: "🌙",
      title: t("Services.website.features.2", "Tema claro/oscuro automático"),
      description: t("Web-site-page.functions-section.card-3")
    },
    {
      icon: "🔍",
      title: t("Services.website.features.3", "SEO optimizado para Google"),
      description: t("Web-site-page.functions-section.card-4")
    },
    {
      icon: "📞",
      title: t("Services.website.features.4", "Formularios de contacto inteligentes"),
      description: t("Web-site-page.functions-section.card-5")
    },
    {
      icon: "📍",
      title: t("Services.website.features.5", "Integración con Google Maps"),
      description: t("Web-site-page.functions-section.card-6")
    }
  ];

  // Proceso de desarrollo
  const developmentProcess = [
    {
      step: "1",
      title: t("Web-site-page.development-section.card-1-title"),
      description: t("Web-site-page.development-section.card-1-description")
    },
    {
      step: "2",
      title: t("Web-site-page.development-section.card-2-title"),
      description: t("Web-site-page.development-section.card-2-description")
    },
    {
      step: "3",
      title: t("Web-site-page.development-section.card-3-title"),
      description: t("Web-site-page.development-section.card-3-description")
    },
    {
      step: "4",
      title: t("Web-site-page.development-section.card-4-title"),
      description: t("Web-site-page.development-section.card-4-description")
    },
    {
      step: "5",
      title: t("Web-site-page.development-section.card-5-title"),
      description: t("Web-site-page.development-section.card-5-description")
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Contenido Principal */}
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 font-semibold text-sm mb-6">
               {t("Web-site-page.header.little-title")}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400 bg-clip-text text-transparent">
                  {t("Web-site-page.header.title")}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t("Web-site-page.header.description")}
              </p>
              
              <div className="flex justify-center gap-4 mb-10">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-3"
                >
                  <span>{t("Web-site-page.header.button-1")}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
                
                {/* <a 
                  href="#features"
                  className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-300 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3"
                >
                  <span>{t("Web-site-page.header.button-2")}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a> */}
              </div>
              
              {/* Estadísticas */}
              <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">40%+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t("Web-site-page.header.label-1")}</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2-3s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t("Web-site-page.header.label-2")}</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t("Web-site-page.header.label-3")}</div>
                </div>
                {/* <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t("Web-site-page.header.label-4")}</div>
                </div> */}
              </div>
            </div>
            
            {/* Imagen/Ilustración */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-purple-500 via-violet-500 to-purple-700 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🏢</div>
                    <h3 className="text-4xl font-bold text-white mb-2">
                      {t("Web-site-page.header.text-1")}</h3>
                    <p className="text-purple-100 text-2xl">
                      {t("Web-site-page.header.text-2")}
                      </p>
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-violet-400/20 rounded-full blur-2xl"></div>
              </div>
              
              {/* Badges de tecnologías */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚛️</span>
                  <span className="font-semibold">React.js</span>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌀</span>
                  <span className="font-semibold">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400 bg-clip-text text-transparent">
                {t("Web-site-page.functions-section.title")}
                
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("Web-site-page.functions-section.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400 bg-clip-text text-transparent">
                {t("Web-site-page.development-section.title")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("Web-site-page.development-section.description")}
            </p>
          </div>
          
          <div className="relative">
            {/* Línea de tiempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-violet-500 hidden lg:block"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {developmentProcess.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  } transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Punto en la línea de tiempo */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 hidden lg:block"></div>
                  
                  {/* Contenido */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Espaciador */}
                  <div className="lg:w-2/12 hidden lg:block"></div>
                  
                  {/* Step Number (solo móvil) */}
                  <div className="lg:hidden flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full text-xl font-bold">
                    {step.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className={`bg-gradient-to-r from-purple-600 to-violet-700 rounded-3xl p-8 md:p-12 text-center text-white transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("Web-site-page.contact-section.title")}
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("Web-site-page.contact-section.text-1")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-purple-700 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <span>
                  {t("Web-site-page.contact-section.button-1")}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
              
              <Link 
                to="/projects"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/10 flex items-center justify-center gap-3"
              >
                <span>
                  {t("Web-site-page.contact-section.button-2")}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              {t("Web-site-page.contact-section.text-2")}
            </div>
          </div>
        </div>
      </section>

      {/* Efectos de fondo */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-300 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default WebSitePage;