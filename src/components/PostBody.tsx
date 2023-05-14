import type { NextPage } from 'next'
import type { ReactNode } from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const container = css`
  margin-top: 1.5em;
  margin-left: 5em;
  margin-right: 5em;
  padding: 1.5em;

  @media (max-width: 768px) {
    margin-top: 1em;
    margin-left: 2em;
    margin-right: 1em;
    padding: 1em;
  }
`

const post = css`
  h1 {
    font-size: 2.5em;
    font-weight: bold;
    font-family: 'Noto Serif JP', serif;
    color: #dfdfdf;
  }
  h2 {
    font-size: 1.5em;
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

  ul {
    list-style: inside;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.2em;
    }
    p {
      font-size: 1.1em;
    }
    a {
      font-size: 0.9em;
    }
  }
`

interface Props {
  children: ReactNode
}

const PostBody: NextPage<Props> = ({ children }) => {
  return (
    <div css={container}>
      <div css={post} style={{}}>
        {children}
      </div>
    </div>
  )
}

export default PostBody
