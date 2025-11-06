import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/edenis00", label: "GitHub" },
        { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/hexel", label: "LinkedIn" },
        { icon: <FaTwitter />, href: "https://x.com/hex__El", label: "Twitter" },
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
    ];

    return (
        <footer className="relative bg-slate-950 text-white overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-16 right-0 w-96 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                            Elijah Denis
                        </h3>
                        <p className="text-slate-400 text-sm">
                            Crafting elegant solutions to complex problems through clean, efficient code.
                        </p>
                    </Motion.div>

                    
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Motion.a
                                        href={link.href}
                                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {link.name}
                                    </Motion.a>
                                </li>
                            ))}
                        </ul>
                    </Motion.div>

                    
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
                        <p className="text-slate-400">
                            <a href="mailto:contact@example.com" className="hover:text-indigo-400 transition-colors">
                                elijahdenis540@example.com
                            </a>
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, i) => (
                                <Motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-indigo-400 transition-colors text-xl"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </Motion.a>
                            ))}
                        </div>
                    </Motion.div>
                </div>

                
                <Motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="pt-8 mt-8 border-t border-slate-800/50 text-center"
                >
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Elijah Denis. All rights reserved.
                    </p>
                </Motion.div>
            </div>
        </footer>
    );
}

export default Footer;