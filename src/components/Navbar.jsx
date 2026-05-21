import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/2.png";
import { quotes } from "../data/quotes";


function Navbar() {

  const { language, toggleLanguage } = useLanguage();
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(null);
  const handleCV = () => {
  const link = document.createElement("a");

  link.href = "/hoja_de_vida.pdf";

  link.download = "Brayan_Rafael_CV.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

const handleRandomQuote = () => {

  const randomIndex = Math.floor(
    Math.random() * quotes.length
  );

  setCurrentQuote(quotes[randomIndex]);

  setQuoteOpen(true);
};


const handleDailyQuote = () => {

  const today = new Date().toDateString();

  const savedQuote = localStorage.getItem("daily_quote");
  const savedDate = localStorage.getItem("daily_quote_date");

  // SI YA EXISTE FRASE HOY
  if (savedQuote && savedDate === today) {

    setCurrentQuote(JSON.parse(savedQuote));
    setQuoteOpen(true);

    return;
  }

  // HISTORIAL DE FRASES USADAS
  let usedQuotes =
    JSON.parse(localStorage.getItem("used_quotes")) || [];

  // FILTRAR FRASES NO USADAS
  let availableQuotes = quotes.filter(
    (quote) => !usedQuotes.includes(quote.id)
  );

  // SI YA SE USARON TODAS → RESETEAR
  if (availableQuotes.length === 0) {

    usedQuotes = [];
    availableQuotes = quotes;
  }

  // RANDOM
  const randomQuote =
    availableQuotes[
      Math.floor(Math.random() * availableQuotes.length)
    ];

  // GUARDAR
  localStorage.setItem(
    "daily_quote",
    JSON.stringify(randomQuote)
  );

  localStorage.setItem(
    "daily_quote_date",
    today
  );

  // ACTUALIZAR HISTORIAL
  usedQuotes.push(randomQuote.id);

  localStorage.setItem(
    "used_quotes",
    JSON.stringify(usedQuotes)
  );

  setCurrentQuote(randomQuote);
  setQuoteOpen(true);
};



  useEffect(() => {
  if (quoteOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [quoteOpen]);

  const navLinks = [
    { id: "inicio", label: language === "es" ? "Inicio" : "Home"},
    { id: "habilidades", label: language === "es" ? "Habilidades" : "Skills"},
    { id: "proyectos", label: language === "es" ? "Proyectos" : "Works"},
    { id: "contacto", label: language === "es" ? "Contacto" : "Contact"},
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          <motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.98 }}
  onClick={handleDailyQuote}g
  animate={{
    y: [0, -2, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
  className="
    relative
    px-5 py-2
    rounded-2xl
    bg-white/5
    border border-white/10
    backdrop-blur-xl
    overflow-hidden
    shadow-[0_0_30px_rgba(34,211,238,0.12)]
    cursor-pointer
  "
>

  {/* CYAN GLOW */}
  <div className="absolute inset-0 bg-cyan-400/5" />

  {/* TITLE */}
  <h1 className="relative z-10 text-2xl font-bold tracking-wide">
    Brafa<span className="text-cyan-400">Corp</span>
  </h1>

</motion.button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActive(item.id)}
                className={`cursor-pointer relative text-sm uppercase tracking-widest transition-all duration-300 ${
                  active === item.id
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {item.label}

                {active === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 -bottom-2 w-full h-[2px] bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"
                  />
                )}
              </Link>
            ))}

            {/* LANGUAGE BUTTON */}
<button
  onClick={toggleLanguage}
  className="px-4 py-2 rounded-full border border-cyan-400/40 text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300"
>
  {language === "es" ? "ES|🇪🇸" : "EN|🇺🇸"}
</button>

            {/* CV BUTTON */}
            <button
  onClick={handleCV}
  className="
px-5 py-2 rounded-full
bg-cyan-400 text-black font-semibold
hover:scale-105
hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
transition-all duration-300
"
>
  {language === "es" ? "Descargar CV" : "Download CV"}
</button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 flex flex-col gap-5 bg-black/80 backdrop-blur-xl rounded-2xl p-6 mt-2 border border-white/10"
          >
            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => {
                  setMenuOpen(false);
                  setActive(item.id);
                }}
                className={`cursor-pointer text-sm uppercase tracking-widest ${
                  active === item.id
                    ? "text-cyan-400"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button
  onClick={toggleLanguage}
  className="border border-cyan-400 px-4 py-2 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300"
>
  {language === "es" ? "ES|🇪🇸" : "EN|🇺🇸"}
</button>
<button
  onClick={() => {
    handleCV();
    setMenuOpen(false);
  }}
  className="px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300"
>
  {language === "es"
    ? "Descargar CV"
    : "Download CV"}
</button>
          </motion.div>
        )}
      </div>



      <AnimatePresence>

  {quoteOpen && currentQuote && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
fixed inset-0 z-[999]
flex items-center justify-center
px-4 py-6
bg-black/35
backdrop-blur-[2px]
overflow-y-auto
"
    >
      {/*Aquí se aumenta esto para dar el blur a todo el contenido: bg-black/55 backdrop-blur-md */}
 <div
  className="
    absolute
    w-[700px]
    h-[700px]
    rounded-full
    bg-cyan-400/10
    blur-[120px]
  "
/>
      <motion.div
        initial={{
          scale: 0.9,
          opacity: 0,
          y: 40,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        exit={{
          scale: 0.9,
          opacity: 0,
          y: 40,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
relative
w-full
max-w-[650px]
max-h-[85vh]
overflow-y-auto
rounded-[32px]
border border-white/10
bg-[#0b1022]/70
backdrop-blur-2xl
shadow-[0_0_80px_rgba(34,211,238,0.12)]
"
      >

        {/* GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-cyan-400/10 blur-[120px]" />

        {/* CLOSE */}
        <button
          onClick={() => setQuoteOpen(false)}
          className="
            absolute
            top-5
            right-5
            z-50
            w-11
            h-11
            rounded-full
            bg-white/5
            border border-white/10
            flex items-center justify-center
            hover:border-cyan-400
            hover:text-cyan-400
            transition-all duration-300
          "
        >
          <HiX />
        </button>


       

        {/* CONTENT */}
        <div className="relative z-10 px-8 py-14 text-center">

          <p className="uppercase tracking-[5px] text-cyan-400 text-xs mb-6">

            {language === "es"
              ? "Frase del Día"
              : "Quote of the Day"}

          </p>

          <h2 className="text-2xl md:text-4xl font-black leading-relaxed mb-10">

            “

            {currentQuote[language]}

            ”

          </h2>

          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mb-6 rounded-full" />

          <h3 className="text-xl font-bold mb-2">
            {currentQuote.author}
          </h3>

          <p className="text-gray-400 uppercase tracking-[3px] text-xs">

            {currentQuote.role[language]}

          </p>

        </div>

      </motion.div>

    </motion.div>

  )}

</AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;