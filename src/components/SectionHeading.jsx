import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ title }) => {
  return (
    <div className="flex items-center mb-12">
      {/* Left: Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>

      {/* Right: Animated Border */}
      <motion.div
        className="flex-1 h-1 ml-6 bg-blue-600 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      ></motion.div>
    </div>
  );
};

export default SectionHeading;
