import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "../context/LanguageContext";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAndroid,
  FaGithub,
  FaArrowDown
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
  SiSwift,
  SiJavascript,
  SiKotlin,
  SiPhp
} from "react-icons/si";

import pic2 from "../assets/pic9.png";

function Hero() {
  const { language } = useLanguage();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const FloatingIcon = ({ icon, color }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3.5, repeat: Infinity }}
    className="bg-[#0f172a] border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-xl"
  >
    <div className={`${color} text-4xl`}>
      {icon}
    </div>
  </motion.div>
);

  // Floating icon config (REUTILIZABLE + control de posiciones)
  const floatingIcons = [
    { icon: <SiFlutter />, color: "text-cyan-400", pos: "top-6 left-6" },
    { icon: <SiFirebase />, color: "text-yellow-400", pos: "bottom-10 left-2" },
    { icon: <FaReact />, color: "text-cyan-300", pos: "top-16 right-6" },
    { icon: <FaNodeJs />, color: "text-green-400", pos: "bottom-6 right-10" },
    { icon: <SiTailwindcss />, color: "text-cyan-400", pos: "top-1/2 -right-10" },
    { icon: <FaPython />, color: "text-yellow-300", pos: "bottom-1/3 -left-10" },
    { icon: <FaJava />, color: "text-orange-400", pos: "top-10 left-1/2" },
    { icon: <FaAndroid />, color: "text-green-400", pos: "bottom-1/4 right-1/3" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* BACKGROUNDS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-5">
            {language === "es"
              ? "Desarrollador Informático"
              : "Full Stack & Mobile Developer"}
          </p>

          <h1 className="text-5xl md:text-5xl font-black leading-tight mb-6">
            {language === "es" ? (
              <>
                Construyendo
                <span className="block text-cyan-400">Experiencias Digitales</span>
                Modernas
              </>
            ) : (
              <>
                Building
                <span className="block text-cyan-400">Modern Digital</span>
                Experiences
              </>
            )}
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8 h-[60px]">
            <TypeAnimation
  key={language}
  sequence={[
    language === "es" ? "Desarrollador Móvil" : "Mobile Developer",
    2000,
    language === "es" ? "Desarrollador Front end" : "Front-end Developer",
    2000,
    language === "es" ? "Automatizaciones con IA" : "AI Integrations",
    2000,
    language === "es" ? "Desarrollador Backend" : "Back-end Developer",
    2000,
    language === "es" ? "Experto Firebase y SQL" : "Firebase and SQL Expert",
    2000,
    language === "es" ? "Código limpio" : "Clean Code",
    2000,
  ]}
  speed={50}
  repeat={Infinity}
/>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
            {language === "es"
              ? "Desarrollo aplicaciones móviles y plataformas web modernas enfocadas en rendimiento, arquitectura escalable, automatización, experiencia de usuario premium e integración con inteligencia artificial."
              : "I build modern mobile and web applications focused on performance, scalable architecture, automation, premium UX and AI integration."}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">
            <button
              onClick={() => scrollToSection("proyectos")}
              className="px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 hover:shadow-[0_0_30px_#22d3ee] transition-all duration-300"
            >
              {language === "es" ? "Ver Proyectos" : "View Projects"}
            </button>

            <button
              onClick={() => scrollToSection("contacto")}
              className="px-8 py-4 rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              {language === "es" ? "Contáctame" : "Contact Me"}
            </button>
          </div>

          {/* STATS */}
          <div className="relative grid grid-cols-3 gap-5 mt-14">
            {[
              { number: "14+", label: language === "es" ? "Proyectos" : "Projects" },
              { number: "10+", label: language === "es" ? "Tecnologías" : "Technologies" },
              { number: "5+", label: language === "es" ? "Años Exp." : "Years Exp." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center"
              >
                <h2 className="text-3xl font-bold text-cyan-400">{item.number}</h2>
                <p className="text-gray-400 text-sm mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, x: 70 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative flex flex-col items-center justify-center"
>

  {/* IMAGE + FLOATING SYSTEM WRAPPER */}
  <div className="relative flex justify-center items-center">

    {/* IMAGE CARD */}
    <div className="relative w-[300px] sm:w-[340px] lg:w-[400px] h-[420px] sm:h-[460px] lg:h-[520px] translate-y-6 lg:translate-y-10 rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(34,211,238,0.15)]">

      <img
        src={pic2}
        className="w-full h-full object-cover"
        alt="profile"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />

      <div className="absolute bottom-3 left-0 p-6 z-10">
        <p className="text-cyan-300 text-sm uppercase tracking-[4px]">
           {language === "es" ? "Desarrollador de sistemas" : "Software Developer"}
        </p>
        <h2 className="text-2xl font-black text-white">Brayan Rafael Condori Chambi</h2>
        <h2 className="text-2xl font-black text-white"></h2>
      </div>

    </div>

    {/* FLOATING ICONS (HALO ORBIT SYSTEM - NO OVERLAP) */}
    <div className="absolute inset-0 pointer-events-none">

      {/* TOP */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-5">
        <FloatingIcon icon={<SiFlutter />} color="text-cyan-400" />
        <FloatingIcon icon={<SiFirebase />} color="text-yellow-400" />
        <FloatingIcon icon={<FaReact />} color="text-cyan-300" />
      </div>

      {/* BOTTOM */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-5">
        <FloatingIcon icon={<FaNodeJs />} color="text-green-400" />
        <FloatingIcon icon={<SiTailwindcss />} color="text-white" />
        <FloatingIcon icon={<SiPhp />} color="text-cyan-400" />
      </div>

      {/* LEFT */}
      <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 flex flex-col gap-5">
        <FloatingIcon icon={<FaJava />} color="text-orange-400" />
        <FloatingIcon icon={<FaPython />} color="text-yellow-300" />
        <FloatingIcon icon={<SiJavascript />} color="text-green-300" />

      </div>

      {/* RIGHT */}
      <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 flex flex-col gap-5">
        <FloatingIcon icon={<FaAndroid />} color="text-green-300" />
        <FloatingIcon icon={<SiSwift />} color="text-orange-300" />
        <FloatingIcon icon={<SiKotlin />} color="text-pink-400" />
      </div>

    </div>

  </div>
<p className="text-cyan-400 uppercase tracking-[4px] text-xs mb-4">
      </p>
      
  {/* ABOUT TEXT (BELOW IMAGE + HALO) */}
  <div className="mt-16 lg:mt-20 w-full max-w-[420px]">

    <div className="border-l border-cyan-400/40 pl-5 mb-6">
      <p className="text-cyan-400 uppercase tracking-[4px] text-xs mb-2">
        {language === "es" ? "Sobre mí" : "About me"}
      </p>

      <p className="text-gray-400 text-sm leading-relaxed">
        {language === "es"
          ? "Me considero una persona lógica, curiosa e insistente para desarrollar los sistemas webs y móviles de la manera más óptima posible. Enfoque en resolución de problemas complejos, arquitectura escalable y desarrollo de software de alto rendimiento. Mentalidad de ingeniería enfocada en impacto real, modernidad, eficiencia y sistemas robustos."
          : "I consider myself as a logical, curious, and persistent person when it comes to developing web and mobile systems in the most optimal way possible. Focused on solving complex problems, scalable architecture and high-performance software development. Engineering mindset focused on real impact, modernity, efficiency and robust systems."}
      </p>
    </div>

  </div>

</motion.div>

    
      </div>


    </section>
  );
}

export default Hero;