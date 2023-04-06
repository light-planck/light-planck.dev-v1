import styles from 'styles/container.module.css'
import type { ReactNode } from 'react'
import type { NextPage } from 'next'

interface Props {
  children: ReactNode
  large?: boolean
}

const Container: NextPage<Props> = ({ children, large = false }) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}

export default Container
