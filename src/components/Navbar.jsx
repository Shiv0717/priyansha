import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const fullScreenMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const itemVariants = {
    closed: { 
      opacity: 0, 
      y: 25,
    },
    open: (index) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.12,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Image + Name and Role */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="flex items-center gap-3 shrink-0 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-lg"
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(255,255,255,0.15)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Profile Image */}
            <motion.div 
              className="w-10 h-10 overflow-hidden rounded-full border-2 border-white/30 shadow-md"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                borderColor: "rgba(255,255,255,0.6)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/logo/1000051881 (1) (1).jpg"
                alt="Priyansha Tiwari"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Name and Role */}
            <div className="flex flex-col">
              <motion.a 
                href="#home"
                className="text-[10px] font-bold text-white tracking-tight hover:text-gray-200 transition-colors duration-300"
                whileHover={{ x: 2 }}
              >
                Priyansha Tiwari
              </motion.a>
              <motion.span 
                className="text-[8px] text-gray-400 font-medium px-1 rounded-full mt-1 inline-block w-fit"
                transition={{ duration: 0.3 }}
              >
                Frontend Developer
              </motion.span>
            </div>
          </motion.div>

          {/* Right Side - Menu Icon */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 shadow-lg"
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center space-y-1.5"
              >
                <motion.span
                  className="w-6 h-0.5 bg-white block rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white block rounded-full"
                  variants={{
                    closed: { opacity: 1, scale: 1 },
                    open: { opacity: 0, scale: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white block rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </button>
          </motion.div>
        </div>

        {/* Full Screen Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                variants={fullScreenMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 z-50 flex items-center justify-center"
              >
                {/* Close Button - Fixed position */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-8 right-8 z-60 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 shadow-lg"
                  aria-label="Close Menu"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl font-light"
                  >
                    &times;
                  </motion.div>
                </button>
                
                {/* Menu Content */}
                <div className="relative z-50 flex flex-col items-center justify-center h-full px-6 py-12 w-full max-w-4xl mx-auto">
                  <motion.div 
                    className="space-y-6 text-center w-full"
                    variants={itemVariants}
                  >
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        className="relative group"
                        variants={itemVariants}
                        custom={index}
                      >
                        <motion.a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-4xl lg:text-6xl font-bold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 py-4 transition-all duration-500 cursor-pointer"
                          whileHover={{ 
                            scale: 1.08,
                            y: -5
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.name}
                          <motion.div
                            className="absolute bottom-2 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-4/5 group-hover:left-1/10 transition-all duration-500"
                            whileHover={{ width: "80%", left: "10%" }}
                          />
                        </motion.a>
                      </motion.div>
                    ))}
                    
                    {/* Contact Info */}
                    <motion.div
                      variants={itemVariants}
                      custom={menuItems.length}
                      className="mt-16 pt-8 border-t border-white/20"
                    >
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                      >
                        Get in Touch
                      </motion.h3>
                      
                      <div className="space-y-3 text-lg">
                        <motion.p 
                          className="text-gray-200 hover:text-white transition-colors duration-300 cursor-pointer"
                          whileHover={{ x: 10 }}
                          onClick={() => {
                            navigator.clipboard.writeText('priyansha@email.com');
                            setIsMenuOpen(false);
                          }}
                        >
                          📧 priyansha@email.com
                        </motion.p>
                        <motion.p 
                          className="text-gray-200 hover:text-white transition-colors duration-300 cursor-pointer"
                          whileHover={{ x: 10 }}
                          onClick={() => {
                            navigator.clipboard.writeText('+1 (555) 123-4567');
                            setIsMenuOpen(false);
                          }}
                        >
                          📱 +1 (555) 123-4567
                        </motion.p>
                      </div>

                      {/* Social Links */}
                      <motion.div
                        className="flex space-x-8 justify-center mt-8"
                        variants={itemVariants}
                        custom={menuItems.length + 1}
                      >
                        {[
                          { name: 'Twitter', icon: '🐦' },
                          { name: 'LinkedIn', icon: '💼' },
                          { name: 'GitHub', icon: '🐙' },
                          { name: 'Dribbble', icon: '🎨' }
                        ].map((social) => (
                          <motion.a
                            key={social.name}
                            href={`#${social.name.toLowerCase()}`}
                            whileHover={{ 
                              scale: 1.3, 
                              y: -3,
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-300 hover:text-white text-lg font-medium transition-colors duration-300 flex flex-col items-center space-y-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="text-2xl">{social.icon}</span>
                            <span>{social.name}</span>
                          </motion.a>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;