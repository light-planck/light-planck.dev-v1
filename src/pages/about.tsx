import Container from 'components/Container'
import PostBody from 'components/PostBody'
import type { NextPage } from 'next'
import Head from 'next/head'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Container>
        <PostBody>
          <h1>私について</h1>
          <h2>☆名前</h2>
          <p>らいとです。由来は名前の光一から来ています。</p>
          <p>嘘です。正直なぜこの名前にしたか覚えていません。</p>
          <h2>☆好きなこと</h2>
          <p>読書、紅茶、瞑想が好きです。</p>
          <p>文学が好きな人と仲良くなりたいです。切実に。</p>
          <h2>☆競技プログラミングについて</h2>
          <p>AtCoder好きです! C++でやっています。</p>
          <p>レートは緑で、上位20%らしいです。すげ～</p>
          <a
            href="https://atcoder.jp/users/planck16"
            target="_blank"
            rel="noreferrer"
          >
            AtCoderのプロフィール
          </a>
        </PostBody>
      </Container>
    </div>
  )
}

export default About
