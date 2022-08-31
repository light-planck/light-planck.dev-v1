import type { NextPage } from 'next'
import Container from 'components/Container'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Footer from 'components/Footer'

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
