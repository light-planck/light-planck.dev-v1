import Link from 'next/link'
import styles from '../styles/logo.module.css'

const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <a className={styles.box}>light</a>
    </Link>
  )
}

export default Logo
