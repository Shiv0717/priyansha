import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "💻",
      link: "https://github.com/priyansha",
      color: "hover:from-gray-400 hover:to-gray-600"
    },
    {
      name: "Twitter",
      icon: "🐦",
      link: "https://twitter.com/priyansha",
      color: "hover:from-blue-400 hover:to-cyan-400"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      link: "https://linkedin.com/in/priyansha",
      color: "hover:from-blue-500 hover:to-blue-700"
    },
    {
      name: "Dribbble",
      icon: "🎨",
      link: "https://dribbble.com/priyansha",
      color: "hover:from-pink-400 hover:to-purple-500"
    },
    {
      name: "Instagram",
      icon: "📸",
      link: "https://instagram.com/priyansha",
      color: "hover:from-purple-500 hover:to-pink-500"
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Tailwind CSS", "MongoDB", "Python", "Framer Motion"
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PT</span>
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    Priyansha Tiwari
                  </h3>
                  <p 
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    Full-Stack Developer
                  </p>
                </div>
              </motion.div>
              
              <p 
                className="text-gray-400 mb-6 leading-relaxed"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Crafting beautiful digital experiences with modern technologies. 
                Passionate about creating solutions that make a difference.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:shadow-lg`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 
                className="text-white font-semibold text-lg mb-6"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 
                className="text-white font-semibold text-lg mb-6"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-sm hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 
                className="text-white font-semibold text-lg mb-6"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Get In Touch
              </h4>
              <div className="space-y-4">
                <motion.a
                  href="mailto:priyansha@email.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <span className="text-lg">📧</span>
                  <span style={{ fontFamily: "'Urbanist', sans-serif" }}>
                    priyansha@email.com
                  </span>
                </motion.a>
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <span className="text-lg">📱</span>
                  <span style={{ fontFamily: "'Urbanist', sans-serif" }}>
                    +1 (555) 123-4567
                  </span>
                </motion.a>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 group"
                >
                  <span className="text-lg">📍</span>
                  <span style={{ fontFamily: "'Urbanist', sans-serif" }}>
                    Mumbai, India
                  </span>
                </motion.div>
              </div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span 
                  className="text-green-400 text-sm font-medium"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                  Available for new projects
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-center md:text-left"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              © {currentYear} Priyansha Tiwari. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-6 text-gray-400"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
                className="text-sm hover:text-blue-400 transition-colors duration-300"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
                className="text-sm hover:text-blue-400 transition-colors duration-300"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Terms of Service
              </motion.a>
              <motion.div
                className="flex items-center gap-2 text-sm"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                <span>Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-400"
                >
                  ❤️
                </motion.span>
                <span>by Priyansha</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-4 h-4 bg-blue-400/20 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400/20 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </footer>
  );
};

export default Footer;