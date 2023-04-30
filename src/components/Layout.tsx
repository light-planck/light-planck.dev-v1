import type { NextPage } from 'next'
import type { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import Div100vh from 'react-div-100vh'

interface Props {
  children: ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <Div100vh
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Div100vh>
  )
}

export default Layout
