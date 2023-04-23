import type { NextPage } from 'next'
import Container from 'components/Container'
import PostBody from 'components/PostBody'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <PostBody>
          <h1>ようこそ( ¨̮ )</h1>
          <h2>☆このサイトについて</h2>
          <p>学習したことをアウトプットするために作りました🔥</p>
          <p>
            競技プログラミングコンテストのふりかえりや解説を掲載していきます💪
          </p>
        </PostBody>
      </Container>
    </div>
  )
}

export default Home
