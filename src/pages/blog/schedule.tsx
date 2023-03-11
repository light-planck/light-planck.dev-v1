import type { NextPage, GetStaticProps } from 'next'
import { client } from '../../../lib/api'

const Schedule: NextPage = () => {
  return <h1>title</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  const resPromise = client.get({
    endpoint: 'news',
  })

  try {
    const res = await resPromise
    console.log(res)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {},
  }
}

export default Schedule
