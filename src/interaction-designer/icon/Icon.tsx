import React, { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import iconURL from "./visual_design.gltf?url";

type GLTFResult = GLTF & {
  nodes: {
    pen: THREE.Mesh;
    ruler: THREE.Mesh;
    ruler_guides: THREE.Mesh;
  };
  materials: {
    pen: THREE.MeshStandardMaterial;
    ruler: THREE.MeshStandardMaterial;
  };
};

export function Icon(): JSX.Element {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(iconURL) as GLTFResult;
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    camera.lookAt(0, 2, 0);
  }, [camera]);

  useFrame((state) => {
    if (!group.current) {
      return;
    }
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <>
      <pointLight position={[1, 1, 5]} color={0xcbd9ea} intensity={1.5} />
      <group position={[0, 2, 0]} rotation={[Math.PI / 2, 0, Math.PI / 3]}>
        <group ref={group} dispose={null}>
          <mesh
            geometry={nodes.pen.geometry}
            material={materials.pen}
            scale={0.9}
          />
          <mesh
            geometry={nodes.ruler.geometry}
            material={materials.ruler}
            scale={[1, 0.7, 0.9]}
          />
          <mesh
            geometry={nodes.ruler_guides.geometry}
            material={materials.ruler}
            position={[0, 0.4, 0]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload(iconURL);
