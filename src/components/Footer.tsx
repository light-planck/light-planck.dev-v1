import Container from './Container'
import Social from './Social'
import styles from '../styles/footer.module.css'
import type { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Social />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
