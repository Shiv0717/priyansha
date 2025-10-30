import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden py-20">
      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Urbanist:wght@300..900&display=swap');
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Professional Intro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16 relative"
          >
            {/* Floating Subheadings - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: -4 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
            >
              <p
                className="text-2xl text-white px-6 py-3 rounded-2xl backdrop-blur-sm"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Crafting digital <br />experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 4 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
            >
              <p
                className="text-2xl text-white px-6 py-3 rounded-2xl backdrop-blur-sm"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Building the <br />future
              </p>
            </motion.div>

            {/* Mobile Subheadings */}
            <div className="lg:hidden flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-white bg-gradient-to-r from-blue-400/20 to-purple-400/20 px-4 py-3 rounded-xl border border-white/10 backdrop-blur-sm"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Digital Craftsmanship
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-white bg-gradient-to-r from-purple-400/20 to-pink-400/20 px-4 py-3 rounded-xl border border-white/10 backdrop-blur-sm"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Future Builder
              </motion.p>
            </div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 px-4"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Priyansha
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
            ></motion.div>

            {/* Bottom Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 sm:mt-8 px-4"
            >
              <p
                className="text-lg sm:text-xl text-gray-300 italic max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                "Full-Stack Developer & Creative Problem Solver"
              </p>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
          >
            <p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 font-light"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              I craft digital experiences through clean code and thoughtful design. 
              Specializing in modern web technologies to build fast, accessible, 
              and user-centered applications that make a difference.
            </p>
          </motion.div>

         
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-md mx-auto px-4"
          >
            <p 
              className="text-xs sm:text-sm text-gray-500 mb-4 tracking-widest uppercase"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-300 text-xs sm:text-sm font-medium"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderColor: "#3B82F6"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 sm:top-20 left-4 sm:left-20 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-24 sm:bottom-20 right-4 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Scroll Indicator - Fixed positioning */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-center">
          <div 
            className="text-xs sm:text-sm text-gray-400 tracking-widest mb-2 sm:mb-3"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            SCROLL TO EXPLORE
          </div>
          <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-blue-400/50 to-transparent mx-auto" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;