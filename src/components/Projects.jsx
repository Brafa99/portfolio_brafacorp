import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import {
  FaExternalLinkAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaMobileAlt,
  FaGlobe,
  FaBrain,
  FaExpand,
} from "react-icons/fa";

// =========================
// PROJECT 1
// =========================
import proj1Banner from "../assets/projects/proj1/banner.png";
import proj1_1 from "../assets/projects/proj1/1.PNG";
import proj1_2 from "../assets/projects/proj1/2.PNG";
import proj1_3 from "../assets/projects/proj1/3.PNG";

// =========================
// PROJECT 2
// =========================
import proj2Banner from "../assets/projects/proj2/banner.jpeg";
import proj2_1 from "../assets/projects/proj2/1.PNG";
import proj2_2 from "../assets/projects/proj2/2.PNG";
import proj2_3 from "../assets/projects/proj2/3.PNG";

// =========================
// PROJECT 3
// =========================
import proj3Banner from "../assets/projects/proj3/banner.PNG";
import proj3_1 from "../assets/projects/proj3/1.PNG";
import proj3_2 from "../assets/projects/proj3/2.PNG";
import proj3_3 from "../assets/projects/proj3/3.PNG";

// =========================
// PROJECT 4
// =========================
import proj4Banner from "../assets/projects/proj4/banner.PNG";
import proj4_1 from "../assets/projects/proj4/1.PNG";
import proj4_2 from "../assets/projects/proj4/2.PNG";
import proj4_3 from "../assets/projects/proj4/3.PNG";

// =========================
// PROJECT 5
// =========================
import proj5Banner from "../assets/projects/proj5/banner.jpeg";
import proj5_1 from "../assets/projects/proj5/1.PNG";
import proj5_2 from "../assets/projects/proj5/2.PNG";
import proj5_3 from "../assets/projects/proj5/3.PNG";

// =========================
// PROJECT 6
// =========================
import proj6Banner from "../assets/projects/proj6/banner.PNG";
import proj6_1 from "../assets/projects/proj6/3.PNG";
import proj6_2 from "../assets/projects/proj6/2.PNG";
import proj6_3 from "../assets/projects/proj6/1.PNG";

// =========================
// PROJECT 7
// =========================
import proj7Banner from "../assets/projects/proj7/banner.PNG";
import proj7_1 from "../assets/projects/proj7/1.PNG";
import proj7_2 from "../assets/projects/proj7/2.PNG";
import proj7_3 from "../assets/projects/proj7/3.PNG";

// =========================
// PROJECT 8
// =========================
import proj8Banner from "../assets/projects/proj8/banner.PNG";
import proj8_1 from "../assets/projects/proj8/1.PNG";
import proj8_2 from "../assets/projects/proj8/2.PNG";
import proj8_3 from "../assets/projects/proj8/3.PNG";


