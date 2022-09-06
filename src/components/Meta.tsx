import { NextPage } from 'next'
import Head from 'next/head'

interface Props {
  pageTitle: string
}

const Meta: NextPage<Props> = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
    </Head>
  )
}

export default Meta
