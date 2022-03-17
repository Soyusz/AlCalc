import { useEffect, useState } from "react";
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
      <h1>login panel</h1>
      <Input value={email} onValueChange={setEmail} label="email" />
      <Button label="Log in" onClick={handleClick} />
    </>
  );
};
