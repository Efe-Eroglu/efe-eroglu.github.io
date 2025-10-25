import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMicroscope } from 'react-icons/fa';
import './Research.css';

const Research = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });


  return (
    <section id="research" className="research-section" ref={ref}>
      <div className="research-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Research & Publications</h2>
          <p className="section-subtitle">
            Exploring the intersection of technology and research through
            academic publications, thesis work, and innovative projects.
          </p>
        </motion.div>

        <motion.div
          className="research-coming-soon"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="coming-soon-content">
            <div className="coming-soon-icon">
              <FaMicroscope />
            </div>
            <h3>Research in Progress</h3>
            <p>
              I'm currently working on several research projects in the fields of 
              Large Language Models (LLM), Explainable AI (XAI), and Machine Learning. 
              My research focuses on the role of LLMs in software development processes 
              and their applications in real-world scenarios.
            </p>
            <div className="research-areas">
              <h4>Current Research Areas:</h4>
              <div className="research-tags">
                <span className="tag">Large Language Models (LLM)</span>
                <span className="tag">Explainable AI (XAI)</span>
                <span className="tag">Machine Learning</span>
                <span className="tag">Deep Learning</span>
                <span className="tag">NLP</span>
                <span className="tag">Software Engineering</span>
              </div>
            </div>
            <p className="coming-soon-note">
              Publications and research papers will be available here soon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
