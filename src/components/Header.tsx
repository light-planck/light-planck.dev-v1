import Logo from './Logo'
import Nav from './Nav'
import Social from './Social'
import type { NextPage } from 'next'

const Header: NextPage = () => {
  return (
    <header style={{ height: '10rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: 'solid',
          borderColor: '#4d4e4f',
          borderWidth: '0.15em',
        }}
      >
        <Logo />
        <Nav />
        <Social />
      </div>
    </header>
  )
}

export default Header