const projectsData = [

  // =========================
  // PROJECT 1
  // =========================
  {
    id: 1,

    title: "TV Bolivia",

    category: "mobile",

    status: "live",

    description: {
      es: "Aplicación móvil para conectar diferentes sintonizaciones de señal de TV abierta de canales de Bolivia, el cual permite a cualquier usuario poder escuchar y ver online.",
      en: "Mobile application to connect different TV signal tunings open from channels of Bolivia, which allows any user to listen and watch online.",
    },

    stack: ["Android Studio", "Firebase", "Java", "XML", "JavaScript", "SQL"],

    banner: proj1Banner,

    images: [
  proj1_1,
  proj1_2,
  proj1_3,
],

    link: "https://play.google.com/store/apps/details?id=com.tvbolivianaproplayenvivo.luniapps&hl=es",

    icon: <FaMobileAlt />,
  },

  // =========================
  // PROJECT 2
  // =========================
  {
    id: 2,

    title: "Sistema Veterinario completo",

    category: "web",

    status: "private",

    description: {
      es: "Sistema médico web para gestión de pacientes, historiales clínicos y almacenamiento seguro en la nube. Acceso Restringido (SOLO visualización) Correo: admin.pandy@gmail.com Contraseña: 12345678)",
      en: "Medical web system for patient management, clinical history and secure cloud storage.",
    },

    stack: ["React", "Node.js", "MongoDB"],

    banner: proj2Banner,

    images: [
  proj2_1,
  proj2_2,
  proj2_3,
],

    link: "https://veterinariapandy-73c5d.web.app",

    icon: <FaGlobe />,
  },

  // =========================
  // PROJECT 3
  // =========================
  {
    id: 3,

    title: "Conecta Plus Eco",

    category: "mobile",

    status: "live",

    description: {
      es: "Aplicación móvil para iphone el cual permite al usuario cliente poder solicitar un pedido simple de la empresa embotelladora, tiene recordatorios de facturas, deudas y más.",
      en: "Mobile app for iPhone which can request a simple order from the bottling company, has reminders of bills, debts and more.",
    },

    stack: ["React Native", "Next JS", "Firebase", "AWS server"],

    banner: proj3Banner,

    images: [
  proj3_1,
  proj3_2,
  proj3_3,
],

    link: "https://apps.apple.com/us/app/conecta-plus-eco/id1530605293",

    icon: <FaMobileAlt />,
  },

  // =========================
  // PROJECT 4
  // =========================
  {
    id: 4,

    title: "IC Constructora",

    category: "web",

    status: "live",

    description: {
      es: "Participé en este proyecto como desarrollador secundario principal con la función de implementar nuevas funcionalidades y dar mejor aspecto visual a la web page.",
      en: "I participated in this project as a lead secondary developer with the role of implementing new functionalities and improving the visual appearance of the web page",
    },

    stack: ["React", "Tailwind", "Typescript", "API REST", "Mongo DB"],

    banner: proj4Banner,

    images: [
  proj4_1,
  proj4_2,
  proj4_3,
],

    link: "https://icconstructora.co",

    icon: <FaGlobe />,
  },

  // =========================
  // PROJECT 5
  // =========================
  {
    id: 5,

    title: "WINK AI Stylist",

    category: "mobile",

    status: "private",

    description: {
      es: "Aplicación móvil basada en inteligencia artificial para generación de outfits personalizados y recomendaciones inteligentes en tiempo real - Asistente IA.  (MUY PRONTO DISPONIBLE EN PLAYSTORE/APPSTORE)",
      en: "AI-powered mobile application focused on outfit generation and smart real-time recommendations. Smart intelligent assistant",
    },

    stack: ["Flutter", "Firebase", "Kotlin", "Dart", "Python", "GEMINI AI", "OPEN AI API", "Stripe"],

    banner: proj5Banner,

    images: [
  proj5_1,
  proj5_2,
  proj5_3,
],

    link: null,

    icon: <FaMobileAlt />,
  },

  // =========================
  // PROJECT 6
  // =========================
  {
    id: 6,

    title: "Soluciones tecnológicas empresariales",

    category: "web",

    status: "live",

    description: {
      es: "En SOLUCTEC, trabajé como colaborador para Ecuador, el cual la empresa contratante se especializa en la venta de computadoras y sporte técnico para personas. Desarrollé fullstack",
      en: "At SOLUCTEC, I worked as a collaborator for Ecuador, where the contracting company specializes in selling computers and providing technical support to individuals. I developed both frontend and backend applications..",
    },

    stack: ["React", "Bootstrap", "Javascript", "Tailwind", "MySql", "Github"],

    banner: proj6Banner,

    images: [
  proj6_1,
  proj6_2,
  proj6_3,
],

    link: "https://soluctec.com",

    icon: <FaBrain />,
  },

  // =========================
  // PROJECT 7
  // =========================
  {
    id: 7,

    title: "Unandes SA",

    category: "mobile",

    status: "live",

    description: {
      es: "Aplicación móvil oficial de la Universidad de los andes, trabajé como consultor externo tanto remoto como presencial, cambiando base de datos moderno y nuevas funcionalidades con interfaces modernas.",
      en: "Official mobile application of the University of the Andes, I worked as an external consultant both remotely and in person, changing the database to a modern one and adding new functionalities with modern interfaces.",
    },

    stack: ["Flutter", "Laravel", "API REST", "Firebase", "Github", "MySQL"],

    banner: proj7Banner,

    images: [
  proj7_1,
  proj7_2,
  proj7_3,
],

    link: "https://play.google.com/store/apps/details?id=com.unandes.app&hl=es",

    icon: <FaMobileAlt />,
  },

  // =========================
  // PROJECT 8
  // =========================
  {
    id: 8,

    title: "Cedutec Corp",

    category: "web",

    status: "live",

    description: {
      es: "Plataforma empresarial enfocada en la enseñanza de cursos online y presenciales, dando prioridad a estudiantes y administrativos a tener un mejor control académico. (Colaboración entre 4 devs)",
      en: "A business platform focused on teaching online and in-person courses, prioritizing students and administrators to have better academic control. (4 devs contributors)",
    },

    stack: ["React Native", "Node.js", "Firebase" , "Docker", "JavaScript"],

    banner: proj8Banner,

    images: [
  proj8_1,
  proj8_2,
  proj8_3,
],

    link: "https://www.cedutec.org/",

    icon: <FaGlobe />,
  },

  // =========================
  // PROJECT 9
  // =========================
  // {
  //   id: 9,

  //   title: "Fitness Tracking App",

  //   category: "mobile",

  //   status: "live",

  //   description: {
  //     es: "Aplicación fitness para seguimiento de entrenamientos, métricas físicas y progreso en tiempo real. (MUY PRONTO DISPONIBLE EN PLAYSTORE/APPSTORE)",
  //     en: "Fitness application for workout tracking, physical metrics and real-time progress.",
  //   },

  //   stack: ["React Native", "Firebase", "Health API"],

  //   banner: "/projects/proj9/banner.png",

  //   images: [
  //     "/projects/proj9/1.png",
  //     "/projects/proj9/2.png",
  //     "/projects/proj9/3.png",
  //   ],

  //   link: "https://drive.google.com",

  //   icon: <FaMobileAlt />,
  // },

  // =========================
  // PROJECT 10
  // =========================
  // {
  //   id: 10,

  //   title: "Smart Booking Platform",

  //   category: "web",

  //   status: "live",

  //   description: {
  //     es: "Sistema web moderno para reservas online, gestión de clientes y automatización de procesos.",
  //     en: "Modern booking platform for online reservations and automated client management.",
  //   },

  //   stack: ["React", "Tailwind", "Firebase"],

  //   banner: "/projects/proj10/banner.png",

  //   images: [
  //     "/projects/proj10/1.png",
  //     "/projects/proj10/2.png",
  //     "/projects/proj10/3.png",
  //   ],

  //   link: "https://example.com",

  //   icon: <FaGlobe />,
  // },

];

