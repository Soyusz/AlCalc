import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useGesture, useHover, useMove } from "@use-gesture/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type DefaultTemplateProps = {
  className?: string;
  contentPadding?: string;
};

export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
  children,
  className,
  contentPadding,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const handleClickContent = () => {
    if (!showSidebar) return;
    setShowSidebar(false);
  };

  useGesture(
    {
      onHover: () => {
        console.log(2137);
      },
    },
    {
      target: contentRef,
    }
  );

  return (
    <Container className={className}>
      <Header onIconClick={() => setShowSidebar(!showSidebar)} />
      <Sidebar show={showSidebar} onClick={() => setShowSidebar(false)} />
      <Content
        onClick={handleClickContent}
        padding={contentPadding}
        variants={variants}
        animate={showSidebar ? "sidebar" : "normal"}
        initial={false}
        transition={{ type: "tween" }}
      >
        {children}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f7f7f7;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template: auto 1fr / auto 100vw;
  .Header {
    grid-column: 1 / 3;
  }
`;

const Content = styled(motion.div)<{ padding?: string }>`
  background-image: linear-gradient(
    to bottom,
    #266bff,
    #00a2e3,
    #00d09f,
    #9cf468
  );
  padding: ${(props) => props.padding ?? `20px 10px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  z-index: 32;
`;

const variants = {
  normal: {
    transform: "scale(1.01) rotateY(0deg)",
    borderRadius: 0,
    boxShadow: "0px 0px 10px 0px #00000000",
  },
  sidebar: {
    transform: "scale(0.9) rotateY(0deg)",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px #00000035",
  },
};
