import { motion as Motion } from "framer-motion";
import { FaPython, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiDjango, SiFastapi, SiTailwindcss, SiPostgresql } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-20 px-6"
    >
      <Motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Skills & Stack
      </Motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl">
        {skills.map((skill, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-5xl text-indigo-400 mb-3">{skill.icon}</div>
            <p className="text-lg font-medium text-gray-300">{skill.name}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
