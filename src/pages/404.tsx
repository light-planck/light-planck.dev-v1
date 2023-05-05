import PostBody from 'components/PostBody'
import type { NextPage } from 'next'
import Head from 'next/head'

const Custom404: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 page not found</title>
      </Head>

      <PostBody>
        <h1>404 page not found.</h1>
      </PostBody>
    </div>
  )
}

export default Custom404
