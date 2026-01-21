import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const AutomationAppsPage = () => {
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
      icon: "📊",
      title: t("Automation-app.characteristics-section.tittle-card-1"),
      description: t("Automation-app.characteristics-section.description-card-1")
    },
    {
      icon: "🤖",
      title: t("Automation-app.characteristics-section.tittle-card-2"),
      description: t("Automation-app.characteristics-section.description-card-2")
    },
    {
      icon: "🔔",
      title: t("Automation-app.characteristics-section.tittle-card-3"),
      description: t("Automation-app.characteristics-section.description-card-3")
    },
    {
      icon: "👥",
      title: t("Automation-app.characteristics-section.tittle-card-4"),
      description: t("Automation-app.characteristics-section.description-card-4")
    },
    {
      icon: "💾",
      title: t("Automation-app.characteristics-section.tittle-card-5"),
      description: t("Automation-app.characteristics-section.description-card-5")
    },
    {
      icon: "📈",
      title: t("Automation-app.characteristics-section.tittle-card-6"),
      description: t("Automation-app.characteristics-section.description-card-6")
    }
  ];

  const useCases = [
    { icon: "🏭",
      title: t("Automation-app.solution-section.tittle-card-1"), 
      description: t("Automation-app.solution-section.description-card-1")
     },
    { icon: "👥", 
      title: t("Automation-app.solution-section.tittle-card-2"), 
      description: t("Automation-app.solution-section.description-card-2")
     },
    { icon: "📋", 
      title: t("Automation-app.solution-section.tittle-card-3"), 
      description: t("Automation-app.solution-section.description-card-3")
     },
    { icon: "💰", 
      title: t("Automation-app.solution-section.tittle-card-4"), 
      description: t("Automation-app.solution-section.description-card-4")
     }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-[#0a0a0a] dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 font-semibold text-sm mb-6">
                🤖 {t("Automation-app.header.little-tittle")}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                  {t("Automation-app.header.tittle")}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t("Automation-app.header.description")}
              </p>
              
              <div className="flex justify-center gap-4 mb-10">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-3"
                >
                  <span>
                    {t("Automation-app.header.button")}
                  </span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
                
                {/* <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-orange-500 dark:border-orange-400 text-orange-600 dark:text-orange-300 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
                  <span>Demo Interactiva</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </button> */}
              </div>
              
              {/* Estadísticas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">70%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("Automation-app.header.card-1")}
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    {t("Automation-app.header.card-2-tittle")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("Automation-app.header.card-2")}
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("Automation-app.header.card-3")}
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">0</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("Automation-app.header.card-4")}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-orange-500 via-red-500 to-orange-700 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🤖</div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">📈</div>
                        <p className="text-orange-100 text-sm">
                          {t("Automation-app.header.label-1")}
                        </p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">🔔</div>
                        <p className="text-orange-100 text-sm">
                          {t("Automation-app.header.label-2")}
                        </p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">📊</div>
                        <p className="text-orange-100 text-sm">
                          {t("Automation-app.header.label-3")}
                        </p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">🤝</div>
                        <p className="text-orange-100 text-sm">
                          {t("Automation-app.header.label-4")}
                        </p>
                      </div>
                    </div>
                    <p className="text-orange-100">
                      {t("Automation-app.header.text-1")}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Tech badges */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">▲</span>
                  <span className="font-semibold">Next.js</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">📊</span>
                  <span className="font-semibold">Chart.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              {t("Automation-app.solution-section.tittle")}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-orange-500 dark:hover:border-orange-400 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-3xl mb-3">{useCase.icon}</div>
                <h4 className="font-bold mb-2 text-gray-800 dark:text-white">{useCase.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                {t("Automation-app.characteristics-section.tittle")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("Automation-app.characteristics-section.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-transparent hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
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
          <div className={`bg-gradient-to-r from-orange-600 to-red-700 rounded-3xl p-8 md:p-12 text-center text-white transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("Automation-app.contact-section.tittle")}
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90  mx-auto">
              {t("Automation-app.contact-section.text-1")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-orange-700 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3">
                <span>
                  {t("Automation-app.contact-section.button-1")}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link to="/projects" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/10 flex items-center justify-center gap-3">
                <span>
                  {t("Automation-app.contact-section.button-2")}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              {t("Automation-app.contact-section.text-2")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationAppsPage;