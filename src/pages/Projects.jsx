import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.pageTitle}>Tüm Projelerim</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;