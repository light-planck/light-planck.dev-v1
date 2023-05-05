import PostBody from 'components/PostBody'
import type { NextPage } from 'next'
import Head from 'next/head'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <PostBody>
        <h1>私について</h1>
        <h2>☆名前</h2>
        <p>らいとです💡</p>
        <h2>☆好きなこと</h2>
        <p>プログラミング・読書・瞑想・蕎麦・サウナ</p>
        <h2>☆競技プログラミングについて</h2>
        <p>AtCoder好きです💞C++でやっています。</p>
        <p>レートは緑🟩（上位30%）です！</p>
        <a
          href="https://atcoder.jp/users/planck16"
          target="_blank"
          rel="noreferrer"
        >
          AtCoderのプロフィールはこちら
        </a>
      </PostBody>
    </div>
  )
}

export default About
