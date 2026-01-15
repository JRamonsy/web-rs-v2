import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import { RsLogo } from "../components/RsLogo";
import Carousel from "../components/Carousel";
import { useState, useRef, useEffect } from "react";

export const HomePage = () => {
  const [t] = useTranslation("global");
  const [showLogo, setShowLogo] = useState(null);
  // const [spin, setSpin] = useState(null);
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
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

  // const handleMouseEnter = () => {
  //   setShowLogo(1);
  //   setSpin(1);
  // };

  // const handleMouseLeave = () => {
  //   setShowLogo(null);
  //   setSpin(null);
  //   setShowProjects(null);
  // };

  const hMouseEnter = () => {
    setShowProjects(true);
  };

  const hMouseLeave = () => {
    setShowProjects(false);
  };

  const hiMouseEnter = () => {
    setShowAbout(true);
  };

  const hiMouseLeave = () => {
    setShowAbout(false);
  };

  return (
    <div 
      ref={sectionRef}
      className="w-full min-h-screen relative dark:bg-[#0a0a0a] dark:text-white bg-gray-50 text-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Contenido Principal */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Logo Section con animaciones */}
        <div className={`w-full flex justify-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 mt-20' : 'opacity-0 -translate-y-10'
          }`}>
          <div className="relative">
            <div className="w-full h-[300px] md:h-[400px] flex justify-center items-center">
              {/* Cambia showLogo a true para que siempre esté grande, o déjalo como variable si quieres controlarlo */}
              <RsLogo showLogo={true} /> {/* Siempre grande */}
              {/* <RsLogo showLogo={showLogo} /> Si quieres controlarlo con hover */}
            </div>

            {/* Efectos decorativos alrededor del logo - Opcional */}
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full opacity-5 blur-2xl -z-10" />
          </div>
        </div>

        {/* Título Principal */}
        <section className={`w-full text-center mb-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 dark:from-cyan-400 dark:via-blue-400 dark:to-emerald-400 bg-clip-text text-transparent leading-tight">
            {t("Title.welcome")}
          </h1>
        </section>

        {/* Presentación */}
        <section className={`w-full max-w-4xl text-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-mono text-gray-700 dark:text-gray-300 text-xl md:text-2xl xl:text-3xl leading-relaxed">
            {t("Presentation.line-1")}{" "}
            <span
              className="cursor-pointer font-bold text-2xl md:text-3xl xl:text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 inline-block mx-1 hover:animate-pulse"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              RAMÓN SALAS,
            </span>
            <br />
            {t("Presentation.line-3")}
            <br />
            {t("Presentation.line-4")}
          </h2>
        </section>

        {/* Botones de Navegación */}
        <section className={`w-full flex justify-center gap-8 mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button
            className="relative group"
            onMouseEnter={hMouseEnter}
            onMouseLeave={hMouseLeave}
          >
            <Link 
              to="projects" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-3 border border-cyan-400/30"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {t("Btn-home.btn-projects")}
            </Link>
          </button>
          
          <button
            className="relative group"
            onMouseEnter={hiMouseEnter}
            onMouseLeave={hiMouseLeave}
          >
            <Link 
              to="about" 
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-3 border border-emerald-400/30"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {t("Btn-home.btn-about")}
            </Link>
          </button>
        </section>

        {/* Textos que aparecen al hover - Versión Mejorada */}
        <div className={`flex w-full max-w-4xl justify-around mb-12 transition-all duration-500 ${
          (showProjects || showAbout) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="w-[45%] flex justify-center">
            <h2
              className={`font-menu text-2xl md:text-3xl lg:text-4xl transition-all duration-500 ease-out ${
                showProjects 
                  ? "opacity-100 scale-105 text-cyan-600 dark:text-cyan-400" 
                  : "opacity-0 scale-95"
              }`}
            >
              {t("Projects-button.title")}
            </h2>
          </div>

          <div className="w-[45%] flex justify-center">
            <h2
              className={`font-menu text-2xl md:text-3xl lg:text-4xl transition-all duration-500 ease-out ${
                showAbout 
                  ? "opacity-100 scale-105 text-emerald-600 dark:text-emerald-400" 
                  : "opacity-0 scale-95"
              }`}
            >
              {t("About-button.title")}
            </h2>
          </div>
        </div>

        {/* Carrusel */}
        <div className={`w-full flex justify-center max-w-10xl transition-all duration-1000 delay-700 mb-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 '
        }`}>
          <Carousel />
        </div>
      </div>

      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float animation-delay-4000" />
      </div>

      {/* Partículas o elementos flotantes adicionales */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={i + 5}
            className="absolute w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full opacity-40 animate-float"
            style={{
              right: `${15 + i * 12}%`,
              bottom: `${20 + i * 8}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      {/* Grid de fondo tecnológico */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(12,12,12,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(12,12,12,0.8)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>
    </div>
  );
};