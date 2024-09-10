// Components
import MainPage from "./components/pages/MainPage";
import Navbar from "./components/Navbar";
import Background from "./components/Experience/Background";

// Tools
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Html,
  Environment,
  useTexture,
  Effects,
} from "@react-three/drei";
import styled from "styled-components";
import Mesh from "./components/Experience/Mesh";
import {
  EffectComposer,
  Bloom,
  Glitch,
  ChromaticAberration,
} from "@react-three/postprocessing";

// background image
import bg from "./assets/img2.png";

// Styles
const theme = {
  colors: {
    primary: "#F39F4E",
    secondary: "#FCE7CC",
    black: "#1c1c1c",
  },
  fonts: {
    primary: "Lato, sans-serif",
    secondary: "Georgia, serif",
  },
};

const ContainerCanvas = styled.div`
  height: 100dvh;
  width: 100vw;
  position: fixed;
  z-index: -1;
`;

function App() {
  const [color, setColor] = useState("orange");
  const [color2, setColor2] = useState("white");

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <ContainerCanvas>
          <Canvas
            gl={{ alpha: false, antialias: false }}
            shadowMap
            shadows="true"
            colorManagement
            camera={{ position: [0, 0, 5], fov: 40 }}
          >
            <OrbitControls />
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
            <ambientLight color={"f2f2f2"} intensity={0.1} />
            <directionalLight
              color={"#f2f2f2"}
              intensity={2}
              position={[5, 0, 2]}
              castShadow
              shadow-bias={-0.0003}
            />
            <directionalLight
              color={"#f2f2f2"}
              intensity={0.1}
              position={[-5, 0, 2]}
              castShadow
              shadow-bias={-0.0003}
            />
            <Environment preset="city" environmentIntensity={0.1} />
            <Mesh color={color} color2={color2} />
            <Background />
            <EffectComposer>
              <Bloom
                intensity={1.3}
                width={1024}
                height={1024}
                kernelSize={5}
                luminanceSmoothing={0.025}
                luminanceThreshold={0.15}
              />
              <ChromaticAberration offset={[0.0005, 0.0012]} />
            </EffectComposer>
          </Canvas>
        </ContainerCanvas>
        <MainPage setColor={setColor} setColor2={setColor2} />
      </ThemeProvider>
    </>
  );
}

export default App;
