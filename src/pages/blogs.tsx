import { client } from 'libs/client'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import type { Blog, Tag } from 'types/blog'

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog' })
  const tag = await client.get({ endpoint: 'tag' })
  
  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  }
}

interface Props {
  blogs: Blog[]
  tags: Tag[]
}

const Blogs: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}: Props) => {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs
