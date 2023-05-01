import type { NextPage } from 'next'
import Link from 'next/link'
import { Recursive } from 'next/font/google'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const logo = css`
  font-size: 3em;
  color: #369fff;
  text-decoration: none;
`

const recursive = Recursive({
  weight: '400',
  subsets: ['latin'],
})

const Logo: NextPage = () => {
  return (
    <div style={{ margin: '2em' }}>
      <Link href="/" css={logo} className={recursive.className}>
        light planck
      </Link>
    </div>
  )
}

export default Logo
