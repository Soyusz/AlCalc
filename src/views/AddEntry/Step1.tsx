import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

type Props = {
  value: { volume: string; price: string; voltage: string; name: string };
  update: (v: string, k: "volume" | "price" | "voltage" | "name") => void;
  next: () => void;
};

export const Step1 = ({ value, update, next }: Props) => {
  return (
    <Container>
      <StyledInput
        label="Name"
        value={value.name}
        onValueChange={(v) => update(v, "name")}
        type="text"
      />
      <StyledInput
        label="Voltage"
        value={value.voltage}
        onValueChange={(v) => update(v, "voltage")}
        type="number"
      />
      <StyledInput
        label="Volume"
        value={`${value.volume}`}
        onValueChange={(v) => update(v, "volume")}
        type="number"
      />
      <StyledInput
        label="Price"
        value={`${value.price}`}
        onValueChange={(v) => update(v, "price")}
        type="number"
      />
      <NextButton label="Next" onClick={next} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const StyledInput = styled(Input)`
  align-self: stretch;
`;

const NextButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 50px;
`;
