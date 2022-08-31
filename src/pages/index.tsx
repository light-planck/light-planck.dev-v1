import type { NextPage } from 'next'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Container from 'components/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Hero title="Home" subtitle="sub" />
      <Footer />
    </Container>
  )
}

export default Home
