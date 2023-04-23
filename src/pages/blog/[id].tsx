import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from 'libs/client'
import type { Blog } from 'types/blog'
import Container from 'components/Container'
import PostBody from 'components/PostBody'
import { load } from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string | undefined
  const data = await client.get({ endpoint: 'blog', contentId: id })

  const $ = load(data.body)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  data.body = $.html()

  return {
    props: {
      blog: data,
    },
  }
}

interface Props {
  blog: Blog
}

const BlogId: NextPage<Props> = ({ blog }: Props) => {
  return (
    <Container>
      <PostBody>
        {blog.tags.map((tag) => (
          <li key={tag.id}>#{tag.tag}</li>
        ))}
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </PostBody>
    </Container>
  )
}

export default BlogId
