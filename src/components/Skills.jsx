import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "../context/LanguageContext";
import { useRef, useEffect } from "react";

import {
  FaMobileAlt,
  FaReact,
  FaBrain,
  FaPalette,
  FaServer,
  FaCloud,
} from "react-icons/fa";

const createSkillsData = (language) => [
  {
    icon: <FaMobileAlt />,

    title:
      language === "es"
        ? "Desarrollo Mobile"
        : "Mobile Development",

    description:
      language === "es"
        ? "Aplicaciones móviles multiplataforma y nativas enfocadas en rendimiento, arquitectura moderna y experiencia premium."
        : "Cross-platform and native mobile applications focused on performance, modern architecture and premium experience.",

    skills: [
      { name: "Flutter", level: 90 },
      { name: "Firebase", level: 89 },
      {
        name:
          language === "es"
            ? "Nativo (Java/Kotlin/Swift/Swift UI)"
            : "Native (Java/Kotlin/Swift)",
        level: 85,
      },
      { name: "React Native", level: 82 },
    ],

    tags:
      language === "es"
        ? [
            "Play Store",
            "App Store",
            "GPS en Tiempo Real",
            "Notificaciones Push",
            "Arquitectura Escalable",
          ]
        : [
            "Play Store",
            "App Store",
            "Realtime GPS",
            "Push Notifications",
            "Scalable Architecture",
          ],
  },

  {
    icon: <FaReact />,

    title:
      language === "es"
        ? "Desarrollo Web"
        : "Web Development",

    description:
      language === "es"
        ? "Plataformas web modernas, dashboards y SPAs optimizadas para escalabilidad y rendimiento."
        : "Modern web platforms, dashboards and SPAs optimized for scalability and performance.",

    skills: [
      { name: "React", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 82 },
      {
        name:
          language === "es"
            ? "Hosting & Deploy"
            : "Hosting & Deploy",
        level: 84,
      },
    ],

    tags:
      language === "es"
        ? [
            "Responsive Design",
            "Dashboards",
            "APIs REST",
            "Cloud Hosting",
            "Vite",
          ]
        : [
            "Responsive Design",
            "Dashboards",
            "REST APIs",
            "Cloud Hosting",
            "Vite",
          ],
  },

  {
    icon: <FaBrain />,

    title:
      language === "es"
        ? "IA & Automatización"
        : "AI & Automation",

    description:
      language === "es"
        ? "Integraciones inteligentes con IA, automatización de procesos y sistemas modernos con respuestas dinámicas."
        : "Intelligent AI integrations, automation workflows and modern systems with dynamic responses.",

    skills: [
      { name: "Gemini AI", level: 88 },
      { name: "OpenAI APIs", level: 85 },
      {
        name:
          language === "es"
            ? "Prompt Engineering"
            : "Prompt Engineering",
        level: 84,
      },
      {
        name:
          language === "es"
            ? "Automatización"
            : "Automation",
        level: 80,
      },
    ],

    tags:
      language === "es"
        ? [
            "AI Stylist",
            "IA en Tiempo Real",
            "Recomendaciones Inteligentes",
            "Integraciones IA",
            "Automatización",
          ]
        : [
            "AI Stylist",
            "Realtime AI",
            "Smart Recommendations",
            "AI Integrations",
            "Automation",
          ],
  },

  {
    icon: <FaPalette />,

    title:
      language === "es"
        ? "UI/UX Premium"
        : "Premium UI/UX",

    description:
      language === "es"
        ? "Interfaces modernas con animaciones avanzadas, glassmorphism y experiencias visuales premium."
        : "Modern interfaces with advanced animations, glassmorphism and premium visual experiences.",

    skills: [
      { name: "UI Design", level: 90 },
      { name: "Framer Motion", level: 88 },
      { name: "UX Experience", level: 86 },
      {
        name:
          language === "es"
            ? "Animaciones"
            : "Animations",
        level: 90,
      },
    ],

    tags:
      language === "es"
        ? [
            "Glassmorphism",
            "Motion UI",
            "Dark UI",
            "Interfaces Premium",
            "Micro Interacciones",
          ]
        : [
            "Glassmorphism",
            "Motion UI",
            "Dark UI",
            "Premium Interfaces",
            "Micro Interactions",
          ],
  },
];

function Skills() {
  const { language } = useLanguage();
  const skillsData = createSkillsData(language);

  const scrollRef = useRef(null);

useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  const onWheel = (e) => {
    const isScrollable = el.scrollWidth > el.clientWidth;

    if (!isScrollable) return;

    // SOLO activar horizontal scroll si hay intención horizontal
    const atStart = el.scrollLeft === 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    // si está en extremos, NO bloquear scroll vertical de la página
    if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) {
      return;
    }

    // solo intercepta cuando realmente hay contenido horizontal
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  };

  el.addEventListener("wheel", onWheel, { passive: false });

  return () => el.removeEventListener("wheel", onWheel);
}, []);

  return (
    <section
      id="habilidades"
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
  ? "Habilidades Profesionales"
  : "Professional Skills"}
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-8">

  {language === "es" ? (
    <>
      Soluciones Digitales
      <span className="block text-cyan-400">
        Modernas & Escalables
      </span>
    </>
  ) : (
    <>
      Modern & Scalable
      <span className="block text-cyan-400">
        Digital Solutions
      </span>
    </>
  )}

