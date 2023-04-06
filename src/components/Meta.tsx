import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { siteMeta } from 'lib/constants'
const { siteIcon } = siteMeta

interface Props {
  pageTitle: string
}

const Meta: NextPage<Props> = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />

      <Link rel="icon" href={siteIcon} />
      <Link rel="apple-touch-icon" href={siteIcon} />
    </Head>
  )
}

export default Meta
