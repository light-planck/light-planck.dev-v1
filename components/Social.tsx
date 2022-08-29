import styles from '../styles/social.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Social = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://twitter.com/light_planck" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/light-planck" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  )
}

export default Social
