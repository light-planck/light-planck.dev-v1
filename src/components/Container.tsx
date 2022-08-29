import styles from '../styles/container.module.css'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  large?: boolean
}

const Container: FC<Props> = ({ children, large = false }) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}

export default Container
