import type { NextPage } from 'next'
import type { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const container = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface Props {
  children: ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div css={container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
