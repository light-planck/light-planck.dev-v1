import type { NextPage } from 'next'
import type { ReactNode } from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const post = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

  font-family: 'Noto Sans JP', sans-serif;

  h1 {
    font-size: 3em;
    font-weight: bold;
    font-family: 'Noto Serif JP', serif;
    color: #dfdfdf;
  }
  h2 {
    font-size: 2em;
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 1em;
    border-bottom: 0.05em solid #ddd;
    color: #b5cef7;
  }
  p {
    font-size: 1.3em;
    line-height: 1.4;
    letter-spacing: 0.02em;
    color: white;
    font-family: 'Noto Serif JP', serif;
  }
  a {
    color: #3cc47c;
    text-decoration: none;
    font-size: 1.2em;
  }
`

interface Props {
  children: ReactNode
}

const PostBody: NextPage<Props> = ({ children }) => {
  return (
    <div
      css={post}
      style={{
        marginTop: '2em',
        marginLeft: '5em',
        marginRight: '15em',
        padding: '1.5em',
      }}
    >
      {children}
    </div>
  )
}

export default PostBody
