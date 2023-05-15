import type { NextPage } from 'next'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Social from './Social'
const style = css`
  background-color: #282f48;
  height: 7em;
  color: #cccccc;

  display: flex;
  margin-top: auto;
  justify-content: center;
  flex-direction: column;

  small {
    text-align: center;
    font-size: 1em;

    @media (max-width: 768px) {
      font-size: 0.9em;
    }
  }
`

const thisYear = new Date().getFullYear()

const Footer: NextPage = () => {
  return (
    <footer css={style}>
      <Social />
      <small>&copy;{thisYear} light-planck. All Rights Reserved.</small>
    </footer>
  )
}

export default Footer
