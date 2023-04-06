import styles from 'styles/post-body.module.css'
import type { NextPage } from 'next'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const PostBody: NextPage<Props> = ({ children }) => {
  return <div className={styles.stack}>{children}</div>
}

export default PostBody
