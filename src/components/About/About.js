import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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
      institution: 'University Name',
      degree: 'Masters in Computer Science',
      period: '2023 - Present',
      description: 'Specializing in AI and Machine Learning'
    },
    {
      institution: 'University Name',
      degree: 'B.S. in Software Engineering',
      period: '2019 - 2023',
      description: 'Graduated with honors, relevant coursework in web development and databases'
    }
  ];

  const experience = [
    {
      company: 'Company Name',
      position: 'Software Engineer',
      period: '2023 - Present',
      description: 'Developing scalable web applications and mobile solutions'
    },
    {
      company: 'Company Name',
      position: 'Junior Developer',
      period: '2022 - 2023',
      description: 'Collaborated on GIS systems and enterprise applications'
    }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'JavaScript', level: 92 },
    { name: 'TypeScript', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'AWS', level: 70 }
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-background">
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
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate software engineer and researcher combining technical expertise
            with academic rigor to create innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Introduction */}
          <motion.div className="intro-card" variants={itemVariants}>
            <h3>Hi There!</h3>
            <p>
              I'm a software engineer with a deep passion for technology and research.
              My journey combines hands-on development experience with academic exploration,
              focusing on creating solutions that bridge the gap between theory and practice.
            </p>
            <p>
              Currently pursuing my Master's degree while working on cutting-edge projects
              in web development, mobile applications, and GIS systems. I believe in continuous
              learning and contributing to the tech community through open-source and research.
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
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
