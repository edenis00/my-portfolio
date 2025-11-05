import { motion as Motion } from "framer-motion";
import background from "../assets/background.jpg";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-white px-6 md:px-16 overflow-hidden"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
                <Motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 18,
                        mass: 0.7,
                        duration: 1.2,
                    }}
                    className="max-w-xl"
                >
                    <Motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 18,
                            duration: 1.2,
                        }}
                        className="max-w-xl text-center"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Hi, I’m <span className="text-indigo-400">Elijah Denis</span>
                        </h1>
                        <p className="text-md md:text-lg mb-8 text-gray-300 leading-relaxed">
                            I’m a Full-Stack Software Engineer who writes clean, efficient code
                            and builds scalable, optimized solutions that deliver real impact.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Motion.a
                                href="#projects"
                                className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-full transition font-medium inline-block shadow-md hover:shadow-indigo-500/40"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Projects
                            </Motion.a>
                            <Motion.a
                                href="#resume"
                                className="border border-indigo-400 hover:bg-indigo-400 hover:text-gray-900 px-6 py-2 rounded-full transition font-medium inline-block shadow-md hover:shadow-indigo-400/40"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Resume
                            </Motion.a>
                        </div>
                    </Motion.div>

                </Motion.div>
            </div>
        </section>
    );
}

export default Hero;
