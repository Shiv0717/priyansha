import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Marquee = ({ items, direction = "left" }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
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

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  const techStacks = {
    "Frontend": ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    "Tools & DevOps": ["Git", "Docker", "AWS", "Jest", "Webpack", "CI/CD"],
    "Mobile & Others": ["React Native", "Firebase", "Figma", "Socket.io", "PWA", "REST APIs"]
  };

  const learning = ["Go", "Rust", "Kubernetes", "Three.js", "WebAssembly"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="tech-stack" className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
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
            Tech Stack
          </motion.h2>
          <motion.div 
            className="w-16 h-0.5 bg-gray-900 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.p 
            className="text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Technologies I use to build amazing digital experiences
          </motion.p>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {Object.entries(techStacks).map(([category, technologies], index) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Category Title */}
              <motion.h3 
                className="text-2xl font-bold text-gray-900 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {category}
              </motion.h3>

              {/* Marquee */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <Marquee 
                  items={technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-6 py-3 bg-white border border-gray-300 rounded-full text-lg font-medium text-gray-700 whitespace-nowrap"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#f8fafc"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  direction={index % 2 === 0 ? "left" : "right"}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="bg-white border border-gray-200 rounded-2xl p-8"
            whileHover={{ y: -2 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Currently Learning
            </motion.h3>
            
            {/* Learning Marquee */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6">
              <Marquee 
                items={learning.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-6 py-3 bg-white border border-gray-300 rounded-full text-lg font-medium text-gray-700 whitespace-nowrap shadow-sm"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#f0fdf4",
                      borderColor: "#22c55e"
                    }}
                  >
                    {tech} 🚀
                  </motion.span>
                ))}
                direction="left"
              />
            </div>
            
            <motion.p 
              className="text-gray-600 mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Always expanding my skills with the latest technologies
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;