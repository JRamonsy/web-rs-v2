import './App.css';
import NavBar from './components/NavBar';
import WhatsAppButton from './components/WhatsAppButton';
import { ThemeProvider, useDarkMode } from './context/ThemeContext';
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
import Footer from './components/Footer';
import { HomePage } from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { Route, Routes } from 'react-router-dom';
import WebSitePage from './pages/WebSitePage';
import LandingPage from './pages/LandingPage';
import EmailMarketingPage from './pages/EmailMarketingPage';
import AutomationAppsPage from './pages/AutomationAppsPage';
import NotFoundPage from './pages/NotFoundPage';

const Content = () => {
  const { darkMode } = useDarkMode();

  const [t] = useTranslation("global");

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_23jjiou", "template_7jprt4n", form.current, "im7-NDmbBPmaRhTg2").then(
      () => {
        alert("message sent sucessfully");
        form.current.reset();
      },
      (error) => {
        alert("failed to send message, please try again", error.text);
      }
    )
  }

  return (
    <div className=' flex flex-col min-h-screen w-full dark:bg-[#242424] dark:text-white relative '>

      <NavBar />

        <main className="flex-1 w-full flex flex-col items-center justify-start z-10">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />


          <Route path="/web-site" element={<WebSitePage/>} />
          <Route path="/landing-page" element={<LandingPage/>} />
          <Route path="/email-marketing-page" element={<EmailMarketingPage/>} />
          <Route path="/automation-apps-page" element={<AutomationAppsPage/>} />
          <Route path="*" element={<NotFoundPage/>} />

        </Routes>
        
      </main>
      <footer className="w-full relative z-50">
        <Footer />
      </footer>
      

    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
