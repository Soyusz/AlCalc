export type Post = {
  title: string
  location: string | null
  photos: string[]
  id: string
  user_id: string
  skeleton?: boolean
}

export type NewPost = Pick<Post, 'photos' | 'location' | 'title'>
