import type { NextPage } from 'next'
import Container from 'components/Container'
import PostBody from 'components/PostBody'

const Home: NextPage = () => {
  return (
    <Container>
      <PostBody>
        <h2>私について</h2>
        <p>lightですけど？</p>
      </PostBody>
    </Container>
  )
}

export default Home
