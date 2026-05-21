import { motion } from "framer-motion";
import logo from "../assets/2.png";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { language } = useLanguage();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-[#02050f]">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cyan-500/5 to-transparent" />
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-10 border-b border-white/10">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black mb-4"
            >

              {language === "es" ? (
                <>
                  BrafaCorp
                  <span className="text-cyan-400 block">
                    Soluciones Digitales
                  </span>
                </>
              ) : (
                <>
                  Building
                  <span className="text-cyan-400 block">
                    Digital Experiences
                  </span>
                </>
              )}

            </motion.h3>

            <p className="text-gray-400/80 max-w-lg leading-relaxed text-sm md:text-base">
  {language === "es"
    ? "Tecnología, diseño y visión estratégica fusionados para construir productos digitales modernos."
    : "Technology, design and strategic vision combined to build modern digital products."}
</p>

          </div>

          {/* RIGHT - BIG BRAND LOGO */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="
  relative
  flex
  items-center
  justify-center
  lg:justify-end
  w-full
  lg:pr-14
"
>

  {/* MAIN GLOW */}
  <div className="absolute w-[320px] h-[320px] bg-cyan-400/10 blur-[120px] rounded-full" />

  {/* SECOND GLOW */}
  <div className="absolute w-[240px] h-[240px] bg-blue-500/10 blur-[90px] rounded-full" />

  {/* ROTATING OUTER RING */}
  <motion.div
    animate={{
      rotate: [0, 360],
    }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-[260px] h-[260px] rounded-[40px] border border-cyan-400/15"
  />

  {/* ROTATING INNER RING */}
  <motion.div
    animate={{
      rotate: [360, 0],
    }}
    transition={{
      duration: 16,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute w-[220px] h-[220px] rounded-[35px] border border-white/10"
  />

  {/* BRAND CARD */}
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    className="
      relative z-10
      w-[260px]
      sm:w-[320px]
      h-[140px]
      sm:h-[170px]
      rounded-[36px]
      bg-white/5
      border border-white/10
      backdrop-blur-2xl
      flex items-center justify-center
      overflow-hidden
      shadow-[0_0_70px_rgba(34,211,238,0.18)]
    "
  >

    {/* LIGHT EFFECT */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-60" />

    {/* LOGO */}
    <img
      src={logo}
      alt="logo"
      className="
  relative z-10
  w-[240px]
  sm:w-[300px]
  lg:w-[360px]
  object-contain
  drop-shadow-[0_0_35px_rgba(34,211,238,0.55)]
"
    />

  </motion.div>


</motion.div>

        </div>

        {/* CENTER MINI INFO */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8"> */}

        

 {/* <div className="flex items-center gap-3 text-gray-400 text-sm"> */}

            {/* <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

            <span>
              {language === "es"
                ? "Disponible para trabajos remotos desde cualquier parte."
                : "Available for all countries for remote projects"}
            </span> */}

          {/* </div> */}

        {/* </div> */}

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-6">

          <p className="text-gray-500 text-sm text-center leading-relaxed">

            © 2025 Brayan Rafael Condori Chambi.

            {" "}

            {language === "es"
              ? "Todos los derechos reservados."
              : "All rights reserved."}

              {" "}

            {language === "es"
              ? "LA PAZ - BOLIVIA."
              : "LA PAZ - BOLIVIA."}

          </p>

          {/* BACK TO TOP */}
          <button
            onClick={scrollTop}
            className="group flex items-center gap-3 mt-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-300"
          >

            <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-all duration-300">

              {language === "es"
                ? "Volver arriba"
                : "Back to top"}

            </span>

            <div className="w-8 h-8 rounded-full bg-cyan-400 text-black flex items-center justify-center group-hover:-translate-y-1 transition-all duration-300">

              <FaArrowUp />

            </div>

          </button>

        </div>

      </div>

    </footer>
    
  );
}

export default Footer;