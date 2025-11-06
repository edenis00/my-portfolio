import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaServer, 
  FaBolt 
} from "react-icons/fa";

const experiences = [
  {
    role: "Assistant Computer Science Teacher",
    company: "University Secondary School (USS)",
    duration: "2024",
    description:
      "Taught students basic computing and guided them through hands-on practice sessions that built curiosity about technology.",
    color: "from-purple-500 to-pink-500",
    icon: <FaGraduationCap className="text-white" />
  },
  {
    role: "Assistant Computer Specialist",
    company: "Yadizah Global Venture",
    duration: "2020 – 2022",
    description:
      "Maintained systems, installed software, and helped customers with digital form filling, printing, and internet use.",
    color: "from-blue-500 to-cyan-500",
    icon: <FaLaptopCode className="text-white" />
  },
  {
    role: "Backend Developer (Self Project)",
    company: "Finance Tracker App",
    duration: "2025",
    description:
      "Built a backend for a personal finance tracker using Django REST. Focused on clean architecture, authentication, and performance.",
    color: "from-emerald-500 to-teal-500",
    icon: <FaServer className="text-white" />
  },
  {
    role: "Intern Developer",
    company: "HNG Internship",
    duration: "2025",
    description:
      "Worked with a remote team to create a Failed Cron Job Monitor using Telex. Practiced API integration, debugging, and teamwork under deadlines.",
    color: "from-orange-500 to-red-500",
    icon: <FaBolt className="text-white" />
  },
];

function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="experience"
      className="relative min-h-screen py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </Motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-pink-500/20 hidden lg:block" />

          <div className="space-y-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              
              return (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:gap-8`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-10"
                    animate={{
                      scale: hoveredIndex === i ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} shadow-lg shadow-purple-500/50`} />
                    <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} animate-ping opacity-20`} />
                  </Motion.div>

                  <Motion.div
                    className={`w-full lg:w-5/12 ${isLeft ? "lg:text-right" : "lg:text-left"}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 shadow-2xl group overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      <div className={`absolute top-6 ${isLeft ? "lg:right-6" : "lg:left-6"} left-6 lg:left-auto`}>
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg`}>
                          {exp.icon}
                        </div>
                      </div>

                      <div className={`${isLeft ? "lg:pr-20" : "lg:pl-20"} pl-20 lg:pl-20`}>
                        <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white mb-4`}>
                          {exp.duration}
                        </span>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {exp.role}
                        </h3>
                        
                        <p className={`text-lg font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-4`}>
                          {exp.company}
                        </p>
                        
                        <p className="text-slate-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      <div className={`absolute bottom-0 ${isLeft ? "lg:left-0" : "lg:right-0"} right-0 lg:right-auto w-20 h-20 bg-gradient-to-br ${exp.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                    </div>
                  </Motion.div>

                  <div className="hidden lg:block w-5/12" />
                </Motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}

export default Experience;