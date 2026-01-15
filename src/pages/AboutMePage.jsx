import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
// Importa la imagen
import profileImg from "/imgs/profile.jpg"; // Ajusta la ruta según tu estructura
import { Link } from "react-router-dom";

const AboutMePage = () => {
  const [t] = useTranslation("global");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  return (
    <div 
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center py-20 px-4"
    >
      <section className="flex flex-col w-full max-w-6xl items-center xl:flex-row gap-12 xl:gap-16">
        
  {/* Imagen con importación directa */}
        <div className={`w-full xl:w-1/2 flex justify-center transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-10'
        }`}>
          <div className="relative group">
            {/* Usando la imagen importada */}
            <img 
              src={profileImg} 
              alt="Ramón Salas"
              className="w-full h-[400px] md:h-[500px] xl:h-[600px] object-cover rounded-[25px] shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
            />
            
            {/* Efectos decorativos */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[35px] opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10" />
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 dark:bg-blue-600 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-500 dark:bg-purple-600 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500" />
          </div>
        </div>

        {/* Contenido de texto */}
        <div className={`w-full xl:w-1/2 flex flex-col transition-all duration-1000 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-10'
        }`}>
          
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
            {/* Título con gradiente */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              {t("About-page.title")}
            </h1>

            {/* Línea divisora animada */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 transform origin-left transition-all duration-500 hover:scale-x-150" />

            {/* Descripción con mejor tipografía */}
            <blockquote className="text-lg md:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic font-light relative">
              <span className="absolute -left-6 -top-4 text-4xl text-blue-500 dark:text-blue-400 opacity-50"></span>
              {t("About-page.description")}
              <span className="absolute -right-4 -bottom-6 text-4xl text-purple-500 dark:text-purple-400 opacity-50"></span>
            </blockquote>

            {/* Información adicional (opcional) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {t("About-page.label-1")}
                </span>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {t("About-page.label-2")}
                </span>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {t("About-page.label-3")}
                </span>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {t("About-page.label-4")}
                </span>
              </div>
            </div>

            {/* Call to Action (opcional) */}
            <div className="flex gap-4 mt-8">
              <Link to="/Contact" >
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
                  {t("About-page.button-1")}
                </button>
              </Link>
              {/* <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:border-blue-500 hover:text-blue-500">
                {t("About-page.button-2")}
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Efectos de fondo decorativos */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float animation-delay-2000" />
      </div>
    </div>
  );
};

export default AboutMePage;