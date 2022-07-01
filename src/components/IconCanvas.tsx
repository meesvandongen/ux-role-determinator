import React from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";

export function IconCanvas({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 10], fov: 50 }}>
      <ContactShadows
        position={[0, -1.4, 0]}
        color={0x92afd3}
        opacity={1}
        scale={10}
        blur={5}
        far={4}
      />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        castShadow
      />

      {children}
    </Canvas>
  );
}
