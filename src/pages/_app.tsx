import 'styles/styles.css'
import type { AppProps } from 'next/app'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

import Layout from 'components/Layout'
import type { NextPage } from 'next'
import 'modern-css-reset/dist/reset.min.css'

import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

config.autoAddCss = false

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
