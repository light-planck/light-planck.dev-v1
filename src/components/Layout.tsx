import { NextPage } from 'next'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
