import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Mesh({ color, color2, ...props }) {
  const { nodes, materials } = useGLTF("/awda.glb");

  const test = useRef();
  const animationDone = useRef(false); // Ref para almacenar si la animación ya se ejecutó

  useEffect(() => {
    if (!test.current || animationDone.current) return;

    const tl = gsap.timeline({
      yoyo: false,
      ease: "power1.inOut",
      duration: 10,
      delay: 5,
      onComplete: () => {
        animationDone.current = true; // Marcar como hecho cuando se complete
      },
    });

    tl.to(
      test.current.position,
      {
        y: 0,
        duration: 3,
      },
      0
    );
    tl.to(
      test.current.rotation,
      {
        x: Math.PI / 1,
        y: Math.PI * 2,
        z: Math.PI * 0.5,
      },
      0
    );
    tl.to(
      test.current.rotation,
      {
        x: Math.PI / 2,
        y: Math.PI / 0.47,
        z: Math.PI / 1,
        duration: 3,
      },
      2
    );
    tl.to(
      test.current.position,
      {
        x: () => {
          return window.innerWidth > 768 ? 1.8 : 0;
        },
        duration: 3,
      },
      4
    );

    return () => {
      tl.kill(); // Limpiar la animación si el componente se desmonta
    };
  }, []); // Solo ejecutar al montar el componente

  // Asegurarse de que los colores cambien sin reiniciar la animación
  useEffect(() => {
    if (test.current) {
      test.current.traverse((child) => {
        if (child.isMesh) {
          if (child.material) {
            if (
              child.geometry === nodes.suelaZapato.geometry ||
              child.geometry === nodes.colorBaseZapato.geometry
            ) {
              child.material.color.set(color2);
            } else {
              child.material.color.set(color);
            }
          }
        }
      });
    }
  }, [
    color,
    color2,
    nodes.suelaZapato.geometry,
    nodes.colorBaseZapato.geometry,
  ]); // Cambiar los colores sin afectar la animación

  return (
    <group
      ref={test}
      position={[0, 5, 0]}
      {...props}
      dispose={null}
      receiveShadow
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.suelaZapato.geometry}
        material={materials.colorSceundarioAbajo}
        scale={0.1}
      >
        <meshStandardMaterial color={color2} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interiorZapato.geometry}
        material={materials.colorPrimario}
        scale={0.1}
      >
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lenguaZapato.geometry}
        material={materials.lenguaExterior}
        scale={0.1}
      >
        <meshStandardMaterial color={color2} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logoZapato.geometry}
        scale={0.1}
      >
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.decoracionLadoZapato.geometry}
        material={materials.colorPrimario}
        scale={0.1}
      >
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interiorZapatoFoam.geometry}
        material={materials.interior}
        scale={0.1}
      >
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.agujetaZapato.geometry}
        material={materials.colorPrimario}
        scale={0.1}
      >
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.colorBaseZapato.geometry}
        material={materials.colorSecundario}
        scale={0.1}
      >
        <meshStandardMaterial color={color2} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/awda.glb");
