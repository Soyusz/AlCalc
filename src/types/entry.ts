export type Entry = {
  id: string
  user_id: string
  name: string
  price: number
  voltage: number
  volume: number
  verified: boolean | null
  photo: string | null
  label: string[]
}

export type NewEntry = Pick<Entry, 'voltage' | 'name' | 'price' | 'volume' | 'photo' | 'label'>
