export interface IPost {
  id: number
  title: string
  description: string
  createdAt: string
  updatedAt: string
  authors: Array<IAuthor>
  comments: Array<IComment>
}

export interface IAuthor {
  id: number
  name: string
  avatar: string
  createdAt: string
  updatedAt: string
  postId: number
}

export interface IComment {
  id: number
  title: string
  description: string
  createdAt: string
  updatedAt: string
  postId: number
}
