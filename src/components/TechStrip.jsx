import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaAndroid,
  FaHtml5,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
  SiSwift,
} from "react-icons/si";

const techs = [
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaAndroid />, name: "Android" },
  { icon: <SiSwift />, name: "Swift" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaHtml5 />, name: "HTML" },
];

function TechStrip() {
  return (
    
    <section className="relative py-8 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
            Tecnologías
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Stack Tecnológico
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {techs.map((tech, index) => (

            <div
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center hover:border-cyan-400 hover:-translate-y-3 transition-all duration-500 shadow-xl"
            >

              <div className="text-5xl text-cyan-400 mb-5 group-hover:scale-125 transition-all duration-500">
                {tech.icon}
              </div>

              <p className="text-gray-300 font-medium">
                {tech.name}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default TechStrip;