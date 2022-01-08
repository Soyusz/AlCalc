import { motion } from "framer-motion";
import styled from "styled-components";
import { useEntry } from "../../queries/useEntry";
import { DefaultTemplate } from "../Templates/DefaultTemplate";
import { Row, RowProps } from "./components/Row";

export const Ranking = () => {
  useEntry();
  return (
    <>
      <Background>ranking</Background>
      <Content>
        {mockedData.map((el) => (
          <Row {...el} />
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
  flex: 1;
  margin: 10px 30px 0px 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 20px;
`;

const mockedData: RowProps[] = [
  {
    name: "harnas",
    place: 1,
    score: 15,
    image: "https://i.iplsc.com/000AAKKN0E39Y3MS-C0.jpeg",
  },
  {
    name: "amarena",
    place: 2,
    score: 15,
    image:
      "https://zrzutka.pl/uploads/chipin/49uvfj/cover/orginal/79aff3c48608253aeb3846237cc7e626.jpeg",
  },
  {
    name: "kustosz",
    place: 3,
    score: 13,
    image:
      "https://1.bp.blogspot.com/-lqaDqFMXSXw/WbGkt2mu8EI/AAAAAAAAB0M/czmoJOH2Xf4Dnb4LaCRYBQ4Gj4E92pdhgCLcBGAs/s1600/kustosz.JPG",
  },
  {
    name: "buh",
    place: 4,
    score: 6,
    image:
      "https://www.wiadomoscihandlowe.pl/media-standard/image/gallery/origin/c83ad96e0b31fd79d64990ddf06d5928/b6028fb5-b99c-4a43-801c-2c1961e4348f--buh.jpg",
  },
  {
    name: "kozel",
    place: 5,
    score: 0,
    image:
      "http://1.bp.blogspot.com/__WRcRMLIep8/THWExV30jUI/AAAAAAAAAiY/mX4ugTUM3-Q/s1600/Velkopopovicky+Kozel+Svetly.jpg",
  },
  {
    name: "buh",
    place: 6,
    score: 6,
    image:
      "https://www.wiadomoscihandlowe.pl/media-standard/image/gallery/origin/c83ad96e0b31fd79d64990ddf06d5928/b6028fb5-b99c-4a43-801c-2c1961e4348f--buh.jpg",
  },
  {
    name: "kozel",
    place: 7,
    score: 0,
    image:
      "http://1.bp.blogspot.com/__WRcRMLIep8/THWExV30jUI/AAAAAAAAAiY/mX4ugTUM3-Q/s1600/Velkopopovicky+Kozel+Svetly.jpg",
  },
  {
    name: "harnas",
    place: 8,
    score: 15,
    image: "https://i.iplsc.com/000AAKKN0E39Y3MS-C0.jpeg",
  },
  {
    name: "amarena",
    place: 9,
    score: 15,
    image:
      "https://zrzutka.pl/uploads/chipin/49uvfj/cover/orginal/79aff3c48608253aeb3846237cc7e626.jpeg",
  },
  {
    name: "kustosz",
    place: 10,
    score: 13,
    image:
      "https://1.bp.blogspot.com/-lqaDqFMXSXw/WbGkt2mu8EI/AAAAAAAAB0M/czmoJOH2Xf4Dnb4LaCRYBQ4Gj4E92pdhgCLcBGAs/s1600/kustosz.JPG",
  },
  {
    name: "buh",
    place: 11,
    score: 6,
    image:
      "https://www.wiadomoscihandlowe.pl/media-standard/image/gallery/origin/c83ad96e0b31fd79d64990ddf06d5928/b6028fb5-b99c-4a43-801c-2c1961e4348f--buh.jpg",
  },
  {
    name: "kozel",
    place: 12,
    score: 0,
    image:
      "http://1.bp.blogspot.com/__WRcRMLIep8/THWExV30jUI/AAAAAAAAAiY/mX4ugTUM3-Q/s1600/Velkopopovicky+Kozel+Svetly.jpg",
  },
  {
    name: "buh",
    place: 13,
    score: 6,
    image:
      "https://www.wiadomoscihandlowe.pl/media-standard/image/gallery/origin/c83ad96e0b31fd79d64990ddf06d5928/b6028fb5-b99c-4a43-801c-2c1961e4348f--buh.jpg",
  },
  {
    name: "kozel",
    place: 14,
    score: 0,
    image:
      "http://1.bp.blogspot.com/__WRcRMLIep8/THWExV30jUI/AAAAAAAAAiY/mX4ugTUM3-Q/s1600/Velkopopovicky+Kozel+Svetly.jpg",
  },
];
