import Container from 'components/Container'
import Hero from 'components/Hero'
import { NextPage } from 'next'

const Custom404: NextPage = () => {
  return (
    <Container>
      <Hero title="404" subtitle="ページが見つかりません" />
    </Container>
  )
}

export default Custom404
