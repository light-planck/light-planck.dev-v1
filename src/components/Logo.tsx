import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/logo.module.css'

interface Props {
  boxOn?: boolean
}

const Logo: NextPage<Props> = ({ boxOn = false }) => {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.footer}>
      light
    </Link>
  )
}

export default Logo
