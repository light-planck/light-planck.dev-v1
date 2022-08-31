import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/logo.module.css'

interface Props {
  boxOn?: boolean
}

const Logo: NextPage<Props> = ({ boxOn = false }) => {
  return (
    <Link href="/">
      <a className={boxOn ? styles.box : styles.basic}>light</a>
    </Link>
  )
}

export default Logo
