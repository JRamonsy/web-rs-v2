import { useEffect, useState } from "react";
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
  const [currentFlag, setCurrentFlag] = useState("🇲🇽");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Actualizar bandera según idioma
    setCurrentFlag(i18n.language === "es" ? "🇲🇽" : "🇺🇸");
  }, [i18n.language]);

  const toggleLanguage = async () => {
    if (isChangingLanguage) return;
    
    setIsChangingLanguage(true);
    
    // Cambiar bandera inmediatamente para feedback visual
    setCurrentFlag(i18n.language === "es" ? "🇺🇸" : "🇲🇽");
    
    // Animación de pulso
    const button = document.querySelector("#language-btn");
    if (button) {
      button.classList.add("animate-pulse");
    }
    
    // Pequeño delay para la animación
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Cambiar idioma
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    
    // Pequeño delay después del cambio
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Quitar animación y estado
    if (button) {
      button.classList.remove("animate-pulse");
    }
    setIsChangingLanguage(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
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
          
          {/* Language Toggle - MEJORADO */}
          <button
            id="language-btn"
            onClick={toggleLanguage}
            disabled={isChangingLanguage}
            className={`
              relative overflow-hidden
              bg-gradient-to-r from-blue-500 to-purple-500 
              hover:from-blue-600 hover:to-purple-600 
              text-white font-semibold px-4 py-2 rounded-2xl 
              transition-all duration-300 transform hover:scale-105 
              hover:shadow-2xl shadow-lg
              flex items-center justify-center gap-2
              min-w-[70px]
              ${isChangingLanguage ? "cursor-wait opacity-80" : ""}
            `}
          >
            {/* Indicador de cambio */}
            {isChangingLanguage && (
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            )}
            
            {/* Banderas animadas */}
            <span className={`text-xl transition-all duration-300 ${
              isChangingLanguage ? "scale-125" : "scale-100"
            }`}>
              {currentFlag}
            </span>
            
            {/* Texto con transición */}
            <span className="relative">
              <span className={`block transition-all duration-300 ${
                isChangingLanguage ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
              }`}>
                {i18n.language === "es" ? "EN" : "ES"}
              </span>
              
              {/* Texto que aparece durante la transición */}
              <span className={`absolute left-0 top-0 transition-all duration-300 ${
                isChangingLanguage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}>
                {i18n.language === "es" ? "..." : "..."}
              </span>
            </span>
            
            {/* Spinner durante el cambio */}
            {isChangingLanguage && (
              <div className="ml-1 w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            )}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gradient-to-r from-gray-600 to-gray-700 dark:from-yellow-400 dark:to-orange-400 text-white dark:text-gray-800 font-bold p-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
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

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out ${
        isOpenMenu 
          ? "opacity-100 visible backdrop-blur-xl" 
          : "opacity-0 invisible backdrop-blur-none"
      }`}>
        
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-white/95 dark:bg-[#242424]/95"
          onClick={() => setIsOpenMenu(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative z-50 h-full flex flex-col items-center justify-center transition-all duration-500 ${
          isOpenMenu ? "translate-y-0" : "-translate-y-10"
        }`}>
          
          <button 
            onClick={() => setIsOpenMenu(false)}
            className="absolute top-6 right-6 text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            ✕
          </button>

          <ul className="flex flex-col items-center gap-12 text-3xl font-bold">
            {["/", "/projects", "/about", "/contact"].map((path, index) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setIsOpenMenu(false)}
                  className={`relative transition-all duration-300 hover:scale-110 ${
                    isActiveLink(path)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  }`}
                >
                  {t(`Menu.${["home", "projects", "about", "contact"][index]}`)}
                  {isActiveLink(path) && (
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Controles en móvil */}
          <div className="flex gap-4 mt-12">
            <button
              onClick={toggleLanguage}
              disabled={isChangingLanguage}
              className={`
                bg-gradient-to-r from-blue-500 to-purple-500 
                text-white font-semibold px-6 py-3 rounded-2xl 
                transition-all duration-300 transform hover:scale-105 
                hover:shadow-2xl shadow-lg
                flex items-center gap-2
                ${isChangingLanguage ? "cursor-wait opacity-80" : ""}
              `}
            >
              <span className="text-xl">{currentFlag}</span>
              <span>{i18n.language === "es" ? "English" : "Español"}</span>
              {isChangingLanguage && (
                <div className="ml-2 w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              )}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gradient-to-r from-gray-600 to-gray-700 dark:from-yellow-400 dark:to-orange-400 text-white dark:text-gray-800 font-bold px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* Social Links in Mobile Menu */}
          <div className="flex gap-8 mt-16">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-800">
              <FaFacebook className="text-blue-600 dark:text-blue-400 text-xl" />
            </div>
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-200 dark:hover:bg-red-800">
              <TbBrandYoutubeFilled className="text-red-600 dark:text-red-400 text-xl" />
            </div>
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-pink-200 dark:hover:bg-pink-800">
              <FaInstagram className="text-pink-600 dark:text-pink-400 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;