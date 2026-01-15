import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [t] = useTranslation("global");
  const [activeProject, setActiveProject] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Datos de servicios actualizados
    const services = [
    {
      id: 1,
      title: t("Services.website.title"),
      path: "/websites",
      color: "from-purple-500 to-violet-600",
      darkColor: "from-purple-600 to-violet-700",
      bgColor: "bg-purple-600",
      tech: [
        t("Tech.react"),
        t("Tech.tailwind"),
        t("Tech.seoAdvanced"),
        t("Tech.responsiveDesign"),
        t("Tech.i18n"),
        t("Tech.darkMode")
      ],
      description: t("Services.website.description"),
      image: "/imgs/Postgresql.png",
      features: t("Services.website.features", { returnObjects: true }),
      urlExterna: "#", 
      internalRoute: "/web-site", 
    },
    {
      id: 2,
      title: t("Services.landing.title"),
      path: "/landing-pages",
      color: "from-blue-500 to-cyan-600",
      darkColor: "from-blue-600 to-cyan-700",
      bgColor: "bg-blue-600",
      tech: [
        t("Tech.next"),
        t("Tech.cloudinary"),
        t("Tech.neon"),
        t("Tech.clerk"),
        t("Tech.seo"),
        t("Tech.responsive")
      ],
      description: t("Services.landing.description"),
      image: "/imgs/landing-pages.jpg",
      features: t("Services.landing.features", { returnObjects: true }),
      urlExterna: "#", // URL externa (si tienes demo)
      internalRoute: "/landing-page", // No hay ruta interna para este
    },
    {
      id: 3,
      title: t("Services.cards.title"),
      path: "/digital-cards",
      color: "from-emerald-500 to-green-600",
      darkColor: "from-emerald-600 to-green-700",
      bgColor: "bg-emerald-600",
      tech: [
        t("Tech.html5"),
        t("Tech.css3"),
        t("Tech.javascript"),
        t("Tech.animations"),
        t("Tech.qr")
      ],
      description: t("Services.cards.description"),
      image: "/imgs/digital-cards.jpg",
      features: t("Services.cards.features", { returnObjects: true }),
      urlExterna: "https://mexicodigitalcards.com", // ¡URL EXTERNA REAL!
      internalRoute: null,
    },
    {
      id: 4,
      title: t("Services.email.title"),
      path: "/email-marketing",
      color: "from-cyan-500 to-teal-600",
      darkColor: "from-cyan-600 to-teal-700",
      bgColor: "bg-cyan-600",
      tech: [
        t("Tech.next"),
        t("Tech.resend"),
        t("Tech.n8n"),
        t("Tech.reactEmail"),
        t("Tech.analytics")
      ],
      description: t("Services.email.description"),
      image: "/imgs/email-marketing.jpg",
      features: t("Services.email.features", { returnObjects: true }),
      urlExterna: "#", 
      internalRoute: "/email-marketing-page", 
    },
    {
      id: 5,
      title: t("Services.automation.title"),
      path: "/automation-apps",
      color: "from-orange-500 to-red-600",
      darkColor: "from-orange-600 to-red-700",
      bgColor: "bg-orange-600",
      tech: [
        t("Tech.next"),
        t("Tech.tailwind"),
        t("Tech.neon"),
        t("Tech.clerk"),
        t("Tech.chartjs"),
        t("Tech.api")
      ],
      description: t("Services.automation.description"),
      image: "/imgs/automation-apps.jpg",
      features: t("Services.automation.features", { returnObjects: true }),
      urlExterna: "#", // URL externa (si tienes demo)
      internalRoute: "/automation-apps-page", // No hay ruta interna para este
    }
  ];

  const activeService = services.find(service => service.id === activeProject);

  // Helper mejorado que PRIORIZA rutas internas
