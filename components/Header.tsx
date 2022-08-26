import Logo from './Logo';
import Nav from './Nav';
import styles from '../styles/header.module.css';
import Social from './Social';

const Header = () => {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo />
        <Nav />
        <Social />
      </div>
    </header>
  );
};

export default Header;
