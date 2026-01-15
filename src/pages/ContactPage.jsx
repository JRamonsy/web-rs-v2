import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import { useRef, useState, useEffect } from 'react';
import WhatsAppButton from "../components/WhatsAppButton";

const ContactPage = () => {
  const [t] = useTranslation("global");
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
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

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm("service_23jjiou", "template_7jprt4n", form.current, "im7-NDmbBPmaRhTg2").then(
      () => {
        alert("Message sent successfully");
        form.current.reset();
        setIsSending(false);
      },
      (error) => {
        alert("Failed to send message, please try again", error.text);
        setIsSending(false);
      }
    );
  };

  return (
    <div ref={sectionRef} className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4">
      
      {/* Sección del Formulario */}
      <div className={`w-full max-w-6xl transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Header del Formulario */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            {t("Contact-page.title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 transform transition-all duration-500 hover:scale-x-150" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("Contact-page.subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Formulario */}
          <div className={`w-full lg:w-1/2 transition-all duration-500 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <form 
              ref={form} 
              onSubmit={sendEmail} 
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 transition-all duration-500 hover:shadow-3xl"
            >
              <div className="space-y-6">
                {/* Campo Nombre */}
                <div className="group">
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-3 text-lg transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {t("Contact-page.Form.name")}
                  </label>
                  <input 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                    type="text"
                    name="user_name"
                    required
                    placeholder={t("Contact-page.Form.your-name")}
                  />
                </div>

                {/* Campo Email */}
                <div className="group">
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-3 text-lg transition-all duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                    {t("Contact-page.Form.email")}
                  </label>
                  <input 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                    type="email"
                    name="user_email"
                    required
                    placeholder={t("Contact-page.Form.your-email")}
                  />
                </div>

                {/* Campo Asunto */}
                <div className="group">
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-3 text-lg transition-all duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    {t("Contact-page.Form.subject")}
                  </label>
                  <input 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                    type="text"
                    name="subject"
                    required
                    placeholder={t("Contact-page.Form.your-subject")}
                  />
                </div>

                {/* Campo Mensaje */}
                <div className="group">
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-3 text-lg transition-all duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                    {t("Contact-page.Form.message")}
                  </label>
                  <textarea 
                    className="w-full h-32 px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-800 transition-all duration-300 resize-none placeholder-gray-400 dark:placeholder-gray-500"
                    name="message"
                    required
                    placeholder={t("Contact-page.Form.your-message")}
                  />
                </div>

                {/* Botón de Envío */}
                <button 
                  type="submit"
                  disabled={isSending}
                  className={` cursor-pointer w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 ${
                    isSending ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t("Contact-page.Form.sending", "Enviando...")}
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {t("Contact-page.Form.send")}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Información de Contacto Alternativa */}
          <div className={`w-full lg:w-1/2 transition-all duration-500 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl h-full">
              
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {t("Contact-page.alternative-title", "Otras formas de contacto")}
              </h2>
              
              <div className="space-y-6">
                {/* WhatsApp Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.439"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {t("Contact-page.WhatsApp.title", "Chat Directo")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {t("Contact-page.WhatsApp.line-1")}
                      </p>
                    </div>
                  </div>
                  <WhatsAppButton />
                </div>

                {/* Email Directo */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {t("Contact-page.Email-direct.title")}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {t("Contact-page.Email-direct.line-1")}
                      </p>
                      <a href="mailto:tuemail@ejemplo.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {t("Contact-page.Email-direct.button")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Efectos de fondo decorativos */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float animation-delay-2000" />
        <div className="absolute top-3/4 left-1/3 w-40 h-40 bg-green-300 dark:bg-green-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-float animation-delay-4000" />
      </div>
    </div>
  );
};

export default ContactPage;