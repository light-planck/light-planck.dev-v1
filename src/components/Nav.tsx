import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/nav.module.css'

const Nav: NextPage = () => {
  return (
    <>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
