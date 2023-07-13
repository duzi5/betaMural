import styled, { keyframes } from "styled-components";
import { NextButton } from "./components";
import AppContext from "./AppContext";
import React, { useContext, useEffect, useState } from "react";

const MainstreamDiv = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: #030202dc;
  z-index: 10;
  color: white;
  animation: ${(props) => (props.visible ? fadeIn : fadeOut)} 1s ease-in-out;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export default function Mainstream(props) {
  const { activeDiv } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(props.id === activeDiv);
  }, [props.id, activeDiv]);

  return (
    <MainstreamDiv visible={isVisible} style={{ display: isVisible ? "block" : "none" }}>
      {props.children}
    </MainstreamDiv>
  );
}
