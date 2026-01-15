import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NotFoundPage = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Crear partículas flotantes
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden relative">
      {/* Partículas de fondo */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${3 / particle.speed}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Número 404 con efecto */}
          <div className="relative mb-8">
            <h1 className="text-[180px] md:text-[240px] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent leading-none">
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-20 blur-3xl -z-10"></div>
          </div>
          
          {/* Mensaje principal */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¡Ups! Página no encontrada
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            La página que estás buscando podría haber sido eliminada, haber cambiado de nombre o no estar disponible temporalmente.
          </p>
          
          {/* Icono animado */}
          <div className="mb-12">
            <div className="inline-block p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="text-6xl animate-bounce">🔍</div>
            </div>
          </div>
          
          {/* Sugerencias */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="font-bold mb-2">Ir al Inicio</h3>
              <p className="text-gray-400 text-sm">Regresa a la página principal</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-bold mb-2">Contactar Soporte</h3>
              <p className="text-gray-400 text-sm">Reporta este problema</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🔙</div>
              <h3 className="font-bold mb-2">Volver Atrás</h3>
              <p className="text-gray-400 text-sm">Regresa a la página anterior</p>
            </div>
          </div>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Ir al Inicio</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Volver Atrás</span>
            </button>
            
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contactar</span>
            </Link>
          </div>
          
          {/* Búsqueda */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div className="mt-12">
            <p className="text-gray-400 mb-4">Enlaces que podrían interesarte:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/projects" className="text-purple-300 hover:text-white transition-colors duration-300">
                Proyectos
              </Link>
              <Link to="/about" className="text-purple-300 hover:text-white transition-colors duration-300">
                Acerca de
              </Link>
              <Link to="/contact" className="text-purple-300 hover:text-white transition-colors duration-300">
                Contacto
              </Link>
              <Link to="/services/websites" className="text-purple-300 hover:text-white transition-colors duration-300">
                Sitios Web
              </Link>
              <Link to="/services/landing-pages" className="text-purple-300 hover:text-white transition-colors duration-300">
                Landing Pages
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Efectos decorativos */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
};

export default NotFoundPage;