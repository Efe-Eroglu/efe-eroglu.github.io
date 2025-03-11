import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.pageTitle}>Hakkımda</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <p>
            Frontend developer olarak 2 yılı aşkın süredir web teknolojileri üzerinde çalışıyorum.
            Kullanıcı dostu arayüzler geliştirmeye ve modern web teknolojilerini öğrenmeye tutkulu bir şekilde devam ediyorum.
          </p>
          <p>
            Temel odak noktam React ekosistemi üzerinde uzmanlaşmak ve kullanıcı deneyimini
            en üst seviyeye çıkarmak için sürekli kendimi geliştirmek.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/profile.jpg" alt="Profil" className={styles.profileImage} />
        </div>
      </div>
    </div>
  );
};

export default About;