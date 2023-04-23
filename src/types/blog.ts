export interface Blog {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  tags: Tag[]
}

export interface Tag {
  id: string
  tag: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}
