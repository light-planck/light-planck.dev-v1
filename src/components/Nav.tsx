import type { NextPage } from 'next'
import Link from 'next/link'

const Nav: NextPage = () => {
  return (
    <nav style={{ margin: '2em' }}>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1.2em',
          fontSize: '1.5em',
        }}
      >
        <li>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
