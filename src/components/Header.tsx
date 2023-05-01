import Logo from './Logo'
import Nav from './Nav'
import Social from './Social'
import type { NextPage } from 'next'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const Wrapper = css`
  display: flex;
  justify-content: space-between;
  border-bottom: solid;
  border-color: #4d4e4f;
  border-width: 0.15em;
`

const Header: NextPage = () => {
  return (
    <header style={{ height: '10rem' }}>
      <div css={Wrapper}>
        <Logo />
        <Nav />
        <Social />
      </div>
    </header>
  )
}

export default Header
