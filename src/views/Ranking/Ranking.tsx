import { motion } from "framer-motion";
import styled from "styled-components";
import { useEntry } from "../../queries/useEntry";
import { Row } from "./components/Row";

export const Ranking = () => {
  const { data } = useEntry();

  const calcScore = (voltage: number, price: number, volume: number) =>
    (voltage * volume) / (price * 100);

  return (
    <>
      <Background>ranking</Background>
      <Content>
        {data
          ?.map((el) => ({
            id: el.id,
            name: el.name,
            photo: el.photo,
            score: calcScore(el.voltage, el.price, el.volume),
          }))
          .sort((a, b) => b.score - a.score)
          .map((el, index) => (
            <Row {...el} place={index + 1} />
          ))}
      </Content>
    </>
  );
};

const Background = styled(motion.div)`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  font-weight: 200;
  letter-spacing: 10px;
`;

const Content = styled.div`
  background-color: #ffffff;
  align-self: stretch;
  margin: 10px 10px 0px 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 20px;
  flex: 1;
  margin-bottom: -20px;
  padding-bottom: 20px;
`;
