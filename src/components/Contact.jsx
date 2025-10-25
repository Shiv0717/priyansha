import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram, 
  Dribbble,
  Send,
  User,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'priyansha@example.com',
      link: 'mailto:priyansha@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/priyansha',
      link: 'https://linkedin.com/in/priyansha'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/priyansha',
      icon: Github
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/priyansha',
      icon: Twitter
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/priyansha',
      icon: Instagram
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/priyansha',
      icon: Dribbble
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100
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

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#111827",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-0.5 bg-gray-900 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I'm always open to discussing new opportunities, creative projects, 
            or just having a conversation about technology and innovation.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Let's Connect
            </motion.h3>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    variants={cardVariants}
                    whileHover="hover"
                    className="flex items-center p-6 bg-white border border-gray-200 rounded-xl group"
                  >
                    <motion.div 
                      className="p-3 bg-gray-100 rounded-lg mr-4 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4 
                        className="font-semibold text-gray-900 mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        {method.title}
                      </motion.h4>
                      {method.link ? (
                        <motion.a
                          href={method.link}
                          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ x: 4 }}
                        >
                          {method.value}
                        </motion.a>
                      ) : (
                        <motion.p
                          className="text-gray-600"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {method.value}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.h4 
                className="text-xl font-semibold text-gray-900 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                Follow Me
              </motion.h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-lg group hover:border-gray-900 transition-colors duration-300"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                      >
                        <IconComponent size={20} />
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white border border-gray-200 rounded-xl p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.h3 
                className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <MessageSquare size={32} />
                Send a Message
              </motion.h3>

              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User size={16} />
                    Name *
                  </label>
                  <motion.input
                    variants={inputVariants}
                    whileFocus="focus"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail size={16} />
                    Email *
                  </label>
                  <motion.input
                    variants={inputVariants}
                    whileFocus="focus"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject *
                </label>
                <motion.input
                  variants={inputVariants}
                  whileFocus="focus"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <motion.textarea
                  variants={inputVariants}
                  whileFocus="focus"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-medium text-lg transition-colors duration-300 border border-gray-900 flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Send Message
              </motion.button>

              <motion.p 
                className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <Mail size={16} />
                I typically respond within 24 hours
              </motion.p>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          className="text-center mt-20 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.p 
            className="text-gray-600 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <MapPin size={16} />
            Currently available for freelance opportunities and full-time positions
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;