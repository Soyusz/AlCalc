export type User = {
  id: string
  name: string
  email: string
  role: 'User' | 'Admin'
  photo: string | null
  description: string | null
  displayName: string | null
}
