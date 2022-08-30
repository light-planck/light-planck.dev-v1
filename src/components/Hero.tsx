import { FC } from 'react'

interface Props {
  title: string
  subtile: string
}

const Hero: FC<Props> = ({ title, subtile }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{subtile}</p>
      </div>
    </div>
  )
}

export default Hero
