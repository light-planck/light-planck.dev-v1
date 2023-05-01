import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Layout from 'components/Layout'
import type { NextPage } from 'next'
import 'modern-css-reset/dist/reset.min.css'
import { Roboto } from 'next/font/google'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

config.autoAddCss = false

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const global = css`
  background-color: #1e1e1e;
  color: white;
`

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={roboto.className} css={global}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
