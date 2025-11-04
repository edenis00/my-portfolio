import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-white fixed w-full top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="text-2xl font-bold text-indigo-400">
                        Hex<span className="text-white">El</span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="hover:text-indigo-400 transition">Home</a>
                        <a href="#about" className="hover:text-indigo-400 transition">About</a>
                        <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
                        <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
                        <a href="#resume" className="hover:text-indigo-400 transition">Resume</a>
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

            <div className="md:hidden bg-gray-800 px-4 pb-3 space-y-2">
                <a href="#home" className="hover:text-indigo-400 transition">Home</a>
                <a href="#about" className="hover:text-indigo-400 transition">About</a>
                <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
                <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
                <a href="#resume" className="hover:text-indigo-400 transition">Resume</a>
                <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;