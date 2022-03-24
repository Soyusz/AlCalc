import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { usePostEntry } from "../../queries/usePostEntry";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

export const AddEntry = () => {
  const [params] = useSearchParams();
  const { mutate: createEntry } = usePostEntry();

  const [step, setStep] = useState<1 | 2>(1);
  const [image, setImage] = useState<null | string>(null);
  const [value, setValue] = useState({
    voltage: params.get("voltage") ?? "0",
    volume: params.get("volume") ?? "0",
    price: params.get("price") ?? "0",
    name: "",
  });

  const handleChange = (v: string, key: keyof typeof value) => {
    const newValue = { ...value };
    newValue[key] = v;
    setValue(newValue);
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
    if (step === 2)
      createEntry({
        voltage: parseFloat(value.voltage),
        volume: parseFloat(value.volume),
        price: parseFloat(value.price),
        name: value.name,
        photo: "",
      });
  };

  return (
    <>
      <Container>
        {step === 1 && (
          <Step1 value={value} update={handleChange} next={handleNext} />
        )}
        {step === 2 && (
          <Step2 next={handleNext} image={image} setImage={setImage} />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.s};
  padding-top: 30px;
`;
