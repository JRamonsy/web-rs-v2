import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const NavBar = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation("global");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto mejorado para controlar el scroll
  useEffect(() => {
    if (isOpenMenu) {
      // Guardar la posición actual del scroll
      const scrollY = window.scrollY;
      
      // Prevenir scroll en el body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Asegurar que el menú esté por encima del footer
      if (menuRef.current) {
        menuRef.current.style.zIndex = '9999';
      }
    } else {
      // Restaurar el scroll
      const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      // Restaurar posición del scroll
      if (scrollY) {
        window.scrollTo(0, scrollY);
      }
      
      // Restaurar z-index
      if (menuRef.current) {
        menuRef.current.style.zIndex = '40';
      }
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isOpenMenu]);

  const toggleLanguage = async () => {
    if (isChangingLanguage) return;
    
    setIsChangingLanguage(true);
    const button = document.querySelector("#language-btn");
    if (button) {
      button.classList.add("animate-pulse");
    }
    
    await new Promise(resolve => setTimeout(resolve, 300));
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    
    await new Promise(resolve => setTimeout(resolve, 200));
    if (button) {
      button.classList.remove("animate-pulse");
    }
    setIsChangingLanguage(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-[#242424]/95 backdrop-blur-xl shadow-2xl py-2' 
          : 'bg-transparent py-4'
      }`}>

        <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
          
          {/* Logo */}
          <div className="cursor-pointer transform transition-all duration-300 hover:scale-110">
            <Link to="/">
              <img 
                src={darkMode ? "/logo-RS-Dark-theme.png" : "/logo-RS-Light-theme.png"}
                alt="Logo" 
                className="rounded-2xl shadow-2xl w-14 md:w-16 transition-all duration-500 hover:shadow-3xl" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["/", "/projects", "/about", "/contact"].map((path, index) => (
              <Link
                key={path}
                to={path}
                className={`relative font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                  isActiveLink(path)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                }`}
              >
                {t(`Menu.${["home", "projects", "about", "contact"][index]}`)}
                {isActiveLink(path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            
            {/* Language Toggle */}
            <button
              id="language-btn"
              onClick={toggleLanguage}
              disabled={isChangingLanguage}
              className={`
                relative overflow-hidden
                bg-gradient-to-r from-blue-400 to-green-700 
                hover:from-blue-500 hover:to-green-700 
                text-white font-semibold px-4 py-2 rounded-2xl 
                transition-all duration-300 transform hover:scale-105 
                hover:shadow-2xl shadow-lg
                flex items-center justify-center gap-2 cursor-pointer
                ${isChangingLanguage ? "cursor-wait opacity-80" : ""}
              `}
            >
              {isChangingLanguage && (
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              )}
              
              <span className="relative">
                <span className={`block transition-all duration-300 ${
                  isChangingLanguage ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
                }`}>
                  {i18n.language === "es" ? "EN" : "ES"}
                </span>
                
                <span className={`absolute left-0 top-0 transition-all duration-300 ${
                  isChangingLanguage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}>
                  {i18n.language === "es" ? "..." : "..."}
                </span>
              </span>
              
              {isChangingLanguage && (
                <div className="ml-1 w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gradient-to-r from-gray-600 to-gray-700 dark:from-yellow-400 dark:to-orange-400 text-white dark:text-gray-800 font-bold p-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg cursor-pointer" 
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative group"
            >
              <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                isOpenMenu ? "rotate-45 translate-y-1" : "mb-2"
              } group-hover:bg-blue-500`} />
              <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                isOpenMenu ? "opacity-0" : "mb-2"
              } group-hover:bg-blue-500`} />
              <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                isOpenMenu ? "-rotate-45 -translate-y-1" : ""
              } group-hover:bg-blue-500`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - SEPARADO del nav para evitar conflictos con el footer */}
      <div 
        ref={menuRef}
        className={`fixed inset-0 md:hidden transition-all duration-500 ease-out ${
          isOpenMenu 
            ? "opacity-100 visible z-[9999]"  // Z-index muy alto
            : "opacity-0 invisible pointer-events-none z-40"
        }`}
      >
        
        {/* Fondo oscuro */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isOpenMenu 
              ? "backdrop-blur-xl bg-white/95 dark:bg-[#242424]/95" 
              : "backdrop-blur-none bg-transparent"
          }`}
          onClick={closeMenu}
        />
        
        {/* Contenido del menú - CON SCROLL INTERNO */}
        <div className={`relative z-[10000] h-full w-full flex flex-col transition-all duration-500 ease-out ${
          isOpenMenu ? "translate-y-0" : "-translate-y-10"
        }`}>
          
          {/* Cabecera del menú */}
          <div className="flex justify-between items-center p-6">
            {/* Logo en menú móvil */}
            <div className="cursor-pointer transform transition-all duration-300 hover:scale-110">
              <Link to="/" onClick={closeMenu}>
                <img 
                  src={darkMode ? "/logo-RS-Dark-theme.png" : "/logo-RS-Light-theme.png"}
                  alt="Logo" 
                  className="rounded-2xl shadow-2xl w-14 transition-all duration-500 hover:shadow-3xl" 
                />
              </Link>
            </div>
            
            {/* Botón de cerrar */}
            <button 
              onClick={closeMenu}
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors p-2"
            >
              ✕
            </button>
          </div>

          {/* Contenido desplazable - PARA EVITAR CONFLICTOS CON FOOTER */}
          <div className="flex-1 overflow-y-auto pb-32"> {/* pb-32 para espacio del footer */}
            
            {/* Enlaces del menú */}
            <div className="px-6 py-8">
              <ul className="flex flex-col items-center gap-8 text-2xl font-bold">
                {["/", "/projects", "/about", "/contact"].map((path, index) => (
                  <li key={path} className="w-full text-center">
                    <Link
                      to={path}
                      onClick={closeMenu}
                      className={`relative transition-all duration-300 hover:scale-110 inline-block py-3 px-4 ${
                        isActiveLink(path)
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                      }`}
                    >
                      {t(`Menu.${["home", "projects", "about", "contact"][index]}`)}
                      {isActiveLink(path) && (
                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Controles en móvil */}
            <div className="flex justify-center gap-4 mt-12 px-6">
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                disabled={isChangingLanguage}
                className={`
                  bg-gradient-to-r from-blue-500 to-purple-500 
                  text-white font-semibold px-6 py-4 rounded-2xl 
                  transition-all duration-300 transform hover:scale-105 
                  hover:shadow-2xl shadow-lg
                  flex items-center justify-center gap-2
                  ${isChangingLanguage ? "cursor-wait opacity-80" : ""}
                `}
              >
                <span className="text-lg">{i18n.language === "es" ? "EN" : "ES"}</span>
                {isChangingLanguage && (
                  <div className="ml-2 w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                )}
              </button>

              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  closeMenu();
                }}
                className="bg-gradient-to-r from-gray-600 to-gray-700 dark:from-yellow-400 dark:to-orange-400 text-white dark:text-gray-800 font-bold px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center gap-2"
              >
                <span className="text-lg">{darkMode ? "☀️" : "🌙"}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-8 mt-12 px-6">
              <a 
                href="#" 
                className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-800"
                onClick={closeMenu}
              >
                <FaFacebook className="text-blue-600 dark:text-blue-400 text-4xl" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-200 dark:hover:bg-red-800"
                onClick={closeMenu}
              >
                <TbBrandYoutubeFilled className="text-red-600 dark:text-red-400 text-4xl" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-pink-200 dark:hover:bg-pink-800"
                onClick={closeMenu}
              >
                <FaInstagram className="text-pink-600 dark:text-pink-400 text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;