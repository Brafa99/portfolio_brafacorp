import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";

function Contact() {

  const { language } = useLanguage();

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/59162454076?text=Hola%20Brayan,%20vi%20tu%20portfaolio%20y%20quiero%20contactarte para un proyecto."
    );
  };

  const handleEmail = () => {
    window.location.href =
      "mailto:brayanrafel28101999@gmail.com";
  };

  const handleCV = () => {
  const link = document.createElement("a");
  link.href = "/hoja_de_vida.pdf";
  link.download = "Brayan-Rafael-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section
      id="contacto"
      className="relative py-16 overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-5">
            {language === "es"
              ? "Contáctate conmigo"
              : "Contact With Me"}
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-8">

            {language === "es" ? (
              <>
                Construyamos Algo
                <span className="block text-cyan-400">
                  Increíble
                </span>
              </>
            ) : (
              <>
                Let's Build Something
                <span className="block text-cyan-400">
                  Amazing
                </span>
              </>
            )}

          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">

            {language === "es"
  ? "Disponible para colaborar en proyectos móviles y web, desarrollo de plataformas escalables, integraciones con inteligencia artificial y construcción de soluciones digitales modernas enfocadas en rendimiento, experiencia de usuario y resultados reales."
  : "Available to collaborate on mobile and web projects, scalable platform development, AI integrations, and building modern digital solutions focused on performance, user experience, and real-world results."}

          </p>

        </motion.div>

        {/* RIGHT - CONTACT VISUAL CARD (CLEAN + MINIMAL 3D ICON) */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative"
>

  <div className="relative bottom-10 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-10 overflow-hidden min-h-[520px]">

    {/* BACK GLOWS */}
    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-yellow-500/10 blur-[120px]" />

    {/* FLOATING 3D CONTACT ICON */}
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute top-6 right-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-yellow-400/10 border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-xl"
    >
      <div className="text-center">
        <div className="text-2xl">📨</div>
        <p className="text-[10px] text-cyan-400 font-bold mt-1">
          CONTACT
        </p>
      </div>
    </motion.div>

    {/* TITLE */}
    <div className="relative z-10">
      <h3 className="text-3xl font-black mb-4">
        {language === "es"
  ? "Contacto Directo"
  : "Direct & Professional Contact"}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-10">
        {language === "es"
  ? "Puedes elegir el canal que prefieras para comunicarte conmigo. Respondo de forma rápida y clara, manteniendo siempre una comunicación profesional. Estoy disponible para proyectos digitales, colaboraciones técnicas y desarrollo de soluciones modernas con enfoque en calidad y resultados."
  : "You can choose the channel that best suits you to contact me. I respond quickly and clearly, always maintaining professional communication. I’m available for digital projects, technical collaborations, and building modern solutions focused on quality and results."}
      </p>
    </div>

    {/* CONTACT BUTTONS (UNCHANGED UX, CENTERED WIDTH) */}
    <div className="space-y-5 flex flex-col items-center">

      <div className="w-full max-w-md">

        {/* WHATSAPP */}
        <button
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-between px-6 py-5 rounded-3xl bg-green-500/10 border border-green-400/20 hover:border-green-400 hover:-translate-y-1 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-green-400/10 flex items-center justify-center text-green-400 text-2xl">
              <FaWhatsapp />
            </div>

            <div className="text-left">
              <p className="font-semibold text-white">WhatsApp</p>
              <span className="text-gray-400 text-sm">
                +59162454076
              </span>
            </div>
          </div>

          <FaPaperPlane className="text-green-400 group-hover:translate-x-1 transition-all duration-300" />
        </button>

        {/* EMAIL */}
        <button
          onClick={handleEmail}
          className="w-full flex items-center justify-between px-6 py-5 rounded-3xl bg-cyan-500/10 border border-cyan-400/20 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 group mt-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-2xl">
              <FaEnvelope />
            </div>

            <div className="text-left">
              <p className="font-semibold text-white">Email</p>
              <span className="text-gray-400 text-sm">
                brayanrafel28101999@gmail.com
              </span>
            </div>
          </div>

          <FaPaperPlane className="text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
        </button>

        {/* CV */}
        <button
          onClick={handleCV}
          className="w-full flex items-center justify-between px-6 py-5 rounded-3xl bg-yellow-500/10 border border-yellow-400/20 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300 group mt-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-2xl">
              <FaDownload />
            </div>

            <div className="text-left">
              <p className="font-semibold text-white">
                CV / Resume
              </p>

              <span className="text-gray-400 text-sm">
                {language === "es"
                  ? "Descargar Curriculum"
                  : "Download Resume"}
              </span>
            </div>
          </div>

          <FaPaperPlane className="text-yellow-400 group-hover:translate-x-1 transition-all duration-300" />
        </button>

      </div>

    </div>

    {/* FOOT NOTE */}
    <div className="mt-10 text-center relative z-10">
      <p className="text-gray-500 text-sm">
        {language === "es"
          ? "Respuesta en menos de 24 horas"
          : "Response within 24 hours"}
      </p>
    </div>

  </div>
</motion.div>

      </div>
    </section>
  );
}

export default Contact;