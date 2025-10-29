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
    setActiveIndex(0);
  };

  const collapseAll = () => {
    setActiveIndex(null);
  };

  return (
    <section id="work" className="relative w-full py-20 overflow-hidden">
      {/* Same Background as Education */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
        
        {/* Same Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Same Header as Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
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
              Professional Journey
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto rounded-full mb-6"
          ></motion.div>

          <motion.p
            className="text-xl text-gray-300 italic max-w-3xl mx-auto"
            style={{ fontFamily: "'Caveat', cursive" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            "Building digital solutions that make a difference"
          </motion.p>
        </motion.div>

        {/* Timeline - Original Layout with Dark Colors */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-7xl mx-auto"
        >
          {/* Vertical Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-cyan-400/30"
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
                    className={`w-5 h-5 rounded-full border-4 border-black z-10 ${
                      activeIndex === index 
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-110' 
                        : hoveredIndex === index
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-105'
                        : 'bg-gray-600'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    whileHover={{ scale: 1.3 }}
                  />
                  
                  {/* Connection Line on Hover */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute top-5 left-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-purple-400 -translate-x-1/2"
                      initial={{ height: 0 }}
                      animate={{ height: 32 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  className={`flex-1 border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                    activeIndex === index 
                      ? 'border-blue-400/50 bg-white/10 shadow-lg' 
                      : hoveredIndex === index
                      ? 'border-purple-400/30 bg-white/5 shadow-md'
                      : 'border-white/10 bg-white/5'
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
                          activeIndex === index ? 'text-white' : 'text-gray-200'
                        }`}
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                      >
                        {exp.position}
                      </motion.h3>
                      <motion.p 
                        className="text-lg font-semibold text-blue-400 mb-1"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                      >
                        {exp.company}
                      </motion.p>
                      <motion.span 
                        className="text-gray-400 text-sm"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    
                    {/* Toggle Button */}
                    <motion.button
                      className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                        activeIndex === index 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent' 
                          : 'bg-white/10 text-gray-400 border-white/20'
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
                    <motion.div className="pt-4 border-t border-white/10">
                      <motion.ul className="space-y-3 mb-6">
                        {exp.description.map((line, i) => (
                          <motion.li
                            key={i}
                            className="text-gray-300 flex items-start"
                            style={{ fontFamily: "'Urbanist', sans-serif" }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                          >
                            <motion.span 
                              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 shrink-0"
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
                            className="px-3 py-2 bg-white/5 rounded-lg text-sm font-medium text-gray-300 border border-white/10"
                            style={{ fontFamily: "'Urbanist', sans-serif" }}
                            whileHover={{ 
                              scale: 1.05,
                              y: -2,
                              backgroundColor: "rgba(59, 130, 246, 0.1)"
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