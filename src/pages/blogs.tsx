import Container from 'components/Container'
import Meta from 'components/Meta'
import PostBody from 'components/PostBody'
import { client } from 'libs/client'
import type {
  InferGetStaticPropsType,
  NextPage,
  GetStaticPropsResult,
} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import type { Blog, Tag } from 'types/blog'

interface Props {
  blogs: Blog[]
  tags: Tag[]
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const blog = await client.get({ endpoint: 'blog' })
  const tag = await client.get({ endpoint: 'tag' })

  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  }
}

const Blogs: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}: Props) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Meta pageTitle="Blogs" />
        <PostBody>
          <h1>記事一覧</h1>
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  {blog.title}({blog.updatedAt})
                </Link>
              </li>
            ))}
          </ul>
        </PostBody>
      </Container>
    </div>
  )
}

export default Blogs
