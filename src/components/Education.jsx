import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      year: "2021 - 2024",
      degree: "Bachelor of Computer Applications",
      institution: "University of Mumbai",
      description: "Specialized in Software Development, Web Technologies, and Database Management. Graduated with First Class Honors.",
      score: "8.5 CGPA",
      icon: "🎓",
      highlights: ["Web Development", "Database Systems", "Software Engineering", "Data Structures"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2020 - 2021",
      degree: "Higher Secondary Education",
      institution: "State Board",
      description: "Completed with focus on Computer Science and Mathematics. Built foundation in programming fundamentals.",
      score: "85%",
      icon: "📚",
      highlights: ["Computer Science", "Mathematics", "Physics", "Programming Basics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2018 - 2019",
      degree: "Secondary Education",
      institution: "State Board",
      description: "Developed interest in technology and programming. Participated in science fairs and coding competitions.",
      score: "90%",
      icon: "🔬",
      highlights: ["Science Projects", "Mathematics", "Computer Basics", "Logical Thinking"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      year: "2023",
      duration: "6 months",
      projects: "15+ Projects"
    },
    {
      name: "React & Next.js Mastery",
      issuer: "Coursera",
      year: "2023",
      duration: "4 months",
      projects: "10+ Projects"
    },
    {
      name: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      year: "2022",
      duration: "3 months",
      projects: "5+ Projects"
    },
    {
      name: "UI/UX Design Fundamentals",
      issuer: "Google",
      year: "2022",
      duration: "2 months",
      projects: "8+ Projects"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 92, category: "Development" },
    { name: "Backend Development", level: 85, category: "Development" },
    { name: "UI/UX Design", level: 88, category: "Design" },
    { name: "Database Management", level: 82, category: "Development" },
    { name: "Problem Solving", level: 90, category: "Soft Skills" },
    { name: "Team Collaboration", level: 87, category: "Soft Skills" }
  ];

  return (
    <section id="education" className="relative w-full py-16 sm:py-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/4 left-4 sm:left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 sm:mb-8"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <span 
              className="text-xs sm:text-sm text-white/80 tracking-widest uppercase"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Learning Journey
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 px-4"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Education &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Growth
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto rounded-full mb-4 sm:mb-6"
          ></motion.div>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 italic max-w-3xl mx-auto px-4"
            style={{ fontFamily: "'Caveat', cursive" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            "The beautiful thing about learning is that no one can take it away from you"
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on medium+ */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-cyan-400/30 rounded-full hidden sm:block"
            >
              <motion.div
                className="w-full h-full bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Timeline Items */}
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-12 sm:mb-16 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8 lg:pr-12' : 'sm:pl-8 lg:pl-12'} mb-4 sm:mb-0`}>
                  <motion.div
                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Gradient Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 gap-4 sm:gap-0">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <motion.div
                          className="text-2xl sm:text-3xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div className="flex-1">
                          <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-2 sm:mb-3">
                            <span 
                              className="text-blue-400 text-xs sm:text-sm font-semibold tracking-wide"
                              style={{ fontFamily: "'Urbanist', sans-serif" }}
                            >
                              {item.year}
                            </span>
                          </div>
                          <h3 
                            className="text-xl sm:text-2xl font-bold text-white mb-1"
                            style={{ fontFamily: "'Urbanist', sans-serif" }}
                          >
                            {item.degree}
                          </h3>
                          <p 
                            className="text-blue-400 font-semibold text-base sm:text-lg"
                            style={{ fontFamily: "'Urbanist', sans-serif" }}
                          >
                            {item.institution}
                          </p>
                        </div>
                      </div>
                      
                      {/* Score Badge */}
                      <motion.div
                        className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-green-500/20 rounded-full border border-green-400/30 w-fit"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-green-400 font-bold text-sm sm:text-lg">⭐</span>
                        <span 
                          className="text-green-400 font-bold text-sm sm:text-base"
                          style={{ fontFamily: "'Urbanist', sans-serif" }}
                        >
                          {item.score}
                        </span>
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p 
                      className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 
                        className="text-white font-semibold text-xs sm:text-sm uppercase tracking-widest"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                      >
                        Key Focus Areas
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {item.highlights.map((highlight, idx) => (
                          <motion.span
                            key={idx}
                            className="px-2 sm:px-3 py-1 sm:py-2 bg-white/5 rounded-lg text-gray-300 text-xs sm:text-sm border border-white/5"
                            style={{ fontFamily: "'Urbanist', sans-serif" }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 z-20 -ml-1.5 sm:ml-0">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.3 }}
                  >
                    <div className="w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 sm:border-4 border-black shadow-lg sm:shadow-2xl"></div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for mobile */}
                <div className="sm:w-5/12"></div>
              </motion.div>
            ))}
          </div>

         
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 sm:mt-20"
          >
            <div className="text-center mb-12 sm:mb-16">
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span 
                      className="text-white font-semibold text-base sm:text-lg"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {skill.name}
                    </span>
                    <span 
                      className="text-blue-400 font-bold text-sm sm:text-base"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 sm:h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 sm:h-3 rounded-full"
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-gray-400 text-xs">{skill.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;