import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import Type from './Type';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="home-section">
      <motion.div 
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="home-content">
          <motion.h1 
            className="home-title"
            variants={itemVariants}
          >
            Hi, I'm <span className="name-highlight">Efe Eroglu</span>
          </motion.h1>
          
          <motion.div 
            className="home-subtitle"
            variants={itemVariants}
          >
            <h2>
              I'm a <Type />
            </h2>
          </motion.div>

          <motion.p 
            className="home-description"
            variants={itemVariants}
          >
            Building intelligent AI systems with LLMs, NLP & Deep Learning.
            Passionate about turning AI research into real-world applications
            and creating innovative solutions that make a difference.
          </motion.p>

          <motion.div 
            className="home-buttons"
            variants={itemVariants}
          >
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </motion.div>

          <motion.div 
            className="social-links"
            variants={itemVariants}
          >
            <a href="https://github.com/Efe-Eroglu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/efeeroglu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:efeeroglu.dev@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span>Scroll to explore</span>
          <FaArrowDown />
        </motion.div>
      </motion.div>

      <div className="home-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Home;
