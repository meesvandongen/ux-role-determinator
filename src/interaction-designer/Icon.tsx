import React from "react";
import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Clock } from "three";


export function Icon(): JSX.Element {
    const gltf = useLoader(GLTFLoader, 'src/interaction-designer/visual_design.gltf');
    const clock = new Clock;
    const myModel = React.useRef();
    gltf.scene.rotateY(10.5);
    gltf.scene.rotateX(.6);
    gltf.scene.position.set(0, 0 , 1);

    useFrame(() => {
        const a = clock.getElapsedTime();
        gltf.scene.rotateX(Math.sin(a / 5000));
        gltf.scene.rotateZ(Math.sin(a / 5000));
        console.log("Hey, I'm executing every frame!", a);
    });

    return(
        <>
            <pointLight position={[1, 1, 5]} color={0xCBD9EA} intensity={1.5} />
            <primitive object={gltf.scene} ref={myModel} />
        </>
    );
}