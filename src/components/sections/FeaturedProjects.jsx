import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import styles from './FeaturedProjects.module.css';

const FeaturedProjects = () => {
  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.sectionTitle}>Öne Çıkan Projeler</h2>
      <div className={styles.projectsGrid}>
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;