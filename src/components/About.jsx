import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative w-full py-20 overflow-hidden">
      {/* Same Background as Hero */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Same style as Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
           <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <span 
              className="text-sm text-white/80 tracking-widest uppercase"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Learning Journey
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            Here's a bit{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              about me
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"
          ></motion.div>

          <motion.p
            className="text-lg text-gray-400 italic max-w-2xl mx-auto"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            "Turning complex problems into elegant solutions"
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              My Journey
            </motion.h3>

            <div className="space-y-6">
              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                My journey in tech started with a curiosity about how things work. 
                What began as tinkering with code has evolved into a passion for 
                creating meaningful digital experiences.
              </p>

              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Over the past 3+ years, I've had the privilege to work on diverse 
                projects ranging from startup MVPs to enterprise-level applications.
              </p>

              <div className="space-y-4">
                <h4
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  What drives me:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Creating intuitive user experiences",
                    "Solving complex problems with clean code",
                    "Continuous learning and growth",
                    "Collaborating with amazing teams"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 text-gray-300"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Middle Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="relative w-64 h-80 md:w-80 md:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 backdrop-blur-sm p-4 shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden border border-white/10">
                  <img 
                    src="/public/logo/1000051881 (1) (1).jpg" 
                    alt="Priyansha Tiwari"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              My Approach
            </motion.h3>

            <div className="space-y-6">
              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                I believe in building solutions that are not just functional, but 
                delightful to use. Every line of code is an opportunity to create 
                something that makes someone's day better.
              </p>

              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Whether it's a complex web application or a simple landing page, 
                I bring the same level of attention to detail and passion for 
                craftsmanship to every project.
              </p>

              <div className="space-y-4">
                <h4
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Currently working with:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-300 text-sm font-medium"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;