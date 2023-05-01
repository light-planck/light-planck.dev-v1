import type { NextPage } from 'next'
import type { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import Div100vh from 'react-div-100vh'

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
    <Div100vh css={container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Div100vh>
  )
}

export default Layout
