import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="backdrop-blur-md bg-slate-950/80 text-white shadow-md fixed w-full top-0 left-0 z-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="text-2xl font-bold text-indigo-400">
                        Hex<span className="text-white">El</span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="hover:text-indigo-400 transition">Home</a>
                        <a href="#about" className="hover:text-indigo-400 transition">About</a>
                        <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
                        <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
                        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none">


                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800"
                    >
                        <div className="px-4 py-3 space-y-3">
                            <Motion.a
                                href="#home"
                                className="block hover:text-indigo-400 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                                variants={{
                                    open: { x: 0, opacity: 1 },
                                    closed: { x: -20, opacity: 0 }
                                }}
                            >
                                Home
                            </Motion.a>
                            <Motion.a
                                href="#about"
                                className="block hover:text-indigo-400 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Motion.a>
                            <Motion.a
                                href="#skills"
                                className="block hover:text-indigo-400 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Skills
                            </Motion.a>
                            <Motion.a
                                href="#projects"
                                className="block hover:text-indigo-400 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </Motion.a>
                            <Motion.a
                                href="#experience"
                                className="block hover:text-indigo-400 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Experience
                            </Motion.a>
                            <Motion.a
                                href="#contact"
                                className="block hover:text-indigo-400 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Motion.a>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar;