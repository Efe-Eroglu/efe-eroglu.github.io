import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <NavLink to="/" className={styles.logo}>E.E.</NavLink>
        <div className={styles.navLinks}>
          <NavLink 
            to="/projects" 
            className={({isActive}) => isActive ? styles.activeLink : styles.link}
          >
            Projeler
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => isActive ? styles.activeLink : styles.link}
          >
            Hakkımda
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => isActive ? styles.activeLink : styles.link}
          >
            İletişim
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;