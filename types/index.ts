export interface IPost {
  id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  authors: Array<IAuthor>
  comments: Array<IComment>
}

export interface IAuthor {
  id: string
  name: string
  avatar: string
  createdAt: string
  updatedAt: string
  postId: string
}

export interface IComment {
  id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  postId: string
}
