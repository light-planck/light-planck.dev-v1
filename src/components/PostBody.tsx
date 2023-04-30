import type { NextPage } from 'next'
import type { ReactNode } from 'react'
import styles from 'styles/postbody.module.css'

interface Props {
  children: ReactNode
}

const PostBody: NextPage<Props> = ({ children }) => {
  return (
    <div
      style={{
        marginTop: '2em',
        marginLeft: '5em',
        marginRight: '15em',
        padding: '1.5em',
      }}
      className={styles.post}
    >
      {children}
    </div>
  )
}

export default PostBody
