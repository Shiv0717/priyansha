import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      year: "2023",
      title: "E-Commerce Platform",
      company: "Tech Innovations Inc.",
      description: "Built a scalable e-commerce platform serving 1M+ users with real-time inventory management, payment processing, and advanced analytics dashboard.",
      score: "Live",
      icon: "🛒",
      highlights: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time inventory", "Payment processing", "Analytics dashboard", "Mobile responsive"],
      link: "#",
      github: "#"
    },
    {
      year: "2022",
      title: "Task Management App",
      company: "Digital Solutions LLC",
      description: "Developed a collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      score: "Live",
      icon: "✅",
      highlights: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      color: "from-purple-500 to-pink-500",
      features: ["Real-time updates", "Team collaboration", "Project tracking", "File sharing"],
      link: "#",
      github: "#"
    },
    {
      year: "2021",
      title: "Portfolio Website",
      company: "Personal Project",
      description: "Designed and developed a responsive portfolio website with smooth animations, dark mode toggle, and optimized performance for better user experience.",
      score: "Live",
      icon: "💼",
      highlights: ["React", "Framer Motion", "Tailwind CSS", "GSAP"],
      color: "from-green-500 to-emerald-500",
      features: ["Smooth animations", "Dark mode", "Responsive design", "Performance optimized"],
      link: "#",
      github: "#"
    },
    {
      year: "2020",
      title: "Weather Dashboard",
      company: "StartUp Ventures",
      description: "Created a weather forecasting dashboard with interactive maps, location-based services, and detailed weather analytics for multiple cities.",
      score: "Live",
      icon: "🌤️",
      highlights: ["JavaScript", "API Integration", "Chart.js", "Geolocation"],
      color: "from-orange-500 to-red-500",
      features: ["Interactive maps", "Location services", "Weather analytics", "Multi-city support"],
      link: "#",
      github: "#"
    }
  ];

  const technologies = [
    {
      name: "Frontend Development",
      level: 95,
      category: "Development"
    },
    {
      name: "Backend Development",
      level: 88,
      category: "Development"
    },
    {
      name: "UI/UX Design",
      level: 85,
      category: "Design"
    },
    {
      name: "Database Management",
      level: 82,
      category: "Development"
    },
    {
      name: "DevOps & Deployment",
      level: 80,
      category: "Infrastructure"
    },
    {
      name: "API Development",
      level: 90,
      category: "Development"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="relative w-full py-20 overflow-hidden">
      {/* Same Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
        
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              My Projects
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
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
            "Turning ideas into interactive digital experiences"
          </motion.p>
        </motion.div>

        {/* Projects Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-cyan-400/30 rounded-full"
            >
              <motion.div
                className="w-full h-full bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Project Items */}
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Project Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Gradient Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="text-3xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {project.icon}
                        </motion.div>
                        <div>
                          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-3">
                            <span 
                              className="text-blue-400 text-sm font-semibold tracking-wide"
                              style={{ fontFamily: "'Urbanist', sans-serif" }}
                            >
                              {project.year}
                            </span>
                          </div>
                          <h3 
                            className="text-2xl font-bold text-white mb-1"
                            style={{ fontFamily: "'Urbanist', sans-serif" }}
                          >
                            {project.title}
                          </h3>
                          <p 
                            className="text-blue-400 font-semibold text-lg"
                            style={{ fontFamily: "'Urbanist', sans-serif" }}
                          >
                            {project.company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <motion.div
                        className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-400/30"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-green-400 font-bold text-lg">🚀</span>
                        <span 
                          className="text-green-400 font-bold"
                          style={{ fontFamily: "'Urbanist', sans-serif" }}
                        >
                          {project.score}
                        </span>
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p 
                      className="text-gray-300 leading-relaxed mb-6 text-lg"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <h4 
                        className="text-white font-semibold text-sm uppercase tracking-widest"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                      >
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-2 bg-white/5 rounded-lg text-gray-300 text-sm border border-white/5"
                            style={{ fontFamily: "'Urbanist', sans-serif" }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies & Links */}
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-2 bg-white/5 rounded-lg text-sm font-medium text-gray-300 border border-white/10"
                            style={{ fontFamily: "'Urbanist', sans-serif" }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.link}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          <span className="text-white">🌐</span>
                        </motion.a>
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          <span className="text-white">💻</span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.3 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-black shadow-2xl"></div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Year Marker */}
               
              </motion.div>
            ))}
          </div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "'Caveat', cursive" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Technical{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </motion.h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span 
                      className="text-white font-semibold"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {tech.name}
                    </span>
                    <span 
                      className="text-blue-400 font-bold"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {tech.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ x: [-100, 100] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </motion.div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span 
                      className="text-gray-400 text-xs uppercase tracking-widest"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {tech.category}
                    </span>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-blue-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;