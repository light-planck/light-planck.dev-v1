import styles from 'styles/hero.module.css'
import type { NextPage } from 'next'

interface Props {
  title: string
  subtitle: string
}

const Hero: NextPage<Props> = ({ title, subtitle }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  )
}

export default Hero
