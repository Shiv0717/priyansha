import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const [activeProject, setActiveProject] = useState(0);

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      year: "2024",
      icon: "🛒"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      category: "Web App",
      year: "2024",
      icon: "📋"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with predictive analytics and interactive data visualization.",
      technologies: ["Vue.js", "Python", "D3.js", "API Integration"],
      category: "Frontend",
      year: "2023",
      icon: "🌤️"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2 
      } 
    },
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
        stiffness: 100,
        damping: 25
      } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: index => index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      y: -6,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
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
            Projects
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
            A timeline of my most impactful projects and digital creations
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Central Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-linear-to-b from-gray-300 to-gray-300 h-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              custom={index}
              className={`flex items-center justify-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Content Card */}
              <div className={`w-full md:w-2/5 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <motion.div
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  className={`bg-white border rounded-2xl p-8 relative group transition-all duration-300 ${
                    activeProject === index ? 'border-gray-900 sticky top-24' : 'border-gray-200 hover:border-gray-900'
                  }`}
                  style={{
                    zIndex: activeProject === index ? 30 : 10
                  }}
                  onClick={() => setActiveProject(index)}
                >
                  {/* Icon */}
                  <motion.div 
                    className="absolute -top-4 -left-4 w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-2xl shadow-sm z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Active Indicator */}
                  {activeProject === index && (
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-gray-900 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  )}

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Title & Year */}
                    <div className="mb-4">
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-500 text-sm font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {project.year}
                      </motion.p>
                    </div>

                    {/* Category */}
                    <motion.h4 
                      className="text-lg font-semibold text-gray-800 mb-4 leading-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.category}
                    </motion.h4>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-600 leading-relaxed text-sm mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Action Buttons - Only show for active project */}
                    {activeProject === index && (
                      <motion.div 
                        className="flex gap-3 pt-4 border-t border-gray-200"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.button
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-sm"
                        >
                          Live Demo
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm border border-gray-300"
                        >
                          Source Code
                        </motion.button>
                      </motion.div>
                    )}
                  </div>

                  {/* linear Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent bg-linear-to-r from-gray-900 to-gray-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex items-center justify-center w-16 relative">
                <motion.div
                  className={`w-6 h-6 rounded-full border-4 border-white shadow-lg z-20 ${
                    activeProject === index ? 'bg-gray-900 scale-110' : 'bg-gray-400'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.5 + index * 0.2,
                    type: "spring", 
                    stiffness: 300 
                  }}
                  whileHover={{ 
                    scale: 1.4,
                    backgroundColor: "#111827",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                />
                
                {/* Connection Lines */}
                {index < projectsData.length - 1 && (
                  <motion.div
                    className="absolute top-6 w-0.5 h-12 bg-gray-300"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  />
                )}
              </div>

              {/* Right Spacer */}
              <div className="hidden md:block w-2/5"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-2xl mx-auto"
            whileHover={{ y: -2 }}
          >
            <motion.p 
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Each project represents unique challenges and learning opportunities in modern web development.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;