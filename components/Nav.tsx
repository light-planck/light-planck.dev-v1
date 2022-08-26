import Link from 'next/link';
import styles from '../styles/nav.module.css';
import Icons from './Icons';

const Nav = () => {
  return (
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
        <Icons />
      </ul>
    </nav>
  );
};

export default Nav;
