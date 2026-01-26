
import { useTranslation } from "react-i18next";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  const [t] = useTranslation("global");

  const socialNetworks = [
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      iconColor: 'text-white'
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com//',
      color: 'from-pink-500 to-purple-500',
      hoverColor: 'hover:from-pink-600 hover:to-purple-600',
      iconColor: 'text-white'
    },
    {
      icon: TbBrandYoutubeFilled,
      url: 'https://www.youtube.com/',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
      iconColor: 'text-white'
    }
  ];

  const handleClickAlert = () => {
    alert(t("Footer.alert"))

  } 

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-white to-gray-100 dark:from-[#242424] dark:to-gray-900 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Social Networks Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-600 bg-clip-text text-transparent">
            {t("Footer.Networks")}
          </h2>
          
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap m-10">
            {socialNetworks.map((network, index) => {
              const IconComponent = network.icon;
              return (
                <a
                  key={index}
                  // href={network.url}
                  onClick={handleClickAlert}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative bg-gradient-to-r ${network.color} ${network.hoverColor} w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg`}
                >
                  <IconComponent className={`${network.iconColor} text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110`} />
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                © {currentYear} Ramón Salas. 
              </p>
              <Link to="/terms">
                <p className="hover:text-slate-500">
                  {t("Footer.text-1")}
                </p>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex gap-6 flex-wrap justify-center">
              {["/", "/projects", "/about", "/contact"].map((path, index) => (
                <a
                  key={path}
                  href={path}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {t(`Menu.${["home", "projects", "about", "contact"][index]}`)}
                </a>
              ))}
            </div>

            {/* Made With Love */}
            <div className="text-center md:text-right">
              <p className="text-gray-600 dark:text-gray-400 font-medium flex items-center gap-2 justify-center md:justify-end">
                {t("Footer.text-2")} 
                <Link to="/about" >
                  <p className="hover:text-slate-500" >
                    Ramón Salas
                  </p>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500" />
    </footer>
  );
};

export default Footer;