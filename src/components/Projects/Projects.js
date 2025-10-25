import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaMobile, FaGlobe, FaDatabase, FaBrain } from 'react-icons/fa';
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
      title: 'SynapSense',
      category: 'ai',
      description: 'AI-powered wearable solution that analyzes EEG and biophysiological sensor data in real-time to measure user focus and mental state levels. Designed for attention management and performance optimization in education, work, and health scenarios.',
      technologies: ['Python', 'PyTorch', 'NumPy', 'SciPy', 'Flutter', 'FastAPI', 'Docker'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Efe-Eroglu/SynapSense',
      live: 'https://synapsense-demo.com',
      period: 'Nov 2024 - Aug 2025',
      achievements: ['Teknofest 2025 Semi-Finalist', 'Real-time attention reporting system', 'Cognitive performance tracking prototype']
    },
    {
      id: 2,
      title: 'Öğrenio',
      category: 'mobile',
      description: 'Mobile application providing personalized educational experiences for preschool children with special needs (ADHD, learning disabilities, autism spectrum). Features teacher/parent panels for development tracking.',
      technologies: ['Flutter', 'Firebase', 'PostgreSQL', 'FastAPI', 'Python', 'Power BI'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Efe-Eroglu/Ogrenio',
      live: 'https://play.google.com/store/apps/details?id=com.ogrenio.app',
      period: 'Sep 2024 - Jul 2025',
      achievements: ['Published on Google Play Store', 'Teacher/parent reporting system', 'Early intervention prototype']
    },
    {
      id: 3,
      title: 'Syllexa AI',
      category: 'ai',
      description: 'RAG-based multimodal AI assistant designed to facilitate digital content interaction for individuals living with dyslexia. Supports voice and text interactions; allows PDF/document uploads for Q&A.',
      technologies: ['FastAPI', 'PostgreSQL', 'ChromaDB', 'OpenAI API', 'LangChain', 'React', 'Docker'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Efe-Eroglu/Syllexa-AI',
      live: 'https://syllexa-ai.com',
      period: 'Feb 2025 - Jun 2025',
      achievements: ['Context-aware Q&A capabilities', 'Accessibility-focused UX', 'Education/health sector prototype']
    },
    {
      id: 4,
      title: 'FinAnalyst',
      category: 'ai',
      description: 'AI assistant that analyzes financial tables and answers English questions using Flan-T5-Large. Features real-time chat, file upload, and financial calculations.',
      technologies: ['React', 'FastAPI', 'Python', 'Flan-T5', 'WebSocket'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Efe-Eroglu/FinAnalyst-Chatbot',
      live: 'https://finanalyst-demo.com',
      period: 'Jan 2025 - Mar 2025',
      achievements: ['Real-time financial analysis', 'Document-based Q&A', 'WebSocket integration']
    },
    {
      id: 5,
      title: 'XAI Depression Predictor',
      category: 'ai',
      description: 'Platform that predicts depression risk using lifestyle/health/academic data with SHAP-based explainability. Provides interpretable AI insights for mental health assessment.',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP', 'Flask', 'FastAPI'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Efe-Eroglu/xai-depression-predictor',
      live: 'https://depression-predictor-demo.com',
      period: 'Dec 2024 - Feb 2025',
      achievements: ['SHAP explainability', 'Mental health insights', 'Interpretable AI model']
    },
    {
      id: 6,
      title: 'Solar Panel Segmentation',
      category: 'ai',
      description: 'Computer vision system using deep learning to detect solar panel defects (cracks, hot spots, etc.) through image processing and segmentation models.',
      technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'Segmentation Models'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Efe-Eroglu/solar-panel-segmentation-and-classification',
      live: 'https://solar-panel-demo.com',
      period: 'Oct 2024 - Dec 2024',
      achievements: ['Defect detection system', 'Image segmentation', 'Quality assurance automation']
    },
    {
      id: 7,
      title: 'YouTube Content Segmentation',
      category: 'web',
      description: 'Tool that automatically segments YouTube videos and provides summaries. Features subtitle extraction and GPT-based content segmentation.',
      technologies: ['Node.js', 'Flask', 'React', 'OpenAI API', 'YouTube API'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Efe-Eroglu/youtube-automatic-content-segmentation',
      live: 'https://youtube-segmentation-demo.com',
      period: 'Aug 2024 - Oct 2024',
      achievements: ['Automatic video segmentation', 'AI-powered summarization', 'Content organization']
    },
    {
      id: 8,
      title: 'Financial Dashboard',
      category: 'web',
      description: 'Backend solution for monitoring and visualizing crypto/financial markets with real-time data processing and API endpoints.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'WebSocket', 'Redis'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Efe-Eroglu/financial-dashboard-backend',
      live: 'https://financial-dashboard-demo.com',
      period: 'Jun 2024 - Aug 2024',
      achievements: ['Real-time market data', 'API optimization', 'Financial visualization']
    },
    {
      id: 9,
      title: 'Movie Recommendation',
      category: 'ai',
      description: 'Personalized movie recommendation system based on user preferences and collaborative filtering algorithms.',
      technologies: ['Flask', 'React', 'Python', 'Scikit-learn', 'PostgreSQL'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Efe-Eroglu/movie-recommendation-system',
      live: 'https://movie-recommender-demo.com',
      period: 'Apr 2024 - Jun 2024',
      achievements: ['Personalized recommendations', 'Collaborative filtering', 'User preference learning']
    },
    {
      id: 10,
      title: 'Food Ordering App',
      category: 'mobile',
      description: 'React Native mobile application for burger ordering with favorites, coupons, and cart functionality.',
      technologies: ['React Native', 'Firebase', 'Redux', 'JavaScript'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Efe-Eroglu/Food-Ordering-App',
      live: 'https://food-ordering-demo.com',
      period: 'Feb 2024 - Apr 2024',
      achievements: ['Mobile app development', 'E-commerce features', 'User experience optimization']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'ai':
        return <FaBrain />;
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
                    {project.title === 'Öğrenio' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="action-btn">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-category">
                  {getCategoryIcon(project.category)}
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-meta">
                  <span className="project-role">{project.role}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
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
