import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/icons.module.css'

const Icons = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://twitter.com/light-planck">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href="https://github.com/light-planck">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  )
}

export default Icons
