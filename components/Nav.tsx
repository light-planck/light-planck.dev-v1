import Link from 'next/link';
import styles from '../styles/nav.module.css';
import Social from './Social';

const Nav = () => {
  return (
    <>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a>Works</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
