import background from "../assets/background.jpg";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center text-white px-4"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-2xl"
            >

                <h1 className="text-4xl font-bold mb-4">
                    Hi, I am <span className="text-indigo-400">Elijah Denis</span>
                </h1>
                <p className="text-lg sm:text-xl mb-8">
                    I’m a Full-Stack Software Engineer who loves writing clean, efficient code and solving complex problems. My goal is to create solutions that are both optimized and user-friendly.
                </p>

                <div className="space-x-4">
                    <a
                        href="#projects"
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition font-medium"
                    >
                        View Projects
                    </a>
                    <a
                        href="#resume"
                        className="border border-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-2 rounded-full transition font-medium"
                    >
                        Resume
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero