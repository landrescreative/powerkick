import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  width: 100vw;

  .header-text {
    width: 30%;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 4rem;
      color: #f2f2f2;
      line-height: 0;
      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: ${(props) => props.theme.fonts.primary};

      &:first-child {
        align-self: flex-start;
        font-weight: 300;
      }

      &:last-child {
        align-self: flex-end;
        font-weight: 700;
      }
    }
  }

  .texts {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  // Hero section Configurator
  .header-hero {
    display: none;
    width: 90%;
    font-size: 2rem;
    color: #f2f2f2;
    line-height: 0.5;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fonts.primary};
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .new-tag {
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 3rem;
        writing-mode: vertical-rl;
        text-orientation: sideways;
        line-height: 0;
        letter-spacing: 0;
      }
    }
  }

  .header-configurator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 1rem;
      color: #f2f2f2;
      line-height: 0.5;
      text-align: left;
      align-self: flex-start;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: ${(props) => props.theme.fonts.primary};
    }

    .header-configurator-buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    button {
      background-color: #f2f2f2;
      color: #1c1c1c;
      font-size: 1rem;
      padding: 1rem 2rem;
      margin: 0 1rem;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      font-family: ${(props) => props.theme.fonts.primary};

      &:hover {
        background-color: #1c1c1c;
        color: #f2f2f2;
      }
    }
  }
`;

export default function MainPage({ setColor, setColor2 }) {
  gsap.registerPlugin(useGSAP);
  var introText = document.getElementsByClassName("header-text");
  var heroText = document.getElementsByClassName("header-hero");

  useGSAP(() => {
    var tl = gsap.timeline({
      yoyo: false,
      ease: "power1.inOut",
    });
    tl.fromTo(
      ".header-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
      },
      0
    );
    tl.to(
      ".header-text",
      {
        width: "90%",
        duration: 5,
        delay: 2,
      },
      1
    );
    tl.to(
      ".header-text",
      {
        opacity: 0,
        duration: 3,
        delay: 5,
        onComplete: () => {
          introText[0].style.display = "none";
          heroText[0].style.display = "flex";

          gsap.fromTo(
            ".header-hero",
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 3,
            }
          );
        },
      },
      2
    );
  });

  // Función para cambiar ambos colores
  const handleColorChange = (newColor, newColor2) => {
    setColor(newColor); // Cambiar el primer color
    setColor2(newColor2); // Cambiar el segundo color
  };

  return (
    <Container>
      <div className="header-text">
        <h1>POWERKICK</h1>
        <h1>AIR FORCE 2</h1>
      </div>
      <div className="header-hero">
        <div className="texts">
          <div className="new-tag">
            <h1>NEW</h1>
          </div>
          <div className="hero-texts">
            <h1>Powerkick</h1>
            <h1>Air Force 2</h1>
          </div>
        </div>
        <div className="header-configurator">
          <h1>CHOOSE YOUR STYLE</h1>
          <div className="header-configurator-buttons">
            <button
              onClick={() => handleColorChange("#FB8D24", "#FFFFFF")} // Lima y Dorado
            >
              1
            </button>

            <button
              onClick={() => handleColorChange("#FF1493", "#00BFFF")} // Rosa Profundo y Azul Cielo
            >
              2
            </button>

            <button
              onClick={() => handleColorChange("#00FF7F", "#FF00FF")} // Verde Primavera y Magenta
            >
              3
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
