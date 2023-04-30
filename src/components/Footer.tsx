import type { NextPage } from 'next'

const thisYear = new Date().getFullYear()

const Footer: NextPage = () => {
  return (
    <footer style={{ marginTop: 'auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#343E5F',
          height: '5em',
          color: '#cccccc',
        }}
      >
        <small style={{ margin: 'auto', fontSize: '1em' }}>
          &copy;{thisYear} light-planck. All Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