function ProjectCard({
  project,
  language,
  openModal,
}) {
  return (
    <div className="group relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500">

      {/* IMAGE */}
      <div className="relative h-[220px] overflow-hidden">

        <img
          src={project.banner}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />

        {/* STATUS */}
        <div className="absolute top-4 right-4">

          <div
            className={`px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-xl border ${
              project.status === "live"
                ? "bg-black border-cyan-400 text-cyan"
                : "bg-black border-white text-gray"
            }`}
          >
            {project.status === "live"
              ? "LIVE"
              : "PRIVATE"}
          </div>

        </div>

        {/* ICON */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-cyan-400 text-xl">
          {project.icon}
        </div>

        {/* EXPAND */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

          <button
            onClick={() => openModal(project)}
            className="w-16 h-16 rounded-full bg-cyan-400 text-black flex items-center justify-center text-xl shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-110 transition-all duration-300"
          >
            <FaExpand />
          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6">

        <h3 className="text-2xl font-black mb-4">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[70px]">
          {project.description[language]}
        </p>

        {/* STACK */}
        <div className="flex flex-wrap gap-2 mb-6">

          {project.stack.map((item, i) => (

            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300"
            >
              {item}
            </span>

          ))}

        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-between">

          <button
            onClick={() => openModal(project)}
            className="text-cyan-400 text-sm font-medium hover:text-white transition-all duration-300"
          >
            {language === "es"
              ? "Expandir proyecto"
              : "Expand project"}
          </button>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              <FaExternalLinkAlt />
            </a>
          )}

        </div>

      </div>

    </div>
  );
}

