import type { NextPage } from 'next'
import Link from 'next/link'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const list = css`
  list-style: none;
  display: flex;
  gap: 1.2em;
  font-size: 1.5em;
`

const item = css`
  color: #e0dddd;
  text-decoration: none;

  &:hover {
    color: #369fff;
  }
`

const Nav: NextPage = () => {
  return (
    <nav style={{ margin: '2em' }}>
      <ul css={list}>
        <li>
          <Link href="/" css={item}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" css={item}>
            About
          </Link>
        </li>
        <li>
          <Link href="/posts" css={item}>
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
