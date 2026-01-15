

const SaveInformationPage = () => {
  return (
    <div>

      <section className=' hidden bg-cyan-5000 h-auto pt-48  w-auto flex flex-col items-center justify-center 
            xl:pt-58'>

        <h1 className='text-slate-700 dark:text-slate-300 text-5xl text-center font-mono font-extrabold lg:text-9xl'>
          {t("Title.welcome")} <br /> STUDIO RS
        </h1>
      </section>

      <section className=" hidden bg-pink-5000 h-25 flex justify-center items-center text-center font-mono text-slate-700 dark:text-slate-300 lg:text-4xl lg:h-30">
        {/* Pantalla pequeña (4 líneas) */}
        <h2 className="whitespace-pre-line block lg:hidden">
          {t("Presentation.line-1")}{'\n'}
          JUAN RAMÓN SALAS,{'\n'}
          {t("Presentation.line-3")}{'\n'}
          {t("Presentation.line-4")}
        </h2>

        {/* Pantalla grande (2 líneas) */}
        <h2 className=" hidden whitespace-pre-line hidden lg:block">
          {t("Presentation.line-1")} JUAN RAMÓN SALAS,{'\n'}
          {t("Presentation.line-3")} {t("Presentation.line-4")}
        </h2>
      </section>

      <section className=' hidden bg-sky-500/500 h-25 flex m-6 justify-center items-center font-mono text-slate-700 font-bold dark:text-slate-300 lg:text-4xl lg:h-35'>
        <h3 className='text-center'>
          {t("Mtto.line-1")} <br />
          {t("Mtto.line-2")} <br />
          {t("Mtto.line-3")}
        </h3>
      </section>

      <section className=' hidden bg-indigo-5000 h-auto flex justify-center py-2'>
        <form ref={form} onSubmit={sendEmail} className='bg-[#d8d8d8] dark:bg-[#20232A] w-80 h-115 rounded-[15px] flex flex-col items-center shadow-xl/30 p-2 lg:w-150 lg:h-170'>
          <div className='flex flex-col items-center m-3'>
            <label className='text-slate-700 dark:text-slate-300 font-mono lg:text-3xl'>{t("Form.name")}</label>
            <input className='border border-slate-500 rounded-[5px] shadow-xl/30 lg:w-80 lg:h-10 px-2 ' type="text"
              name='user_name'
              required
              placeholder={t("Form.your-name")} />
          </div>
          <div className='flex flex-col items-center m-3'>
            <label className='text-slate-700 dark:text-slate-300 font-mono lg:text-3xl'>{t("Form.email")}</label>
            <input className='border border-slate-500 rounded-[5px] shadow-xl/30 lg:w-80 lg:h-10 px-2' type="email"
              name='user_email'
              required
              placeholder={t("Form.your-email")} />
          </div>
          <div className='flex flex-col items-center m-3'>
            <label className='text-slate-700 dark:text-slate-300 font-mono lg:text-3xl'>{t("Form.subject")}</label>
            <input className='border border-slate-500 rounded-[5px] shadow-xl/30 lg:w-80 lg:h-10 px-2' type="subject"
              name='subject'
              required
              placeholder={t("Form.your-subject")} />
          </div>
          <div className='flex flex-col items-center m-3'>
            <label className='text-slate-700 dark:text-slate-300 font-mono lg:text-3xl'>{t("Form.message")}</label>
            <textarea className='w-64 h-30 resize-none border border-slate-500 rounded-[5px] shadow-xl/30 lg:w-120 lg:h-50 px-2'
              type="text"
              name='message'
              required
              placeholder={t("Form.your-message")} />
          </div>
          <button className='bg-green-600 text-white dark:text-slate-300 font-mono rounded-lg px-4 m-2 cursor-pointer hover:bg-[#518304] lg:text-4xl lg:px-8 lg:m-4'>
            {t("Form.send")}
          </button>
        </form>
      </section>

      <section className=' hidden bg-sky-500/500 h-auto flex flex-col justify-center items-center font-mono text-slate-700 dark:text-slate-300 lg:text-4xl lg:h-50'>
        <div className='m-5'>
          <h3 className='text-center '>
            {t("WhatsApp.line-1")}
          </h3>
        </div>
        <WhatsAppButton />
      </section>

    <h5>
            Hola, Juan Ramón. Tu experiencia en la industria automotriz como ingeniero y supervisor es un gran diferenciador. Demuestra que no eres un principiante, sino un profesional con experiencia en procesos, eficiencia y resolución de problemas, habilidades muy valiosas en el desarrollo de software.
      Aquí tienes varias opciones de biografía, desde una más formal a una más creativa, para que elijas la que mejor se adapte al tono de tu portafolio.
      Opción 1: Directa y profesional
      "Soy Juan Ramón Salas, un ingeniero industrial mexicano con experiencia en la industria automotriz, donde optimicé procesos y dirigí equipos de trabajo. Esta sólida base me ha permitido hacer una transición exitosa al desarrollo web, aplicando mi enfoque analítico y mi visión de procesos en la creación de soluciones digitales eficientes. Mi proyecto más reciente es una aplicación full-stack para la gestión de mantenimiento de bombas industriales, donde desarrollé una base de datos, implementé funciones CRUD y digitalicé los procesos de trabajo de campo, eliminando el uso de papel."
      Opción 2: Enfocada en la transición de carrera
      "Después de una sólida trayectoria en la industria automotriz como ingeniero y supervisor de procesos, decidí canalizar mi pasión por la innovación hacia el desarrollo web. Soy Juan Ramón Salas, y mi experiencia en la optimización de flujos de trabajo me da una perspectiva única para crear aplicaciones y páginas web que no solo funcionan, sino que resuelven problemas reales. Mi proyecto más destacado es una aplicación full-stack que modernizó la gestión de mantenimiento en una empresa industrial, implementando digitalización de checklist, almacenamiento de evidencias fotográficas y generación de reportes en PDF."
      Opción 3: Creativa y orientada a resultados
      "Hola, soy Juan Ramón Salas. Como ingeniero industrial convertido en desarrollador web, mi enfoque está en la eficiencia y la funcionalidad. Tras años supervisando procesos en la exigente industria automotriz, ahora aplico esa mentalidad en el desarrollo de soluciones digitales robustas y escalables. Mi reciente proyecto full-stack, una aplicación para la gestión de mantenimiento industrial, es un claro ejemplo de cómo traduzco las necesidades operativas de una empresa en una herramienta digital potente que optimiza flujos de trabajo y genera valor tangible."
      Consejos para que la biografía cause un gran impacto
      Enfatiza la experiencia industrial: En tu portafolio, resalta cómo tus habilidades como ingeniero (análisis, optimización, gestión) te dan una ventaja única como desarrollador. Esto te diferencia de otros desarrolladores que solo tienen experiencia en programación.
      Destaca el proyecto: Tu proyecto full-stack para la empresa de mantenimiento es una prueba de que puedes manejar proyectos complejos de principio a fin. En el portafolio, dedica un espacio detallado a este proyecto para mostrar el proceso, las tecnologías y los resultados que lograste.
      Elige el tono: Escoge la opción que mejor refleje tu personalidad. Si quieres sonar más formal, ve con la opción 1; si buscas conectar con tu historia personal, usa la opción 2; y si quieres centrarte en el valor que aportas, la opción 3 es ideal.
    </h5>

    </div>
  )
}

export default SaveInformationPage
