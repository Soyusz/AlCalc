import styled from "styled-components";
import { useUser } from "../../queries/useUser";
import { Entry as EntryType } from "../../types/entry";

const sampleImage = "https://avatars.githubusercontent.com/u/45801065";

export const Top = (props: EntryType) => {
  const { data: user } = useUser(props.user_id);
  return (
    <Container>
      <UserPhoto src={sampleImage} />
      <Username>{user?.name}</Username>
      <Location>{props.name}</Location>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template: auto / auto 1fr;
  margin: 10px 5px;
`;

const UserPhoto = styled.img`
  height: 35px;
  widht: 35px;
  border-radius: 50%;
  grid-row: 1 / 3;
  margin-right: 10px;
`;
const Username = styled.div`
  font-weight: 600;
`;

const Location = styled.div`
  font-weight: 300;
  font-size: 14px;
`;
