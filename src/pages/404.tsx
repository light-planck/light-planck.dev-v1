import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'
import type { NextPage } from 'next'

const Custom404: NextPage = () => {
  return (
    <Container>
      <Meta pageTitle="404 - page not found" />
      <Hero title="404" subtitle="ページが見つかりません" />
    </Container>
  )
}

export default Custom404
