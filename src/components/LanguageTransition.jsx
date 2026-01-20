import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageTransition = () => {
  const { i18n } = useTranslation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayTime, setDisplayTime] = useState(1800); // 1.8 segundos por defecto

  useEffect(() => {
    const handleLanguageChanged = () => {
      setIsTransitioning(true);
      
      // Opcional: tiempo diferente según la página
      const path = window.location.pathname;
      const time = path.includes('/projects') ? 2200 : 1800; // Más tiempo en proyectos
      setDisplayTime(time);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, time);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Overlay ajustable */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.50)', // 35% opacidad
          backdropFilter: 'blur(8px)' // Más blur
        }}
      ></div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce text-white">
            {i18n.language === 'es' ? 'ESPAÑOL' : 'ENGLISH'}
          </div>
          <div className="text-white font-bold text-xl mb-2">
            {i18n.language === 'es' ? 'Cambiando Idioma...' : 'changing language...'}
          </div>
          <div className="text-white/80">
            {/* Mostrando por {(displayTime / 1000).toFixed(1)}s */}
          </div>
          <div className='flex justify-center' >
            <img 
              src={"/logo-RS-Dark-theme.png"}
              alt="Logo" 
              className="rounded-2xl shadow-2xl w-14 md:w-16 transition-all duration-500 hover:shadow-3xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageTransition;