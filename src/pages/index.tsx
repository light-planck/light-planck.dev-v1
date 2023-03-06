import type { NextPage } from 'next'
import Container from 'components/Container'
import Hero from 'components/Hero'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Container>
      <Hero
        title="Home"
        subtitle="lightのホームページです。詳しくは下記のリンクから"
      />
      <Link href="/about">私について</Link>
    </Container>
  )
}

export default Home