const getServiceLink = (service) => {
  if (!service) return { type: 'none', href: '#', label: t("Common.inDevelopment") };
  
  // 1. PRIORIDAD: Si tiene RUTA INTERNA válida
  if (service.internalRoute && service.internalRoute !== "#") {
    return {
      type: 'internal',
      href: service.internalRoute,
      label: t("Buttons.viewDetails"),
      icon: 'internal'
    };
  }
  
  // 2. Si NO tiene ruta interna pero tiene URL externa
  if (service.urlExterna && 
      service.urlExterna !== "#" && 
      service.urlExterna.startsWith('http')) {
    return {
      type: 'external',
      href: service.urlExterna,
      label: t("Buttons.seeDemo"),
      icon: 'external'
    };
  }
  
  // 3. Si no tiene nada
  return {
    type: 'contact',
    href: '/contact',
    label: t("Buttons.contact"),
    icon: 'contact'
  };
};

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

  // Iconos para tecnologías
  const getTechIcon = (tech) => {
  const icons = {
    // Frameworks & Libraries
    'React.js': '⚛️',
    'Next.js': '▲',
    'Tailwind CSS': '🌀',
    'Chart.js': '📈',
    
    // Backend & Databases
    'Neon DB': '💡',
    'PostgreSQL': '🐘',
    'Node.js': '🟢',
    'API Integration': '🔗',
    
    // Frontend Technologies
    'HTML5': '🅷',
    'CSS3': '🅲',
    'JavaScript': '🟨',
    'Animaciones CSS/JS': '✨',
    
    // Tools & Services
    'Cloudinary': '☁️',
    'Clerk Auth': '🔐',
    'Resend': '✉️',
    'n8n': '⚡',
    'React Email': '📨',
    'QR Generator': '📱',
    
    // Features
    'SEO': '🔍',
    'SEO Avanzado': '🎯',
    'Responsive': '📱',
    'Diseño Responsivo': '💻📱',
    'i18n': '🌍',
    'Dark Mode': '🌙',
    'Analytics': '📊'
  };
  
  return icons[tech] || '🛠️';
};


  return (
    <div 
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="flex flex-col w-full max-w-7xl items-center xl:flex-row xl:items-start gap-12 xl:gap-16">
        
        {/* Lista de Servicios - Lado Izquierdo */}
        <div className={`w-full xl:w-2/5 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="flex flex-col items-center xl:items-start">
            
            {/* Título */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-8 text-center xl:text-left ">
              {t("Projects-page.title")}
            </h2>
            
            {/* Línea divisora */}
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-5 transform origin-left transition-all duration-500 hover:scale-x-150" />

            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center xl:text-left max-w-md">
              {t("Projects-page.subtitle")}
            </p>

            {/* Lista de servicios */}
            <ul className="flex flex-col gap-6 w-full max-w-md">
              {services.map((service) => (
                <li key={service.id} className="relative group">
                  <div
                    className={`p-2 mt-4 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                      activeProject === service.id
                        ? `border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 shadow-2xl scale-105`
                        : `border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:shadow-lg`
                    }`}
                    onMouseEnter={() => setActiveProject(service.id)}
                  >
                    {/* Indicador activo */}
                    <div className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
                      activeProject === service.id 
                        ? `bg-gradient-to-r ${service.color} scale-125` 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`} />
                    
                    {/* Título del servicio */}
                    <h3 className={`text-xl font-semibold mb-2 transition-all duration-300 ${
                      activeProject === service.id
                        ? `bg-gradient-to-r ${service.color} bg-clip-text text-transparent`
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {service.title}
                    </h3>
                    
                    {/* Descripción breve */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    
                    {/* Tecnologías con iconos */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {service.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-all duration-300 hover:scale-110 flex items-center gap-1"
                          title={tech}
                        >
                          <span className="text-xs">{getTechIcon(tech)}</span>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vista Previa del Servicio - Lado Derecho */}
        <div className={`w-full xl:w-3/5 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="relative group">
            
            {/* Contenedor de la preview */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
              
              {/* Imagen del servicio */}
              <div 
                className="w-full h-[400px] md:h-[500px] xl:h-[600px] bg-cover bg-center transition-all duration-700 transform group-hover:scale-105"
                style={{
                  backgroundImage: `url(${activeService?.image || '/imgs/service-default.jpg'})`
                }}
              />
              
              {/* Overlay con gradiente */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-all duration-500`} />
              
              {/* Contenido overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="transform transition-all duration-500 translate-y-0 group-hover:translate-y-[-10px]">
                  
                  {/* Badge del servicio activo */}
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${activeService?.color} shadow-lg backdrop-blur-sm`}>
                    Servicio #{activeService?.id}
                  </span>
                  
                  {/* Título */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {activeService?.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-lg opacity-90 mb-4 max-w-2xl">
                    {activeService?.description}
                  </p>

                  {/* Características principales */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-cyan-200">Características:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      {activeService?.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 opacity-90">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                 {/* Botón de acción - Prioridad: 1. Ruta interna, 2. URL externa, 3. Contacto */}
{(() => {
  const activeService = services.find(s => s.id === activeProject);
  
  // 1. Si tiene RUTA INTERNA
  if (activeService?.internalRoute && activeService.internalRoute !== "#") {
    return (
      <Link 
        to={activeService.internalRoute}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white backdrop-blur-sm rounded-lg font-semibold transition-all duration-300 hover:from-purple-600 hover:to-violet-700 hover:scale-105 hover:shadow-xl border border-purple-400/50 shadow-lg"
      >
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {t("Buttons.viewDetails")}
        </span>
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    );
  }
  
  // 2. Si NO tiene ruta interna pero tiene URL EXTERNA
  if (activeService?.urlExterna && 
      activeService.urlExterna !== "#" &&
      activeService.urlExterna.startsWith('http')) {
    return (
      <a 
        href={activeService.urlExterna}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white backdrop-blur-sm rounded-lg font-semibold transition-all duration-300 hover:from-emerald-600 hover:to-green-700 hover:scale-105 hover:shadow-xl border border-emerald-400/50 shadow-lg"
      >
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          {t("Buttons.seeDemo")}
        </span>
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    );
  }
  
  // 3. Si no tiene ninguna de las dos
  return (
    <Link 
      to="/contact"
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white backdrop-blur-sm rounded-lg font-semibold transition-all duration-300 hover:from-blue-600 hover:to-cyan-700 hover:scale-105 hover:shadow-xl border border-blue-400/50 shadow-lg"
    >
      <span className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {t("Buttons.contact")}
      </span>
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
})()}
                  


                </div>
              </div>
            </div>

            {/* Efectos decorativos */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${activeService?.color} rounded-[35px] opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10`} />
            
            <div className={`absolute -bottom-6 -right-6 w-24 h-24 ${activeService?.bgColor} rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500`} />
            <div className={`absolute -top-6 -left-6 w-16 h-16 ${activeService?.bgColor} rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500`} />
          </div>
        </div>
      </div>

      {/* Efectos de fondo decorativos */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float animation-delay-2000" />
      </div>
    </div>
  );
};

export default ProjectsPage;