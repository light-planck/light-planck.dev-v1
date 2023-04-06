import 'styles/globals.css'
import type { AppProps } from 'next/app'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Layout from 'components/Layout'
import type { NextPage } from 'next'
config.autoAddCss = false

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
