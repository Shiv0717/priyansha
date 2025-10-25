import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      period: "2023 - Present",
      description: [
        "Lead development of scalable web applications serving 1M+ users",
        "Architected microservices reducing latency by 40%",
        "Mentored junior developers and set coding standards",
      ],
      technologies: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      company: "Digital Solutions LLC",
      position: "Full Stack Developer",
      period: "2021 - 2023",
      description: [
        "Developed and maintained 15+ client projects",
        "Built REST APIs handling 50K+ daily requests",
        "Improved performance by 30% through optimization",
      ],
      technologies: ["Vue.js", "Express", "MongoDB"],
    },
    {
      company: "StartUp Ventures",
      position: "Frontend Developer",
      period: "2020 - 2021",
      description: [
        "Built responsive web applications from concept to launch",
        "Collaborated with designers for smooth UI/UX",
        "Maintained internal UI component library",
      ],
      technologies: ["React", "Redux", "Sass"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const expandAll = () => {
    // For demo, just open the first one or implement multi-open logic
    setActiveIndex(0);
  };

  const collapseAll = () => {
    setActiveIndex(null);
  };

  return (
    <section id="work" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with Management Buttons */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            whileHover={{ x: 4 }}
          >
            Professional Journey
          </motion.h2>
          <motion.div 
            className="w-20 h-0.5 bg-gray-900 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          
          {/* Management Buttons */}
          <motion.div 
            className="flex justify-center gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={expandAll}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium text-sm border border-gray-900"
            >
              Expand All
            </motion.button>
            <motion.button
              onClick={collapseAll}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm border border-gray-300"
            >
              Collapse All
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Vertical Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-8 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Dot with Hover Effect */}
                <div className="relative shrink-0">
                  <motion.div
                    className={`w-5 h-5 rounded-full border-4 border-white z-10 ${
                      activeIndex === index 
                        ? 'bg-gray-900 scale-110' 
                        : hoveredIndex === index
                        ? 'bg-gray-700 scale-105'
                        : 'bg-gray-400'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    whileHover={{ scale: 1.3 }}
                  />
                  
                  {/* Connection Line on Hover */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute top-5 left-1/2 w-0.5 h-8 bg-gray-900 -translate-x-1/2"
                      initial={{ height: 0 }}
                      animate={{ height: 32 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  className={`flex-1 border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    activeIndex === index 
                      ? 'border-gray-900 bg-gray-50 shadow-sm' 
                      : hoveredIndex === index
                      ? 'border-gray-400 bg-white shadow-sm'
                      : 'border-gray-200 bg-white'
                  }`}
                  whileHover={{ 
                    y: -4,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  {/* Header with Toggle Button */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <motion.h3 
                        className={`text-2xl font-bold mb-2 ${
                          activeIndex === index ? 'text-gray-900' : 'text-gray-800'
                        }`}
                      >
                        {exp.position}
                      </motion.h3>
                      <motion.p 
                        className="text-lg font-semibold text-gray-600 mb-1"
                      >
                        {exp.company}
                      </motion.p>
                      <motion.span 
                        className="text-gray-500 text-sm"
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    
                    {/* Toggle Button */}
                    <motion.button
                      className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                        activeIndex === index 
                          ? 'bg-gray-900 text-white border-gray-900' 
                          : 'bg-white text-gray-600 border-gray-300'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.span
                        animate={{ rotate: activeIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg font-bold"
                      >
                        +
                      </motion.span>
                    </motion.button>
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: activeIndex === index ? "auto" : 0,
                      opacity: activeIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div className="pt-4 border-t border-gray-200">
                      <motion.ul className="space-y-3 mb-6">
                        {exp.description.map((line, i) => (
                          <motion.li
                            key={i}
                            className="text-gray-600 flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                          >
                            <motion.span 
                              className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 shrink-0"
                              whileHover={{ scale: 1.5 }}
                            />
                            {line}
                          </motion.li>
                        ))}
                      </motion.ul>

                      {/* Technologies */}
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200"
                            whileHover={{ 
                              scale: 1.05,
                              y: -2,
                              backgroundColor: "#f8fafc"
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;