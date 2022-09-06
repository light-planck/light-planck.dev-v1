import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'
import PostBody from 'components/PostBody'
import { NextPage } from 'next'

const about: NextPage = () => {
  return (
    <Container>
      <Meta pageTitle="About" />
      <Hero title="About" subtitle="私について" />

      <PostBody>
        <p>Cubeが得意とする分野はモノづくりです。</p>
        <h2>モノづくりで目指していること</h2>
        <p>
          モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。
        </p>
        <p>
          単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。
        </p>
        <h3>新しいことへのチャレンジ</h3>
        <p>今までと違うものを作ることで愛着が湧いてきます。</p>
      </PostBody>
    </Container>
  )
}

export default about
