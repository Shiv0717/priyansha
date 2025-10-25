import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);

  const roles = [
    "Software Developer",
    "Full Stack Engineer", 
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Innovator"
  ];

  const techStack = ["React", "Node.js", "TypeScript", "Python", "AWS", "MongoDB"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      }
    }
  };

  return (
    <section id="home" className="min-h-screen py-0 lg:py-20 bg-white flex items-center justify-center relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 lg:space-y-12"
        >
          {/* Name */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-gray-900">
                PRIYANSHA
              </span>
              <motion.span 
                className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-gray-700 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                TIWARI
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Animated Role Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="h-12 sm:h-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentWord}
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-600 tracking-widest uppercase"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentWord]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Animated Divider */}
            <motion.div 
              className="flex justify-center items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div 
                className="w-8 h-0.5 bg-gray-400"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              />
              <motion.div 
                className="w-2 h-2 bg-gray-600 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-8 h-0.5 bg-gray-400"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 1.7, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              Crafting <span className="font-medium text-gray-900">digital experiences</span> with 
              clean code and innovative solutions. Specializing in modern web technologies 
              and <span className="font-medium text-gray-900">user-centric design</span>.
            </motion.p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm sm:text-base text-gray-700 font-medium border border-gray-200"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium tracking-wide border-2 border-gray-900"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-medium tracking-wide border-2 border-gray-300"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

     
    </section>
  );
};

export default Hero;