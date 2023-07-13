import React, { useState, useContext } from "react";
import AppContext from "./AppContext";
import {
  Scene,
  Star,
  RocketDiv,
  StyledName,
  StyledSvg,
  Session,
  ConteudoDivPresentation,
  BigTitle,
  WelcomeDiv,
  WelcomeP,
  NextButton,
  BackButton,
} from "./components";
import Mainstream from "./Mainstream";
import AudioPlayer from "./BackgroundMusic.jsx";
import styled, { keyframes } from "styled-components";
import Prog from "./resorces/prog.jpg";
import backSvg from "./resorces/back3.svg";
import nextSvg from "./resorces/next.svg";


export const StyledP = styled.p`
  font-weight: 300;
  font-size: 23px;
  color: white;
  text-align: justify;
  min-width: 300px;
  display: inline-block;
  padding: 29px;
`;

export default function Home() {
  const { activeDiv, setActiveDiv } = useContext(AppContext);
  const handleNextClick = (e) => {
    e.preventDefault();
    const newActiveDiv = activeDiv + 1;
    setActiveDiv(newActiveDiv);
  };
  const handleBackClick = (e) => {
    e.preventDefault();
    const newActiveDiv = activeDiv - 1;
    setActiveDiv(newActiveDiv);
    
  };
  const criaEstelas = () => {
    let starsQuant = 90;
    const stars = [];

    for (let i = 0; i < starsQuant; i++) {
      const width = Math.random() * 15; //Math.floor(Math.random() * 200) + 3;
      const left = Math.floor(Math.random() * window.innerWidth);
      const duration = Math.floor(Math.random() * 15);
      const height = Math.floor(Math.random() * 100 + 300);
      const background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`;

      stars.push(
        <Star
          key={i}
          width={width + "px"}
          left={left + "px"}
          height={height + "px"}
          duration={duration + "s"}
          background={background}
          filtered={false}
        />
      );
      stars.push(
        <Star
          key={i+300}
          width={width + "px"}
          left={left + "px"}
          height={height + "px"}
          duration={duration + "s"}
          background={background}
          filtered={true}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <Scene>
        {criaEstelas()}

        <Mainstream id={0}>
          <ConteudoDivPresentation>
            <BigTitle>@duzi5</BigTitle>
          </ConteudoDivPresentation>
          <WelcomeDiv>
            <WelcomeP>
              Chegue mais! Venha conferir meu site.
              <NextButton onClick={handleNextClick}>
                <img style={{ height: "5rem" }} src={nextSvg} />
              </NextButton>
            </WelcomeP>
          </WelcomeDiv>
        </Mainstream>

        <Mainstream
          id={1}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div>
            <div className="texto" style={{ display: "inline" }}>
              <StyledP>
                Olá! Sou um economista que se apaixonou pelo mundo da
                programação web. Combinando minhas habilidades em economia e
                desenvolvimento, estou trilhando o caminho para criar uma ponte
                entre essas duas áreas. Atualmente, estou focado no
                desenvolvimento da aplicação financeira Akiva, explorando o
                universo do Python e JavaScript. Minha busca constante é pela
                melhor experiência do usuário, buscando alcançar o mais alto
                nível de inteligência em minhas aplicações. Meu objetivo é
                desenvolver soluções que ultrapassem as expectativas e ofereçam
                uma experiência superior.
              </StyledP>
            </div>

            <img
              src={Prog}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                display: "inline",
                justifySelf: "center",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}> </div>
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "10px",
            }}
          >
            {" "}
            <NextButton onClick={handleNextClick}>
              <img style={{ height: "5rem" }} src={nextSvg} />
            </NextButton>
            <BackButton onClick={handleBackClick}>
              <img style={{ height: "5rem" }} src={backSvg} />{" "}
            </BackButton>
          </div>
        </Mainstream>

        {/* <AudioPlayer/> */}
      </Scene>
    </>
  );
}
