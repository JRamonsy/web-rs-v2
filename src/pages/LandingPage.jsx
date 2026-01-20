import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const LandingPage = () => {
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
      icon: "🎯",
      title: t("Landing-page.body.card-1-title"),
      description: t("Landing-page.body.card-1-description")
    },
    {
      icon: "⚡",
      title: t("Landing-page.body.card-2-title"),
      description: t("Landing-page.body.card-2-title")
    },
    {
      icon: "📈",
      title: "Análisis de Conversión en Tiempo Real",
      description: t("Landing-page.body.card-3-title")
    },
    {
      icon: "🔐",
      title: t("Landing-page.body.card-3-title"),
      description: t("Landing-page.body.card-4-title")
    },
    {
      icon: "🔄",
      title: t("Landing-page.body.card-4-title"),
      description: t("Landing-page.body.card-5-title")
    },
    {
      icon: "📱",
      title: t("Landing-page.body.card-5-title"),
      description: t("Landing-page.body.card-6-title")
    }
  ];

  const benefits = [
    { icon: "💰", text: t("Landing-page.header.card-1") },
    { icon: "⏱️", text: t("Landing-page.header.card-2") },
    { icon: "🎯", text: t("Landing-page.header.card-3") }
    // { icon: "📊", text: "Métricas claras de ROI" }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-[#0a0a0a] dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-semibold text-sm mb-6">
                 {t("Landing-page.header.little-title")}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  {t("Landing-page.header.title")}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t("Landing-page.header.description")}
              </p>
              
              <div className="flex justify-center  gap-4 mb-10">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-3"
                >
                  <span>{t("Landing-page.header.button-1")}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
                
                {/* <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-300 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
                  <span>Ver Casos de Éxito</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button> */}
              </div>
              
              {/* Beneficios rápidos */}
              <div className="
              flex gap-4 
               ">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 border border-gray-600 rounded-2xl p-1">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <div className="aspect-video bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-700 flex flex-col items-center justify-center p-8">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="text-center">
                    <div className="text-7xl font-bold text-white mb-2">+$</div>
                    <p className="text-blue-100 text-5xl">{t("Landing-page.header.text")}</p>
                  </div>
                </div>
              </div>
              
              {/* Stats flotantes */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">▲</span>
                  <span className="font-semibold">Next.js</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">☁️</span>
                  <span className="font-semibold">Cloudinary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className={` flex flex-col items-center text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {t("Landing-page.body.title")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("Landing-page.body.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className={`flex flex-col items-center bg-gradient-to-r from-blue-600 to-cyan-700 rounded-3xl p-8 md:p-12 text-center text-white transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("Landing-page.contact-section.title")}
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("Landing-page.contact-section.text-1")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3">
                <span>{t("Landing-page.contact-section.button-1")}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
              
              {/* <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/10 flex items-center justify-center gap-3">
                <span>Consulta Gratuita</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button> */}
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              {t("Landing-page.contact-section.text-2")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;