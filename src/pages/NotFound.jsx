import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorMessage}>Sayfa bulunamadı</p>
        <Link to="/" className={styles.homeLink}>Ana Sayfaya Dön</Link>
      </div>
    </div>
  );
};

export default NotFound;