import { motion as Motion } from "framer-motion";
import me from "../assets/me.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-950 text-gray-100 px-6 md:px-16 py-20"
    >
      <Motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-8 md:mb-0 md:mr-12"
      >
        <img
          src={me}
          alt="Elijah Denis"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border-2 border-indigo-400 hover:scale-105 transition-transform duration-300"
        />
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-400">
          About Me
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          I’m <span className="text-indigo-400 font-medium">Elijah Denis</span>, a passionate Full-Stack
          Software Engineer driven by curiosity and creativity. I love
          transforming ideas into interactive, high-performing web experiences
          with modern tools like React, TailwindCSS, and Django/FastAPI on the backend.
        </p>

        <p className="text-gray-400 mb-6 leading-relaxed">
          My philosophy is simple — write clean, efficient code that solves real-world problems
          and deliver solutions that look as good as they perform.
        </p>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {["FastAPI", "Django", "PostgreSQL", "React", "TailwindCSS", ].map(
            (skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-indigo-500/30 hover:border-indigo-400 transition"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </Motion.div>
    </section>
  );
}
