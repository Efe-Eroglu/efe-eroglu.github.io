import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img 
          src={project.image} 
          alt={project.title} 
          className={styles.projectImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.techStack}>
          {project.tech.map((tech, index) => (
            <span key={index} className={styles.techItem}>{tech}</span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          <a 
            href={project.github} 
            className={styles.linkButton}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              className={styles.linkButton}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;