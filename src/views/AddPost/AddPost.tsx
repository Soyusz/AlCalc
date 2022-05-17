import { useState } from 'react'
import styled from 'styled-components'

export const AddPost = () => {
  const [images, setImages] = useState<string[]>([])

  return <Container>add post</Container>
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.s};
  padding-top: 30px;
`
