import Container from './Container'
import styles from '../styles/footer.module.css'
import type { NextPage } from 'next'

const Footer: NextPage = () => {
  const thisYear = new Date().getFullYear()

  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <p className="copyright">
            <small>&copy;{thisYear} light-planck. All Rights Reserved.</small>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
