import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="footer-brand" variants={itemVariants}>
            <div className="footer-logo-container">
              <img src="/logo.png" alt="Efe Eroglu" className="footer-logo" />
              <h3>Efe Eroglu</h3>
            </div>
            <p>AI Developer & Masters Student</p>
            <p className="footer-tagline">AI meets Innovation</p>
            <div className="footer-badges">
              <span className="badge">AI/ML</span>
              <span className="badge">Deep Learning</span>
              <span className="badge">LLMs</span>
            </div>
          </motion.div>

          <motion.div className="footer-links" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div className="footer-contact" variants={itemVariants}>
            <h4>Let's Connect</h4>
            <p>Open to collaboration and new opportunities</p>
            <div className="footer-social">
              <motion.a 
                href="https://github.com/Efe-Eroglu" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/efeeroglu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="mailto:efeeroglu.dev@gmail.com" 
                aria-label="Email"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="footer-divider"></div>
          <p>&copy; {currentYear} Efe Eroglu. All rights reserved.</p>
        </motion.div>
      </div>
      <div className="footer-background">
        <div className="gradient-orb-footer footer-orb-1"></div>
        <div className="gradient-orb-footer footer-orb-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
