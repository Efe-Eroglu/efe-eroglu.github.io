import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileAlt, FaAward, FaMicroscope } from 'react-icons/fa';
import './Research.css';

const Research = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const research = [
    {
      title: 'Machine Learning for IoT Data Analysis',
      type: 'Publication',
      journal: 'IEEE Transactions on Neural Networks',
      year: '2024',
      description: 'A novel approach to analyzing IoT sensor data using deep learning models for predictive maintenance.',
      tags: ['Machine Learning', 'IoT', 'Deep Learning'],
      link: '#'
    },
    {
      title: 'Optimizing GIS Data Processing with Cloud Computing',
      type: 'Research Paper',
      journal: 'SIGSPATIAL Conference 2024',
      year: '2024',
      description: 'Investigating the performance improvements of GIS operations using distributed cloud architectures.',
      tags: ['GIS', 'Cloud Computing', 'Distributed Systems'],
      link: '#'
    },
    {
      title: 'Real-time Mobile Application Architecture',
      type: 'Thesis',
      journal: 'Masters Thesis',
      year: '2024',
      description: 'Analysis and design of scalable mobile application architectures for real-time data synchronization.',
      tags: ['Mobile Development', 'Architecture', 'Real-time Systems'],
      link: '#'
    }
  ];

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

        <div className="research-grid">
          {research.map((item, index) => (
            <motion.div
              key={index}
              className="research-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="research-icon">
                {item.type === 'Publication' ? <FaFileAlt /> : 
                 item.type === 'Thesis' ? <FaMicroscope /> : <FaAward />}
              </div>
              <div className="research-content">
                <div className="research-meta">
                  <span className="research-type">{item.type}</span>
                  <span className="research-year">{item.year}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="research-journal">{item.journal}</p>
                <p className="research-description">{item.description}</p>
                <div className="research-tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={item.link} className="research-link">
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
