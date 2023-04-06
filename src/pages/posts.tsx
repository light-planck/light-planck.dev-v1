import Container from 'components/Container'
import Meta from 'components/Meta'
import PostBody from 'components/PostBody'
import type { NextPage } from 'next'

const works: NextPage = () => {
  return (
    <Container>
      <Meta pageTitle="posts" />
      {/* <Hero title="Posts" subtitle="posts" /> */}
      <PostBody>
        <h1>Posts</h1>
        <h2>👷‍♂️🚧現在工事中🚧👷‍♂️</h2>
        <p>コンテストの振り返りや解説記事を掲載予定です。</p>
      </PostBody>
    </Container>
  )
}

export default works
