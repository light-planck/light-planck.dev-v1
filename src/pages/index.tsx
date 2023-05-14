import type { NextPage } from 'next'
import PostBody from 'components/PostBody'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <PostBody>
        <h1>ようこそ( ¨̮ )</h1>
        <h2>このサイトについて</h2>
        <p>
          私が学んだことや考えたことを、自由にアウトプットできるサイトです🚀
        </p>
        <p>
          学習目標、競プロの解説やコンテストのふりかえりなどを掲載していきます💪
        </p>
      </PostBody>
    </div>
  )
}

export default Home
