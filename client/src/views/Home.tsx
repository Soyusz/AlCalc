import { useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export const Home = () => {
  const [value, setValue] = useState({ voltage: 0, volume: 0, price: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const calcScore = () => (value.voltage * value.volume) / value.price;

  return (
    <>
      <Header />
      <Container>
        <Input
          label="Voltage"
          value={`${value.voltage}`}
          onValueChange={(v) => setValue({ ...value, voltage: parseFloat(v) })}
          ref={inputRef}
        />
        <Input
          label="Volume"
          value={`${value.volume}`}
          onValueChange={(v) => setValue({ ...value, volume: parseFloat(v) })}
          ref={inputRef}
        />
        <Input
          label="Price"
          value={`${value.price}`}
          onValueChange={(v) => setValue({ ...value, price: parseFloat(v) })}
          ref={inputRef}
        />
        <Score>{calcScore()}</Score>
        <Button label={"nice cock"} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: stretch;

  button {
    align-self: center;
  }
`;

const Score = styled.div`
  align-self: center;
  font-size: 90px;
  margin: 30px 0px;
`;
