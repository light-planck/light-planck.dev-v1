import Logo from './Logo'
import Nav from './Nav'
import styles from '../styles/header.module.css'
import Social from './Social'
import Container from './Container'
import type { NextPage } from 'next'

const Header: NextPage = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
          <Social />
        </div>
      </Container>
    </header>
  )
}

export default Header
