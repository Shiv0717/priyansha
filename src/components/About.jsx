import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Marquee = ({ items, direction = "left", speed = 20 }) => {
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-3 sm:gap-4 md:gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  const stats = [
    { number: "50+", label: "Projects" },
    { number: "3+", label: "Years Exp" },
    { number: "30+", label: "Tech Stack" },
    { number: "100%", label: "Satisfaction" }
  ];

  const skillCategories = {
    "Frontend": ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind", "Redux"],
    "Backend": ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="min-h-screen bg-white py-8 sm:py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
            whileHover={{ x: 4 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-12 h-0.5 bg-gray-900 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.p 
            className="text-gray-600 text-sm sm:text-base max-w-md mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Crafting digital experiences with passion and precision
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column - Visual */}
          <motion.div variants={itemVariants} className="space-y-6 order-2 lg:order-1 w-full">
            {/* Profile Image */}
            <motion.div 
              className="relative group mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
              whileHover="hover"
            >
              <motion.div
                className="relative w-full h-full overflow-hidden rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200"
                variants={{
                  initial: { rotate: 0 },
                  hover: { rotate: -1 }
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Profile Image</span>
                </div>
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm"
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <span className="text-sm">🚀</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 w-7 h-7 sm:w-9 sm:h-9 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm"
                animate={{ 
                  y: [0, 4, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                <span className="text-sm">💡</span>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-3 max-w-xs mx-auto"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center p-3 bg-white border border-gray-200 rounded-lg"
                  whileHover={{ 
                    y: -2,
                    scale: 1.02,
                  }}
                >
                  <motion.div
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      delay: 0.6 + index * 0.1,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6 order-1 lg:order-2 w-full">
            {/* Introduction */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h3 
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm <span className="text-gray-700">Priyansha</span>
              </motion.h3>
              
              <motion.div 
                className="w-10 h-0.5 bg-gray-900"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-3">
              <motion.p 
                className="text-gray-700 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                A passionate software developer dedicated to creating elegant solutions to complex problems.
              </motion.p>

              <motion.p 
                className="text-gray-700 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                I specialize in building scalable applications that prioritize user experience and performance.
              </motion.p>
            </motion.div>

            {/* Skills Marquee */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h4 
                className="text-lg font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                Tech Stack
              </motion.h4>

              <div className="space-y-3">
                {Object.entries(skillCategories).map(([category, skills], index) => (
                  <motion.div
                    key={category}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.2 }}
                  >
                    <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      {category}
                    </h5>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                      <Marquee 
                        items={skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className="px-2 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700 whitespace-nowrap mx-1"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "#f8fafc"
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                        direction={index % 2 === 0 ? "left" : "right"}
                        speed={20}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;