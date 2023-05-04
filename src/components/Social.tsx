import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import type { NextPage } from 'next'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const list = css`
  list-style: none;
  display: flex;
  gap: 1em;
  margin: 3em;

  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`

const Social: NextPage = () => {
  return (
    <ul css={list}>
      <li>
        <a
          href="https://twitter.com/light_planck"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: '#1da1f2' }}
            size="2xl"
          />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/light-planck"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: 'white' }}
            size="2xl"
          />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  )
}

export default Social
