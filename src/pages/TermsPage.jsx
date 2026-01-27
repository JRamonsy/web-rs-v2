import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

const TermsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [t] = useTranslation("global");

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

  const cardTwoServices = [
    {
      title: t("Terms-page.section-2.service-1-title"),
      description: t("Terms-page.section-2.service-1-description")
    },
    {
      title: t("Terms-page.section-2.service-2-title"),
      description: t("Terms-page.section-2.service-2-description")
    },
    {
      title: t("Terms-page.section-2.service-3-title"),
      description: t("Terms-page.section-2.service-3-description")
    },
    {
      title: t("Terms-page.section-2.service-4-title"),
      description: t("Terms-page.section-2.service-4-description")
    },
    {
      title: t("Terms-page.section-2.service-5-title"),
      description: t("Terms-page.section-2.service-5-description")
    },
  ]

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-4 md:px-8 lg:px-16 ">
        <div className="max-w-7xl mx-auto ">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            
            {/* Icono decorativo */}
            <div className="mb-8">
              <div className="inline-block p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl shadow-2xl">
                <div className="text-4xl">⚖️</div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                {t("Terms-page.header.title")}
              </span>
            </h1>

            <div className="flex justify-center py-6" >
              <p className=" text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("Terms-page.header.description")}
              </p>
            </div>
            
            
            {/* Fecha de última actualización */}
            <div className=" inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400">
              {t("Terms-page.header.update")}
              {new Date().toLocaleDateString('es-MX', { 
                year: 'numeric', 
                month: 'numeric', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Sección 1: Aceptación de Términos */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-2xl">✅</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-white">
                    {t("Terms-page.section-1.title")}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("Terms-page.section-1.text-1")}
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                      {t("Terms-page.section-1.text-2")}
                    </span>
                    {t("Terms-page.section-1.text-3")}
                  </p>
                </div>
              </div>
            </div>

            {/* Sección 2: Servicios Ofrecidos */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-2xl">🚀</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-white">
                    {t("Terms-page.section-2.title")}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {t("Terms-page.section-2.description")}
                  </p>
                  {
                    cardTwoServices.map((cardTwoService, index ) => (
                    <div key={index} className="space-y-3 text-gray-600 dark:text-gray-300 py-1 " >
                      <p className="flex gap-2" >
                        <span className="text-cyan-500 mt-1" >
                          •
                        </span>
                        <strong>
                          {cardTwoService.title}
                        </strong>
                      {cardTwoService.description}
                      </p>
                    </div>
                    ))   
                  }
                </div>
              </div>
            </div>

            {/* Sección 3: Propiedad Intelectual */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-2xl">©</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-white">
                    {t("Terms-page.section-3.title")}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {t("Terms-page.section-3.text-1")}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="font-semibold mb-2">
                        📐 {t("Terms-page.section-3.card-1.title")}
                      </div>
                      <p className="text-sm">
                        {t("Terms-page.section-3.card-1.description")}
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="font-semibold mb-2">
                        💻 {t("Terms-page.section-3.card-2.title")}
                      </div>
                      <p className="text-sm">
                        {t("Terms-page.section-3.card-2.description")}
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="font-semibold mb-2">
                        🎨 {t("Terms-page.section-3.card-3.title")}
                      </div>
                      <p className="text-sm">
                        {t("Terms-page.section-3.card-3.description")}
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="font-semibold mb-2">
                        📝 {t("Terms-page.section-3.card-4.title")}
                      </div>
                      <p className="text-sm">
                       {t("Terms-page.section-3.card-4.description")}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("Terms-page.section-3.text-2")}
                  </p>
                </div>
              </div>
            </div>

            {/* Sección 4: Privacidad y Datos */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-2xl">🔒</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-white">
                    {t("Terms-page.section-4.title")}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {t("Terms-page.section-4.description")}
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-4 border border-cyan-200 dark:border-cyan-800">
                    <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                    📋 {t("Terms-page.section-4.card.title")}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-500">✓</span>
                        <span>
                          {t("Terms-page.section-4.card.text-1")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-500">✓</span>
                        <span>
                          {t("Terms-page.section-4.card.text-2")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-500">✓</span>
                        <span>
                          {t("Terms-page.section-4.card.text-3")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-500">✓</span>
                        <span>
                          {t("Terms-page.section-4.card.text-4")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección 5: Limitación de Responsabilidad */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-2xl">⚠️</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-white">
                    {t("Terms-page.section-5.title")}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("Terms-page.section-5.description")}
                  </p>
                  <ul className="space-y-3 mt-4 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>
                        {t("Terms-page.section-5.text-1")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>
                        {t("Terms-page.section-5.text-2")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>
                        {t("Terms-page.section-5.text-3")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>
                        {t("Terms-page.section-5.text-4")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sección 6: Modificaciones */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-2xl">📝</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-white">
                    {t("Terms-page.section-6.title")}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {t("Terms-page.section-6.description")}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                    <div className="font-semibold mb-2">
                      🔔 {t("Terms-page.section-6.card.description")}</div>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">
                        {t("Terms-page.section-6.card.text-1")}
                        </span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">
                        {t("Terms-page.section-6.card.text-2")}
                        </span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">
                        {t("Terms-page.section-6.card.text-3")}
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección 7: Contacto Legal */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 md:p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {t("Terms-page.contact-section.title")}
                  </h2>
                  <p className="mb-6 opacity-90">
                    {t("Terms-page.contact-section.text-1")}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="font-semibold mb-2">
                        📧 {t("Terms-page.contact-section.card-1.text-1")}
                      </div>
                      <div className="text-sm opacity-90">
                        {t("Terms-page.contact-section.card-1.text-2")}
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="font-semibold mb-2">
                        📍{t("Terms-page.contact-section.card-2.text-1")}
                      </div>
                      <div className="text-sm opacity-90">
                        {t("Terms-page.contact-section.card-2.text-2")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Botón de aceptación */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="inline-flex items-center gap-4">
              <Link
                to="/"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-3"
              >
                <span>
                  {t("Terms-page.contact-section.button")}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>
              
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {t("Terms-page.contact-section.text-2")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efectos de fondo */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float animation-delay-2000" />
      </div>
    </div>
  );
};

export default TermsPage;