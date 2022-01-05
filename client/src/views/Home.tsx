import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export const Home = () => {
  const [value, setValue] = useState({ voltage: "", volume: "", price: "" });
  const [score, setScore] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const calcScore = (voltage: number, price: number, volume: number) =>
    (voltage * volume) / (price * 100);

  const handleChange = (v: string, key: keyof typeof value) => {
    const newValue = { ...value };
    newValue[key] = v;
    setValue(newValue);
  };

  useEffect(() => {
    const { price, voltage, volume } = value;

    const nPrice = parseFloat(price);
    const nVoltage = parseFloat(voltage);
    const nVolume = parseFloat(volume);

    setScore(calcScore(nVoltage, nPrice, nVolume));
  }, [value]);

  return (
    <>
      <Header />
      <Container>
        <Input
          label="Voltage"
          value={value.voltage}
          onValueChange={(v) => handleChange(v, "voltage")}
          type="number"
          ref={inputRef}
        />
        <Input
          label="Volume"
          value={`${value.volume}`}
          onValueChange={(v) => handleChange(v, "volume")}
          type="number"
          ref={inputRef}
        />
        <Input
          label="Price"
          value={`${value.price}`}
          onValueChange={(v) => handleChange(v, "price")}
          type="number"
          ref={inputRef}
        />
        <Score>{score.toFixed(2)}</Score>
        <Button label={"nice cock"} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 30px 10px;
  align-items: stretch;
  flex: 1;

  button {
    align-self: center;
    margin-top: auto;
  }
`;

const Score = styled.div`
  align-self: center;
  font-size: 90px;
  margin: 30px 0px;
`;