function Projects() {
  const { language } = useLanguage();

  const [selected, setSelected] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const openModal = (project) => {
    setSelected(project);
    setImgIndex(0);
  };

  const closeModal = () => setSelected(null);

  const next = () => {
    setImgIndex((prev) =>
      prev === selected.images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setImgIndex((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1
    );
  };

  const firstRow = filtered.slice(0, 4);
const secondRow = filtered.slice(4, 8);

  return (
    <section
      id="proyectos"
      className="relative py-20 overflow-hidden bg-[#050816]"
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
          className="text-center mb-14"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-5">
            {language === "es"
              ? "Proyectos Destacados"
              : "Featured Projects"}
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">

            {language === "es" ? (
              <>
                Productos Digitales
                <span className="block text-cyan-400">
                  Modernos & Reales
                </span>
              </>
            ) : (
              <>
                Modern & Real
                <span className="block text-cyan-400">
                  Digital Products
                </span>
              </>
            )}

          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            {language === "es"
              ? "Aplicaciones móviles, plataformas web e integraciones inteligentes desarrolladas con enfoque en arquitectura escalable, rendimiento y experiencia premium."
              : "Mobile apps, web platforms and intelligent integrations focused on scalable architecture, performance and premium user experience."}
          </p>

        </motion.div>

        {/* FILTERS */}
        <div className="flex justify-center flex-wrap gap-4 mb-14">

          {[
            { key: "all", label: language === "es"
              ? "TODOS"
              : "All" },
            { key: "mobile", label: language === "es"
              ? "MÓVIL"
              : "MOBILE" },
            { key: "web", label: language === "es"
              ? "WEB"
              : "WEB" },
            // { key: "ai", label: "AI" },
          ].map((cat) => (

            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                filter === cat.key
                  ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                  : "border-white/10 bg-white/5 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {cat.label}
            </button>

          ))}

        </div>

        {/* PROJECT ROWS */}
<div className="space-y-8">

  {/* ROW 1 */}
  <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">

    {firstRow.map((project, index) => (

      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: index * 0.08,
        }}
        viewport={{ once: true }}
        className="min-w-[88%] sm:min-w-[70%] lg:min-w-[32%] snap-start"
      >

        <ProjectCard
          project={project}
          language={language}
          openModal={openModal}
        />

      </motion.div>

    ))}

  </div>

  {/* ROW 2 */}
  {secondRow.length > 0 && (
    <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">

      {secondRow.map((project, index) => (

        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
          }}
          viewport={{ once: true }}
          className="min-w-[88%] sm:min-w-[70%] lg:min-w-[32%] snap-start"
        >

          <ProjectCard
            project={project}
            language={language}
            openModal={openModal}
          />

        </motion.div>

      ))}

    </div>
  )}

</div>

      </div>

      {/* MODAL */}
<AnimatePresence>

  {selected && (

    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center px-4 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-[92%] sm:w-[85%] lg:w-[70%] xl:w-[60%] max-h-[82vh] bg-[#0b1022] border border-white/10 rounded-[28px] overflow-hidden"
      >

         {/* CLOSE BUTTON */}
  <button
    onClick={closeModal}
    className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
  >
    <FaTimes />
  </button>

        

        {/* IMAGE CONTAINER */}
        <div className="relative flex items-center justify-center bg-black px-4 py-6">

          <img
  src={selected.images[imgIndex]}
  className="w-full max-h-[42vh] lg:max-h-[48vh] object-contain"
/>

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-3 sm:left-5 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:border-cyan-400 transition-all duration-300"
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-3 sm:right-5 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:border-cyan-400 transition-all duration-300"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* INFO */}
        <div className="px-5 sm:px-8 py-6 border-t border-white/10 bg-[#050816]">

          {/* TITLE */}
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            {selected.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-2xl mb-5">
            {selected.description[language]}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 mb-5">

            {selected.stack.map((tech, i) => (

              <span
                key={i}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300"
              >
                {tech}
              </span>

            ))}

          </div>

          {/* LINK */}
          {selected.link && (

            <a
              href={selected.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
            >

              <FaExternalLinkAlt />

              {language === "es"
                ? "Abrir proyecto"
                : "Open project"}

            </a>

          )}

        </div>

      </motion.div>

    </motion.div>

  )}

</AnimatePresence>
    </section>
  );
}

export default Projects;