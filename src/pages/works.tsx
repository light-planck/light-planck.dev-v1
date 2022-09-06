import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'
import { NextPage } from 'next'

const works: NextPage = () => {
  return (
    <Container>
      <Meta pageTitle="works" />
      <Hero title="Works" subtitle="更新予定" />
    </Container>
  )
}

export default works
