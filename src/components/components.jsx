import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as RocketImg } from "../../src/rocket.svg";
import pedras from "./resorces/plastico.jpg"



const fire = keyframes`
  0% { color: #E80000; }
  50% { color: #f57c0b; }
  100% { color: #E80000; }
`
const flutua = keyframes`
  0% { transform: translateY(1em)}
  50% { transform: translateY(-1em) }
  100% {transform: translateY(1em)}
`



const animationKeyframe = keyframes`
  0% {
    transform: translateY(1px);
  }
  50% {
    transform: translateY(-1px);
  }
`;
const showEffect = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const hideEffect = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const stars = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(200vh);
  }
`;

const Scene = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(295deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 16%, #0b3702 27%, rgba(4,35,91,1) 37%, rgba(4,35,91,1) 41%, #081c09 51%, rgba(53,81,216,1) 62%, #010201 62%, #0b3610 83%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
`;

const RocketDiv = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  z-index: 2; /* Coloca o RocketDiv acima das estrelas */
  animation: ${animationKeyframe} infinite 200ms ease-in-out;
 

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: -380px;
    left: 19%;
    transform: translateX(50%);
    background: #0f8799;
    width: 13px;
    height: 180px;
    border-radius: 15px;
    animation: ${fire};
  }

  &::after {
    filter: blur(20px);
  }
`;

const Star = styled.i`
  position: absolute;
  top: -900px;
  height: ${(props) => props.height};
  animation: ${stars} linear infinite;
  animation-duration: ${(props) => props.duration || "34s"};
  animation-iteration-count: infinite;
  width: ${(props) => props.width || "2px"};
  left: ${(props) => props.left || "3px"};
  background: ${(props) => props.background};
  filter: ${(props) => (props.filtered ? "blur(15px)" : "none")};
`;

const Main = styled.div`
  background-color: #ea0404;
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSvg = styled(RocketImg)`
  position: absolute;
  z-index: 3; 
  animation: ${fire} infinite 3s ease; 
  width: 50%;
  


`;







const BlurContainer = styled.div`
    width: 500px;
    height: 400px;
    filter: blur(20px);
    background-color: white;
`

const Session = styled.div`
    width: 100%;
    min-height: 600px;
    overflow: hidden;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    `;
const ConteudoDivPresentation = styled.div`
    width: 80%;
    height: 80%;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 6px;
    z-index: 10;


`

const BigTitle = styled.h1`
    font-size: 3rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13rem;
    letter-spacing: 2px;   
    color: #0cc81f;
    filter: hue-rotate(40);
    stroke: #ffffff;
    text-shadow: 0 0 20px black;



    `
    const WelcomeDiv = styled.div`
    
    animation: ${flutua} infinite 2s ease-in-out;
    display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60%;
  z-index: 10;
  background-color: #121010ec;
  padding: 10px 20px;
  border-radius: 8px;


`
const WelcomeP = styled.p`
  font-family: sans-serif;
  font-weight: 300;
  color: whitesmoke;
  font-size: 30px;

`
const NextButton = styled.button`
  font-family: sans-serif;
  font-weight: 200;
  font-size: 10rem;
  color: white;
  padding: 5px 10px;
  background-color: #a8e500;

  border-radius: 6px;
  cursor:pointer;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;


`
const BackButton = styled.button`
  font-family: sans-serif;
  font-weight: 200;
  font-size: 10rem;
  color: white;
  margin: 10px;
  padding: 5px 10px;
  background-color: #6d02a3;
  border-radius: 6px;
  cursor:pointer;


`
const Mainstream2 =  styled.div`
    height: 200px;
    width: 80vw;
    border: black 4px solid;
`


const StyledName = styled.h1`
    color: #191919;
    font-family: 'Carter One', cursive;
   
    border-radius: 20px;

    z-index: 10;
`

export {showEffect, hideEffect,BackButton,NextButton, Scene, RocketDiv,WelcomeDiv,WelcomeP, RocketImg, Star, StyledName, StyledSvg, Session, ConteudoDivPresentation, BigTitle, Mainstream2}