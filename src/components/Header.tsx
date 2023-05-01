import Logo from './Logo'
import Nav from './Nav'
import Social from './Social'
import type { NextPage } from 'next'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const container = css`
  display: flex;
  justify-content: space-between;
  border-bottom: solid;
  border-color: #4d4e4f;
  border-width: 0.15em;
  height: 8rem;
`

const Header: NextPage = () => {
  return (
    <header>
      <div css={container}>
        <Logo />
        <Nav />
        <Social />
      </div>
    </header>
  )
}

export default Header
