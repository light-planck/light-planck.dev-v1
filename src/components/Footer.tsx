import Container from './Container'
import styles from '../styles/footer.module.css'
import type { NextPage } from 'next'
import { Open_Sans } from 'next/font/google'

const thisYear = new Date().getFullYear()
const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

const Footer: NextPage = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <div className={openSans.className}>
            <p>
              <small>&copy;{thisYear} light-planck. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
