import { motion as Motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "elijahdenis540@gmail.com",
      href: "mailto:elijahdenis540@gmail.com",
      color: "red"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "https://github.com/edenis00",
      href: "https://github.com/edenis00",
      color: "slate"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "https://linkedin.com/in/hexel",
      href: "https://linkedin.com/in/hexel",
      color: "blue"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      value: "https://x.com/hex__El",
      href: "https://x.com/hex__El",
      color: "sky"
    }
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl w-full">
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-lg">Ready to bring your ideas to life</p>
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Got an idea, collaboration, or just want to say hi?  
                I'm open to new opportunities and always up for a chat.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <Motion.a
                  key={index}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-slate-700 transition-all duration-300">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 font-medium">{link.label}</p>
                    <p className="text-slate-300 group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </Motion.a>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 space-y-6 shadow-2xl">
              <div>
                <label className="block text-slate-300 mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-white placeholder-slate-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-white placeholder-slate-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-white placeholder-slate-500 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <Motion.button
                type="button"
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Send Message
                <Send className="w-4 h-4" />
              </Motion.button>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;