import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const education = [
    {
      institution: 'Karadeniz Technical University',
      degree: 'Master of Science in Software Engineering',
      period: '2025 - 2027',
      description: 'Conducting research in Large Language Models (LLM), Explainable AI (XAI), Machine Learning & Deep Learning. Working on a thesis that examines the role of LLMs in software development processes.'
    },
    {
      institution: 'Fırat University',
      degree: 'Bachelor of Science in Software Engineering',
      period: '2021 - 2025',
      description: 'Actively participated in Teknofest and TÜBİTAK projects. Developed an AI-powered mobile education application for children with special needs (published on Play Store). Gained project management experience with Agile/Scrum methodologies.'
    }
  ];

  const experience = [
    {
      company: 'Craft Technology',
      position: 'Software Engineer',
      period: 'July 2025 - September 2025',
      description: 'Worked on Flutter-based mobile application development processes. Transformed UI/UX designs into functional applications. Managed sprint tasks, testing processes, and team coordination within Agile/Scrum framework.'
    },
    {
      company: 'Intellium A.Ş.',
      position: 'AI Developer',
      period: 'September 2024 - January 2025',
      description: 'Developed DistilBERT-based NLP model for user request classification. Integrated the model with web platform using RabbitMQ infrastructure, reducing manual processing time. Developed chatbot and ATS systems. Conducted sprint planning with 6-person AI team using Scrum/Trello.'
    },
    {
      company: 'Techbros',
      position: 'Data Science Intern',
      period: 'July 2024 - August 2024',
      description: 'Performed data querying, cleaning, and analysis using SQL. Developed Power BI dashboards for KPI tracking and business intelligence reporting. Provided team training and mentorship, contributing to data modeling processes.'
    }
  ];

  const skillCategories = [
    {
      title: 'Artificial Intelligence & Data Science',
      skills: [
        'Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'MLflow', 'PySpark',
        'Machine Learning', 'Deep Learning', 'NLP', 'LLM', 'RAG', 'Vector Databases',
        'AI', 'XAI', 'Data Analysis', 'Data Visualization', 'Power BI'
      ]
    },
    {
      title: 'Backend / API Development',
      skills: [
        'FastAPI', 'Flask', 'Go (Golang)', 'PostgreSQL', 'SQL', 'RabbitMQ',
        'Docker', 'CI/CD', 'MLOps', 'AWS', 'GCP', 'OOP', 'RESTful API'
      ]
    },
    {
      title: 'Mobile & Web Development',
      skills: [
        'Flutter (Dart)', 'React.js', 'JavaScript',
        'Responsive UI/UX', 'Mobile App Development', 'API Integration'
      ]
    },
    {
      title: 'Project Management & Methodologies',
      skills: [
        'Agile/Scrum', 'Agile Software Development', 'Sprint Planning',
        'Trello/Jira', 'Team Coordination', 'Git/GitHub'
      ]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate developer working in artificial intelligence and software engineering, 
            combining academic research with industrial experience.
          </p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introduction */}
          <motion.div className="intro-card" variants={itemVariants}>
            <h3>Hi There!</h3>
            <p>
              I'm a developer working in artificial intelligence and software engineering, 
              deeply passionate about technology and research. My journey focuses on creating 
              solutions that bridge the gap between theory and practice by combining academic 
              research with practical development experience.
            </p>
            <p>
              Currently pursuing my master's degree while working on projects in large language 
              models, NLP, and mobile application development. I believe in continuous learning 
              and contributing to the tech community through open-source projects and research.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div className="info-section" variants={itemVariants}>
            <div className="section-icon">
              <FaGraduationCap />
            </div>
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <span className="period">{edu.period}</span>
                    <p className="description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div className="info-section" variants={itemVariants}>
            <div className="section-icon">
              <FaBriefcase />
            </div>
            <h3>Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{exp.position}</h4>
                    <p className="institution">{exp.company}</p>
                    <span className="period">{exp.period}</span>
                    <p className="description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div className="skills-section" variants={itemVariants}>
            <h3>Technical Skills</h3>
            <div className="skills-categories">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex} 
                  className="skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                >
                  <h4 className="category-title">{category.title}</h4>
                  <div className="skills-tags">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.05) 
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
