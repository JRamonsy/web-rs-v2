import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const TermsPage = () => {
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

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            
            {/* Icono decorativo */}
            <div className="mb-8">
              <div className="inline-block p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl shadow-2xl">
                <div className="text-4xl">⚖️</div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Términos y Condiciones
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Información legal importante sobre el uso de nuestros servicios y la protección de tus datos.
            </p>
            
            {/* Fecha de última actualización */}
            <div className="mt-8 inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400">
              Última actualización: {new Date().toLocaleDateString('es-MX', { 
                year: 'numeric', 
                month: 'long', 
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
                    1. Aceptación de Términos
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Al acceder y utilizar los servicios de <span className="font-semibold text-cyan-600 dark:text-cyan-400">Juan Ramón Salas - Desarrollador Full Stack</span>, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte, te recomendamos no utilizar nuestros servicios.
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
                    2. Servicios Ofrecidos
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Ofrecemos los siguientes servicios digitales:
                  </p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span><strong>Sitios Web Corporativos:</strong> Desarrollo de sitios web profesionales para empresas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span><strong>Landing Pages:</strong> Páginas de alta conversión para emprendedores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span><strong>Tarjetas Digitales:</strong> Presentación profesional interactiva</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span><strong>Email & WhatsApp Marketing:</strong> Campañas de comunicación automatizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span><strong>Apps de Gestión:</strong> Sistemas personalizados para automatización</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sección 3: Propiedad Intelectual */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-2xl">©</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-white">
                    3. Propiedad Intelectual
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Todos los derechos reservados. El contenido de este sitio web, incluyendo pero no limitado a:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="font-semibold mb-2">📐 Diseños y Layout</div>
                      <p className="text-sm">Interfaz y experiencia de usuario</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="font-semibold mb-2">💻 Código Fuente</div>
                      <p className="text-sm">Estructura y funcionalidades</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="font-semibold mb-2">🎨 Contenido Gráfico</div>
                      <p className="text-sm">Logos, imágenes y elementos visuales</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="font-semibold mb-2">📝 Texto y Contenido</div>
                      <p className="text-sm">Descriptivos y materiales escritos</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    están protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción, distribución o modificación sin autorización expresa por escrito.
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
                    4. Privacidad y Protección de Datos
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Nos comprometemos a proteger tu privacidad. Toda la información personal que nos proporciones será tratada conforme a nuestra Política de Privacidad y la Ley Federal de Protección de Datos Personales en Posesión de Particulares.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-4 border border-cyan-200 dark:border-cyan-800">
                    <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">📋 Tus derechos incluyen:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-500">✓</span>
                        <span>Acceso a tus datos personales</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-500">✓</span>
                        <span>Rectificación de información</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-500">✓</span>
                        <span>Cancelación de uso</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-500">✓</span>
                        <span>Oposición al tratamiento</span>
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
                    5. Limitación de Responsabilidad
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Los servicios se ofrecen "tal cual" y según disponibilidad. No nos hacemos responsables por:
                  </p>
                  <ul className="space-y-3 mt-4 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Interrupciones temporales del servicio por mantenimiento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Daños indirectos o consecuenciales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Uso indebido de los servicios por parte del cliente</span>
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
                    6. Modificaciones a los Términos
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en esta página.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                    <div className="font-semibold mb-2">🔔 Te notificaremos sobre cambios importantes:</div>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">Actualización en el sitio web</span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">Correo electrónico</span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">Notificación en dashboard</span>
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
                    7. Contacto Legal
                  </h2>
                  <p className="mb-6 opacity-90">
                    Para cualquier consulta sobre estos términos o asuntos legales, puedes contactarnos a través de:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="font-semibold mb-2">📧 Correo Electrónico</div>
                      <div className="text-sm opacity-90">ramon.salaspi1.1@gmail.com</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="font-semibold mb-2">📍 Ubicación</div>
                      <div className="text-sm opacity-90">San Luis Potosí, México</div>
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
                <span>Volver al Inicio</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>
              
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Al navegar por este sitio, aceptas nuestros términos
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