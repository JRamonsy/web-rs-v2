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

  const emailFeatures = [
    {
      icon: "📧",
      title: t("Marketing.email-section.title-card-1"),
      description: t("Marketing.email-section.description-card-1")
    },
    {
      icon: "🤖",
      title: t("Marketing.email-section.title-card-2"),
      description: t("Marketing.email-section.description-card-2")
    },
    // {
    //   icon: "📊",
    //   title: "Reportes Fáciles de Entender",
    //   description: "Ve cuántos abren tus emails, hacen clic y compran"
    // },
    {
      icon: "🎯",
      title: t("Marketing.email-section.title-card-3"),
      description: t("Marketing.email-section.description-card-3")
    },
    // {
    //   icon: "⚡",
    //   title: "Email Rápido y Confiable",
    //   description: "Tus emails llegan a la bandeja principal, no al spam"
    // },
    {
      icon: "💬",
      title: t("Marketing.email-section.title-card-4"),
      description: t("Marketing.email-section.description-card-4")
    }
  ];

  const whatsappFeatures = [
    {
      icon: "💬",
      title: t("Marketing.whatsapp-section.tittle-card-1"),
      description: t("Marketing.whatsapp-section.description-card-1")
    },
    {
      icon: "📱",
      title: t("Marketing.whatsapp-section.tittle-card-2"),
      description: t("Marketing.whatsapp-section.description-card-2")
    },
    {
      icon: "👥",
      title: t("Marketing.whatsapp-section.tittle-card-3"),
      description: t("Marketing.whatsapp-section.description-card-3")
    },
    {
      icon: "📈",
      title: t("Marketing.whatsapp-section.tittle-card-4"),
      description: t("Marketing.whatsapp-section.description-card-4")
    }
  ];

  const benefits = [
    { icon: "💰", text: t("Marketing.header.card-1") },
    { icon: "🎯", text: t("Marketing.header.card-2") },
    { icon: "📱", text: t("Marketing.header.card-3") },
    { icon: "⏱️", text: t("Marketing.header.card-4") }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-[#0a0a0a] dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 font-semibold text-sm mb-6">
                📧 + 💬 {t("Marketing.header.little-tittle")}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                  {t("Marketing.header.tittle")}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t("Marketing.header.description")}
              </p>
              
              <div className="flex justify-center gap-4 mb-10">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-3"
                >
                  <span>{t("Marketing.header.button")}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
                
                {/* <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-300 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
                  <span>Ver Ejemplos Reales</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button> */}
              </div>
              
              {/* Beneficios rápidos */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="font-medium text-sm md:text-base">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <div className="aspect-video bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-700 flex flex-col items-center justify-center p-8">
                  <div className="flex gap-4 mb-4">
                    <div className="text-6xl">📧</div>
                    <div className="text-6xl">💬</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{t("Marketing.header.text-1")}</div>
                    <p className="text-cyan-100">{t("Marketing.header.text-2")}</p>
                  </div>
                </div>
              </div>
              
              {/* Stats flotantes */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">98%</span>
                  <span className="font-semibold text-sm">{t("Marketing.header.label-1")}</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">99%</span>
                  <span className="font-semibold text-sm">{t("Marketing.header.label-1")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Marketing Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col items-center  text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                {t("Marketing.email-section.tittle")}
              </span>
            </h2>
            <p className=" text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("Marketing.email-section.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emailFeatures.map((feature, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-transparent hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Marketing Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                {t("Marketing.whatsapp-section.tittle")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("Marketing.whatsapp-section.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatsappFeatures.map((feature, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-transparent hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Comparativa simple */}
          <div className={`mt-16 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-3xl p-8 text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              {t("Marketing.mix-section.tittle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6">
                <div className="text-3xl mb-4">📧</div>
                <h4 className="font-bold mb-2">
                  {t("Marketing.mix-section.tittle-card-1")}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("Marketing.mix-section.description-card-1")}
                </p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6">
                <div className="text-3xl mb-4">💬</div>
                <h4 className="font-bold mb-2">
                  {t("Marketing.mix-section.tittle-card-2")}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("Marketing.mix-section.description-card-2")}
                </p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6">
                <div className="text-3xl mb-4">🚀</div>
                <h4 className="font-bold mb-2">
                  {t("Marketing.mix-section.tittle-card-3")} 
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("Marketing.mix-section.description-card-3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className={`bg-gradient-to-r from-cyan-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("Marketing.contact-section.tittle")}
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("Marketing.contact-section.text-1")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-cyan-700 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3">
                <span>
                  {t("Marketing.contact-section.button-1")}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link to="/projects" className="cursor-pointer px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/10 flex items-center justify-center gap-3">
                <span>
                  {t("Marketing.contact-section.button-2")}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              {t("Marketing.contact-section.text-2")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketingPage;