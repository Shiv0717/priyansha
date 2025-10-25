import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  const educationData = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2020 - 2022",
      location: "Stanford, CA",
      gpa: "3.9/4.0",
      description: "Specialized in AI and ML, published research paper on Neural Networks.",
      icon: "🎓"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      institution: "MIT",
      period: "2016 - 2020",
      location: "Cambridge, MA",
      gpa: "3.8/4.0",
      description: "Dean's list for 6 semesters, led hackathon development team.",
      icon: "⚡"
    },
    {
      id: 3,
      degree: "Advanced Diploma in Full Stack Development",
      institution: "FreeCodeCamp",
      period: "2019 - 2020",
      location: "Online",
      gpa: "Top 5%",
      description: "Completed 3000+ hours of projects, earned 6 developer certifications.",
      icon: "💻"
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
    <section id="education" className="py-20 bg-white">
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
            Education
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
            My academic journey through prestigious institutions and continuous learning
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

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
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
                  className="bg-white border border-gray-200 rounded-2xl p-8 relative group hover:border-gray-900 transition-all duration-300"
                >
                  {/* Icon */}
                  <motion.div 
                    className="absolute -top-4 -left-4 w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-2xl shadow-sm z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  >
                    {edu.icon}
                  </motion.div>

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Institution & Period */}
                    <div className="mb-4">
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {edu.institution}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-500 text-sm font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {edu.period}
                      </motion.p>
                    </div>

                    {/* Degree */}
                    <motion.h4 
                      className="text-lg font-semibold text-gray-800 mb-4 leading-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {edu.degree}
                    </motion.h4>

                    {/* Location & GPA */}
                    <motion.div 
                      className="flex items-center justify-between text-sm text-gray-600 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span>{edu.location}</span>
                      <span className="font-semibold text-gray-900">GPA: {edu.gpa}</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-600 leading-relaxed text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {edu.description}
                    </motion.p>
                  </div>

                  {/* linear Border Effect - Fixed */}
                  <div className="absolute inset-0 border-2 border-transparent bg-linear-to-r from-gray-900 to-gray-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex items-center justify-center w-16 relative">
                <motion.div
                  className="w-6 h-6 bg-gray-900 rounded-full border-4 border-white shadow-lg z-20"
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
                {index < educationData.length - 1 && (
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
              Continuously learning and staying updated with the latest technologies and methodologies in software development.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;