import type { NextPage } from 'next'
import Container from 'components/Container'
import PostBody from 'components/PostBody'
import Meta from 'components/Meta'

const Home: NextPage = () => {
  return (
    <Container>
      <Meta pageTitle="Home" />
      <PostBody>
        <h1>ようこそ( ¨̮ )</h1>
        <h2>☆このサイトは何？</h2>
        <p>
          競技プログラミングで学習したことをアウトプットするために作りました。
        </p>
        <p>コンテストの振り返りや解説記事を掲載していきます。</p>
      </PostBody>
    </Container>
  )
}

export default Home
