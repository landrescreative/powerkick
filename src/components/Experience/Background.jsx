import { useTexture } from "@react-three/drei";
import React from "react";
import bg from "../../assets/img2.png";

export default function Background() {
  const texture = useTexture(bg);
  return (
    <>
      <mesh position={[0, 0, -20]}>
        <planeGeometry attach="geometry" args={[50, 20]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </>
  );
}
