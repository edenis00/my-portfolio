import { motion as Motion } from "framer-motion";
import bg from "../assets/background.jpg";
import me from "../assets/me.jpg";

const projects = [
  {
    title: "Finance Tracker",
    description:
      "A modern personal finance app that helps users track income, expenses, and budgeting insights.",
    image: bg,
    link: "#",
  },
  {
    title: "Voting Platform",
    description:
      "A secure and scalable voting system built with Django backend and React frontend.",
    image: me,
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and developer journey.",
    image: bg,
    link: "#",
  },
];

function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 md:px-16 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-400 mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Some of the projects I’ve built — focused on functionality, design, and
          performance.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Motion.div
            key={i}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 px-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-full font-medium transition"
              >
                View Project
              </a>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
