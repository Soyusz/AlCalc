import { motion } from "framer-motion";
import styled from "styled-components";

type SidebarProps = {
  show: boolean;
};

export const Sidebar = ({ show }: SidebarProps) => {
  return (
    <Container animate={{ width: show ? 200 : 0 }}>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </Container>
  );
};

const Container = styled(motion.div)`
  background-color: #0e7ed3;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
