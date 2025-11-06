import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { 
  FaPython, 
  FaDocker, 
  FaGitAlt, 
  FaReact 
} from "react-icons/fa";
import { 
  SiDjango, 
  SiFastapi, 
  SiTailwindcss, 
  SiPostgresql 
} from "react-icons/si";

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { 
      icon: <FaPython className="text-blue-400" />,
      name: "Python",
      color: "blue-400",
      category: "Backend"
    },
    {
      icon: <SiDjango className="text-green-500" />,
      name: "Django",
      color: "green-500",
      category: "Backend"
    },
    {
      icon: <SiFastapi className="text-teal-400" />,
      name: "FastAPI",
      color: "teal-400",
      category: "Backend"
    },
    {
      icon: <FaReact className="text-cyan-400" />,
      name: "React",
      color: "cyan-400",
      category: "Frontend"
    },
    {
      icon: <SiTailwindcss className="text-sky-400" />,
      name: "TailwindCSS",
      color: "sky-400",
      category: "Frontend"
    },
    {
      icon: <FaDocker className="text-blue-500" />,
      name: "Docker",
      color: "blue-500",
      category: "DevOps"
    },
    {
      icon: <FaGitAlt className="text-orange-500" />,
      name: "Git",
      color: "orange-500",
      category: "DevOps"
    },
    {
      icon: <SiPostgresql className="text-indigo-400" />,
      name: "PostgreSQL",
      color: "indigo-400",
      category: "Database"
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 py-20 px-6 overflow-hidden [--blue-400:rgb(96,165,250)] [--green-500:rgb(34,197,94)] [--teal-400:rgb(45,212,191)] [--cyan-400:rgb(34,211,238)] [--sky-400:rgb(56,189,248)] [--blue-500:rgb(59,130,246)] [--orange-500:rgb(249,115,22)] [--indigo-400:rgb(129,140,248)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl w-full">
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Skills & Stack
          </h2>
          <p className="text-slate-400 text-lg">Technologies I work with</p>
        </Motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative group"
            >
              <Motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300 shadow-lg hover:shadow-2xl group/card overflow-hidden"
              >
                <Motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-2xl blur-2xl"
                  style={{ 
                    background: hoveredSkill === index ? 
                      `linear-gradient(45deg, var(--tw-gradient-from), var(--tw-gradient-to))` : 
                      'transparent',
                    '--tw-gradient-from': `var(--${skill.color})`,
                    '--tw-gradient-to': `var(--${skill.color})`
                  }}
                />
                
                <div className="relative flex flex-col items-center">
                  <Motion.div
                    animate={{
                      scale: hoveredSkill === index ? 1.1 : 1
                    }}
                    transition={{ 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }}
                    className="text-5xl mb-4"
                  >
                    {skill.icon}
                  </Motion.div>

                  <h3 className="text-lg font-semibold text-white mb-1">
                    {skill.name}
                  </h3>

                  <span className="text-xs text-slate-400 px-3 py-1 rounded-full bg-slate-800/50">
                    {skill.category}
                  </span>
                </div>

                <Motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredSkill === index ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    background: `var(--${skill.color})`,
                  }}
                  className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
                />
              </Motion.div>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mt-16"
        />
      </div>
    </section>
  );
}

export default Skills;