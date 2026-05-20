import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/2.png";

function Navbar() {

  const { language, toggleLanguage } = useLanguage();
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleCV = () => {
  const link = document.createElement("a");

  link.href = "/hoja_de_vida.pdf";

  link.download = "Brayan_Rafael_CV.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  onClick={() => setQuoteOpen(true)}
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
    </motion.nav>
  );
}

export default Navbar;