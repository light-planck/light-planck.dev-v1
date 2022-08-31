import styles from 'styles/container.module.css'
import { ReactNode } from 'react'
import { NextPage } from 'next'

interface Props {
  children: ReactNode
  large?: boolean
}

const Container: NextPage<Props> = ({ children, large = false }) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}

export default Container
