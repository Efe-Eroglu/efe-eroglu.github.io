import { skills } from '../../data/skills';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Yeteneklerim</h2>
      {skills.map((category, index) => (
        <div key={index} className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <div className={styles.skillsGrid}>
            {category.items.map((skill, idx) => (
              <div key={idx} className={styles.skillItem}>
                <img 
                  src={`/icons/${skill.icon}.svg`} 
                  alt={skill.name} 
                  className={styles.skillIcon} 
                />
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;