import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const style = css`
  margin: 2em;
  font-size: 1.3em;

  a {
    color: white;
    &:hover {
      color: #369fff;
    }
  }

  /* デスクトップ */
  @media (min-width: 768px) {
    button {
      display: none;
    }

    ul {
      display: flex;
      gap: 2em;
    }
  }

  /* モバイル */
  @media (max-width: 767px) {
    body {
      overflow: hidden;
      position: fixed;
      width: 100%;
    }

    button {
      all: unset;
      outline: revert;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      width: 42px;
      height: 42px;
      position: relative;
      z-index: 200;
    }
    .close button {
      color: #c0bebe;
    }
    .open button {
      color: white;
    }

    button {
      display: grid;
      place-items: center;
    }
    button::before,
    button::after,
    button .bar {
      grid-area: 1/1;
      content: '';
      display: block;
      width: 32px;
      height: 1px;
      background-color: currentColor;
      transition: transform 0.4s;
    }

    .close button::before {
      transform: translateY(-8px);
    }
    .close button::after {
      transform: translateY(8px);
    }

    .open button::before {
      transform: rotate(45deg);
    }
    .open button::after {
      transform: rotate(-45deg);
    }
    .open button .bar {
      transform: scale(0);
    }

    ul {
      position: fixed;
      inset: 0 -100% 0 100%;
      z-index: 100;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      transition: transform 0.4s;

      margin: 0;
    }

    .open ul {
      transform: translateX(-100%);
    }

    ul {
      display: grid;
      gap: 40px;
      place-content: center;
      text-align: center;
    }
  }
`

const Nav: NextPage = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = (): void => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = (): void => {
    setNavIsOpen(false)
  }

  return (
    <div css={style}>
      <nav className={navIsOpen ? 'open' : 'close'}>
        <button onClick={toggleNav}>
          <span className="bar"></span>
        </button>
        <ul>
          <li>
            <Link href="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" onClick={closeNav}>
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
