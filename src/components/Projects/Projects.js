import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaMobile, FaGlobe, FaDatabase } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'GIS Data Visualization',
      category: 'gis',
      description: 'Interactive mapping system for spatial data analysis with custom overlays and real-time data integration.',
      technologies: ['Leaflet', 'PostGIS', 'Python', 'GeoServer'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'Machine Learning Dashboard',
      category: 'research',
      description: 'Research tool for visualizing ML model performance, feature importance, and prediction analytics.',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 5,
      title: 'Task Management System',
      category: 'web',
      description: 'Collaborative project management platform with real-time updates, notifications, and team analytics.',
      technologies: ['Vue.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 6,
      title: 'Health Monitoring App',
      category: 'mobile',
      description: 'IoT-based health monitoring mobile app with wearable device integration and cloud data synchronization.',
      technologies: ['React Native', 'AWS IoT', 'GraphQL', 'InfluxDB'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'gis', label: 'GIS Systems' },
    { id: 'research', label: 'Research' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'mobile':
        return <FaMobile />;
      case 'web':
        return <FaGlobe />;
      case 'gis':
        return <FaDatabase />;
      case 'research':
        return <FaGlobe />;
      default:
        return <FaGlobe />;
    }
  };

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-background">
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
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of my work spanning web development, mobile applications,
            GIS systems, and academic research projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filterBtn) => (
            <button
              key={filterBtn.id}
              className={`filter-btn ${filter === filterBtn.id ? 'active' : ''}`}
              onClick={() => setFilter(filterBtn.id)}
            >
              {filterBtn.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="action-btn">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="project-category">
                  {getCategoryIcon(project.category)}
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
