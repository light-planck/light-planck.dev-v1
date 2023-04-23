export interface Blog {
  id: string
  body: string
  title: string
  tags: Tag[]
  image: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export interface Tag {
  id: string
  tag: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}
