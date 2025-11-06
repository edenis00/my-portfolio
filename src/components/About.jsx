import { motion as Motion } from "framer-motion";
import me from "../assets/me.jpg";

 function About() {
  const skills = ["FastAPI", "Django", "PostgreSQL", "React", "TailwindCSS"];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 px-6 md:px-16 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              
              <div className="relative">
                <Motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-72 h-72 md:w-96 md:h-96"
                >
                  <img
                    src={me}
                    alt="Elijah Denis"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Motion.div>

                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <Motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-1 bg-blue-500 rounded-full mb-4"
              />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                About Me
              </h2>
              <p className="text-slate-400 text-lg">Full-Stack Software Engineer</p>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm <span className="text-blue-400 font-semibold">Elijah Denis</span>, a passionate Full-Stack
                Software Engineer driven by curiosity and creativity. I love
                transforming ideas into interactive, high-performing web experiences
                with modern tools like React, TailwindCSS, and Django/FastAPI on the backend.
              </p>

              <p className="text-slate-400 leading-relaxed">
                My philosophy is simple — write clean, efficient code that solves real-world problems
                and deliver solutions that look as good as they perform.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <Motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2.5 bg-slate-900/80 backdrop-blur-sm rounded-xl text-sm font-medium text-slate-200 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 shadow-lg cursor-default"
                  >
                    {skill}
                  </Motion.span>
                ))}
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

export default About; 