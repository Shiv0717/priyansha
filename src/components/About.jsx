import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Marquee = ({ items, direction = "left", speed = 20 }) => {
  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex gap-8"
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
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "30+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const skillCategories = {
    "Frontend": ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Redux", "Sass", "Framer Motion"],
    "Backend": ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Redis", "REST APIs"],
    
  };

  const learning = ["Go", "Rust", "Kubernetes", "Three.js", "WebAssembly", "TensorFlow", "D3.js", "Electron"];

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
    <section id="about" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            whileHover={{ x: 4 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-16 h-0.5 bg-gray-900 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
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
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Visual */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <motion.div 
              className="relative group mx-auto max-w-md"
              whileHover="hover"
            >
              <motion.div
                className="relative w-full aspect-square overflow-hidden rounded-2xl border-4 border-gray-200 bg-linear-to-br from-gray-100 to-gray-200"
                variants={{
                  initial: { rotate: 0 },
                  hover: { rotate: -1 }
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Your Profile Image</span>
                </div>
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent bg-linear-to-r from-gray-900 to-gray-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-14 h-14 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <span className="text-xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                <span className="text-xl">💡</span>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center p-6 bg-white border border-gray-200 rounded-xl"
                  whileHover={{ 
                    y: -4,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <motion.div
                    className="text-2xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      delay: 0.6 + index * 0.1,
                      stiffness: 200 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Introduction */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3 
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm <span className="text-gray-700">Priyansha Tiwari</span>
              </motion.h3>
              
              <motion.div 
                className="w-12 h-1 bg-gray-900"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p 
                className="text-gray-700 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                A passionate software developer dedicated to creating elegant solutions to complex problems. 
                I believe in writing clean, maintainable code that not only works but also tells a story.
              </motion.p>

              <motion.p 
                className="text-gray-700 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                With expertise across the full development stack, I specialize in building scalable applications 
                that prioritize user experience, performance, and maintainability.
              </motion.p>
            </motion.div>

            {/* Skills Marquee */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h4 
                className="text-xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                Tech Stack
              </motion.h4>

              <div className="space-y-4">
                {Object.entries(skillCategories).map(([category, skills], index) => (
                  <motion.div
                    key={category}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.2 }}
                  >
                    <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      {category}
                    </h5>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <Marquee 
                        items={skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 whitespace-nowrap mx-2"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "#f8fafc"
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                        direction={index % 2 === 0 ? "left" : "right"}
                        speed={25 - index * 3}
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