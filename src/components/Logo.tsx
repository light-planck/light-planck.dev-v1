import type { NextPage } from 'next'
import Link from 'next/link'
import { Recursive } from 'next/font/google'

const recursive = Recursive({
  weight: '400',
  subsets: ['latin'],
})

const Logo: NextPage = () => {
  return (
    <Link
      href="/"
      style={{
        fontSize: '48px',
        color: '#369FFF',
        textDecoration: 'none',
        fontFamily: recursive.style.fontFamily,
        margin: '0.5em',
      }}
    >
      light planck
    </Link>
  )
}

export default Logo
