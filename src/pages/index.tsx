import type { NextPage } from 'next'
import Container from 'components/Container'
import Hero from 'components/Hero'

const Home: NextPage = () => {
  return (
    <Container>
      <Hero title="Home" subtitle="sub" />
    </Container>
  )
}

export default Home
