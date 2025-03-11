import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Merhaba, Ben Efe</h1>
        <p className={styles.heroSubtitle}>Big Data & Artificial Intelligence</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com" className={styles.socialLink}>
            <img src="/icons/github.svg" alt="GitHub" className={styles.socialIcon} />
          </a>
          <a href="https://linkedin.com" className={styles.socialLink}>
            <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} />
          </a>
          <a href="mailto:ornek@mail.com" className={styles.socialLink}>
            <img src="/icons/email.svg" alt="Email" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;