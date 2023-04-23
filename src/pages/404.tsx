import Container from 'components/Container'
import Hero from 'components/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'

const Custom404: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 page not found</title>
      </Head>
      <Container>
        <Hero title="404" subtitle="ページが見つかりません" />
      </Container>
    </div>
  )
}

export default Custom404
