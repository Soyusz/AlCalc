import styled from 'styled-components'
import { useMyEntries } from '../../queries/useMyEntries'
import { Entry } from '../../types/entry'
import pendingIcon from '../../assets/pending.png'
import acceptedIcon from '../../assets/accepted.png'
import rejectedIcon from '../../assets/rejected.png'
import { StackHeader } from '../../components/StackHeader'

export const MyEntriesStatus = () => {
  const { data } = useMyEntries()
  return (
    <Container>
      <StackHeader />
      {data?.length === 0 && (
        <Empty>
          <h1>Nothing here!</h1>
          <h2>Here you will see the entries you added</h2>
        </Empty>
      )}
      <Scroll>
        {data?.map((entry) => (
          <Element {...entry} />
        ))}
      </Scroll>
    </Container>
  )
}

const Element = (p: Entry) => {
  return (
    <ElementContainer>
      <img src={p.photo ?? undefined} />
      <div>{p.name}</div>

      {p.verified === null && <img src={pendingIcon} />}
      {p.verified === true && <img src={acceptedIcon} />}
      {p.verified === false && <img src={rejectedIcon} />}
    </ElementContainer>
  )
}

const ElementContainer = styled.div`
  display: grid;
  grid-template: 1fr / 75px 1fr auto auto;
  background: white;
  border-radius: 15px;
  margin: 10px;
  box-shadow: 0 0 10px 0px #ccc;
  height: 100px;
  overflow: hidden;

  > img:first-of-type {
    height: 100px;
    width: 75px;
    object-fit: cover;
  }
  > img:last-of-type {
    height: 35px;
    margin: auto 20px;
  }
  > div {
    padding: 20px;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-height: 100vh;
  padding-bottom: 55px;
  overflow: scroll;
  height: 100%;
`

const Scroll = styled.div``

const Empty = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex: 1;

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
  }
`
