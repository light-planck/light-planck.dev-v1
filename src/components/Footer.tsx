import type { NextPage } from 'next'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const container = css`
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #343e5f;
  height: 5em;
  color: #cccccc;
`
const copyRight = css`
  margin: auto;
  font-size: 1em;
`

const thisYear = new Date().getFullYear()

const Footer: NextPage = () => {
  return (
    <footer style={{ marginTop: 'auto' }}>
      <div css={container}>
        <small css={copyRight}>
          &copy;{thisYear} light-planck. All Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