</h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">

  {language === "es"
    ? "Desarrollo aplicaciones móviles, plataformas web e integraciones inteligentes enfocadas en rendimiento, experiencia de usuario y automatización."
    : "I develop mobile applications, web platforms and intelligent integrations focused on performance, user experience and automation."}

</p>

        </motion.div>

        {/* SKILLS HORIZONTAL SCROLL */}
<div className="relative">

  {/* FADE LEFT */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#050816] to-transparent" />

  {/* FADE RIGHT */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#050816] to-transparent" />

  {/* SCROLL CONTAINER */}
  <div
    
    className="flex gap-6 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory"
  >

    {skillsData.map((card, index) => (
      <div
        key={index}
        className="min-w-[88%] sm:min-w-[70%] lg:min-w-[38%] xl:min-w-[32%] snap-start"
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.15}
          scale={1.02}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 overflow-hidden group hover:border-cyan-400/50 transition-all duration-500"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-400" />

            <div className="relative z-10">

              {/* ICON */}
              <div className="w-18 h-18 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-4xl mb-6 group-hover:scale-110 transition-all duration-500">
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-black mb-3">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed mb-8">
                {card.description}
              </p>

              {/* SKILL BARS */}
              <div className="space-y-5 mb-8">

                {card.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>

                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </p>
                      <span className="text-cyan-400 text-sm font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                    </div>

                  </div>
                ))}

              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">

                {card.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>
        </Tilt>
      </div>
    ))}

  </div>

</div>

       {/* EXTRA SECTION */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="mt-16"   // 👈 menos separación (mejor integración con Skills)
>
  <div className="relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-[40px] p-12 overflow-hidden">

    {/* BACK GLOW */}
    <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-cyan-500/10 blur-[120px]" />

    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT TEXT */}
      <div>

        <p className="uppercase tracking-[7px] text-cyan-400 text-sm mb-10">
          {language === "es" ? "¿Por qué trabajar conmigo?" : "Why work with me?"}
        </p>

        <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          {language === "es" ? (
            <>
              Resolución de Problemas &
              <span className="block text-cyan-400">Arquitectura de Software</span>
            </>
          ) : (
            <>
              Problem Solving &
              <span className="block text-cyan-400">Software Architecture</span>
            </>
          )}
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed">
          {language === "es"
            ? "Diseño soluciones escalables con enfoque en rendimiento, calidad de código y sistemas robustos. Transformo problemas complejos en arquitecturas limpias y eficientes orientadas a resultados reales."
            : "I design scalable solutions focused on performance, code quality and robust systems. I transform complex problems into clean, efficient architectures oriented to real outcomes."}
        </p>

      </div>

      {/* RIGHT CORE VISUAL */}
      <div className="relative flex items-center justify-center min-h-[500px]">

        {/* ORBIT LAYERS */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute w-[320px] h-[320px] rounded-full border border-cyan-400/20"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute w-[240px] h-[240px] rounded-full border border-yellow-400/20"
        />

        {/* CENTER CORE */}
        <div className="relative z-20 w-44 h-44 rounded-full bg-gradient-to-br from-yellow-400 to-cyan-400 flex items-center justify-center shadow-[0_0_80px_rgba(250,204,21,0.35)]">

          <div className="w-36 h-36 rounded-full bg-[#050816] flex items-center justify-center border border-white/10">
            <FaBrain className="text-6xl text-yellow-400 animate-pulse" />
          </div>

        </div>

        {/* FLOATING CARDS - SYMMETRIC SYSTEM */}

        {/* TOP LEFT */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-0 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-[180px]"
        >
          <div className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
            <FaCloud /> {language === "es" ? "Nube" : "Cloud"}
          </div>
          <p className="text-gray-400 text-xs">
            {language === "es" ? "Arquitectura segura" : "Secure architecture"}
          </p>
        </motion.div>

        {/* TOP RIGHT */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-0 right-0 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-[180px]"
        >
          <div className="text-yellow-400 text-sm font-semibold flex items-center gap-2">
            <FaServer /> {language === "es" ? "Ejecución" : "Execution"}
          </div>
          <p className="text-gray-400 text-xs">
            {language === "es" ? "Ideas → Productos" : "Ideas → Products"}
          </p>
        </motion.div>

        {/* BOTTOM LEFT */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-0 left-0 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-[180px]"
        >
          <div className="text-green-400 text-sm font-semibold flex items-center gap-2">
            <FaMobileAlt />{language === "es" ? "Sistemas móviles" : "Mobile System"}

          </div>
          <p className="text-gray-400 text-xs">
            {language === "es" ? "Todo al alcance de tu móvil" : "All of you need in your device"}
          </p>
        </motion.div>

        {/* BOTTOM RIGHT */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5 }}
          className="absolute bottom-0 right-0 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-[180px]"
        >
          <div className="text-pink-400 text-sm font-semibold flex items-center gap-2">
            <FaPalette /> UI/UX
          </div>
          <p className="text-gray-400 text-xs">
            {language === "es" ? "Experiencias premium" : "Premium experiences"}
          </p>
        </motion.div>

        {/* PARTICLES (MORE CONTROLLED + BALANCED) */}
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-sm opacity-60" />
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-yellow-400 rounded-full blur-sm opacity-50" />
        <div className="absolute bottom-10 left-1/3 w-3 h-3 bg-cyan-400 rounded-full blur-sm opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full blur-sm opacity-60" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-sm opacity-30" />

      </div>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
}

export default Skills;