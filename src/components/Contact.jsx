import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "priyansha@email.com",
      link: "mailto:priyansha@email.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Mumbai, India",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/priyansha",
      link: "https://linkedin.com/in/priyansha"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "💻",
      link: "https://github.com/priyansha",
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Twitter",
      icon: "🐦",
      link: "https://twitter.com/priyansha",
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      link: "https://linkedin.com/in/priyansha",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Dribbble",
      icon: "🎨",
      link: "https://dribbble.com/priyansha",
      color: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section id="contact" className="relative w-full py-20 overflow-hidden">
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
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
            "Let's bring your ideas to life together"
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Let's Start a Conversation
                </h3>
                <p 
                  className="text-gray-300 text-lg leading-relaxed mb-8"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                  I'm always interested in new opportunities, creative projects, 
                  and meaningful collaborations. Whether you have a project in mind 
                  or just want to say hello, I'd love to hear from you!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <motion.div
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 
                        className="text-white font-semibold text-lg"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                      >
                        {item.title}
                      </h4>
                      <p 
                        className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                      >
                        {item.value}
                      </p>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-blue-400">→</span>
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 
                  className="text-white font-semibold text-lg mb-6"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                  Follow Me On
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center text-white text-lg backdrop-blur-sm border border-white/20 hover:shadow-2xl transition-all duration-300`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      Your Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-all duration-300"
                      placeholder="Enter your name"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      Email Address
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-all duration-300"
                      placeholder="Enter your email"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="subject"
                    className="block text-white font-medium mb-2"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-all duration-300"
                    placeholder="What's this about?"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16 pt-8 border-t border-white/10"
          >
            <p 
              className="text-gray-400"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              "I typically respond within 24 hours. Looking forward to connecting with you!"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;