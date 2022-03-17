import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useUserContext } from "../../contexts/useUserContext";
import { useNavigation } from "../../hooks/useNavigation";
import { useLogin } from "../../queries/useLogin";

export const Login = () => {
  const { mutate, isSuccess, data } = useLogin();
  const navigation = useNavigation();
  const { setToken } = useUserContext();
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (!email) return;
    mutate({ email });
  };

  useEffect(() => {
    if (!isSuccess || !data?.token) return;
    setToken(data.token);
    navigation.navigate("/");
  }, [isSuccess]);

  return (
    <>
      <Container>
        <SInput
          value={email}
          onValueChange={setEmail}
          label="email"
          placeholder="Email"
        />
        <SButton label="Log in" onClick={handleClick} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: grid !important;
  justify-items: center;
  grid-template: 2fr auto auto 3fr / 1fr;
`;

const SInput = styled(Input)`
  grid-row: 2 / 3;
  width: 180px;
`;

const SButton = styled(Button)`
  grid-row: 3 / 4;
`;
