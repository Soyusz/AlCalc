import { useEffect, useState } from "react";
import styled from "styled-components";
import { BubbleContainer } from "../../components/BubbleContainer";
import { Input } from "../../components/Input";
import { Ring } from "./components/Ring";

export const Home = () => {
  const [value, setValue] = useState({
    voltage: "0",
    volume: "500",
    price: "1",
  });
  const [score, setScore] = useState(0);

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
      <BubbleContainer intensity={Math.min(100, score * 4)} />
      <StyledInput
        label="Voltage"
        value={value.voltage}
        onValueChange={(v) => handleChange(v, "voltage")}
        type="number"
      />
      <StyledInput
        label="Volume"
        value={`${value.volume}`}
        onValueChange={(v) => handleChange(v, "volume")}
        type="number"
      />
      <StyledInput
        label="Price"
        value={`${value.price}`}
        onValueChange={(v) => handleChange(v, "price")}
        type="number"
      />
      <Ring fill={Math.floor(score)} total={100}></Ring>
    </>
  );
};

const StyledInput = styled(Input)`
  align-self: stretch;
`;
