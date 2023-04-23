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
          <h2>☆このサイトは何？</h2>
          <p>
            競技プログラミングで学習したことをアウトプットするために作りました。
          </p>
          <p>コンテストの振り返りや解説記事を掲載していきます。</p>
        </PostBody>
      </Container>
    </div>
  )
}

export default Home
