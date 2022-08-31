import Container from './Container'
import Logo from './Logo'
import Social from './Social'
import styles from '../styles/footer.module.css'
import { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
