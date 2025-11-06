import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-white px-6 md:px-16 overflow-hidden bg-slate-950"
        >
            {/* Background Effects */}
            <div
                className="absolute inset-0 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>

            {/* Animated background accents */}
            <div className="absolute top-1/4 -left-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div
                className="absolute bottom-1/4 -right-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative z-10 max-w-5xl w-full">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        mass: 1,
                        duration: 1.5,
                    }}
                    className="text-center space-y-8"
                >
                    {/* Tag line */}
                    <Motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-indigo-400 font-medium tracking-wider"
                    >
                        FULL-STACK SOFTWARE ENGINEER
                    </Motion.p>

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                            Elijah Denis
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        I craft clean, efficient solutions that scale.
                        Transforming complex challenges into elegant,
                        user-friendly experiences is what drives me.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Motion.a
                            href="#projects"
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 px-8 py-3 rounded-full font-medium inline-block shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            View Projects
                        </Motion.a>
                        <Motion.a
                            href="/Elijah_CV.pdf"
                            download="Elijah_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-slate-900/80 border border-indigo-400/30 hover:border-indigo-400 px-8 py-3 rounded-full font-medium inline-block backdrop-blur-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <span className="flex items-center gap-2">
                                Resume
                                <svg 
                                    className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M12 4v16m0 0l-6-6m6 6l6-6"
                                    />
                                </svg>
                            </span>
                        </Motion.a>
                    </div>

                    <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex justify-center items-center gap-6 pt-8"
                    >
                        <Motion.a
                            href="https://github.com/edenis00"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-indigo-400 transition-all duration-300"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <FaGithub className="w-6 h-6" />
                        </Motion.a>
                        <Motion.a
                            href="https://linkedin.com/in/hexel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-indigo-400 transition-all duration-300"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <FaLinkedinIn className="w-6 h-6" />
                        </Motion.a>
                        <Motion.span
                            className="w-px h-6 bg-slate-800"
                            initial={{ height: 0 }}
                            animate={{ height: 24 }}
                            transition={{ delay: 0.8, duration: 0.3 }}
                        />
                        <Motion.a
                            href="https://x.com/hex__El"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-indigo-400 transition-all duration-300"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <FaTwitter className="w-6 h-6" />
                        </Motion.a>
                    </Motion.div>
                </Motion.div>
            </div>
        </section>
    );
}

export default Hero;
