import Container from './Container';
import Logo from './Logo';
import Nav from './Nav';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
