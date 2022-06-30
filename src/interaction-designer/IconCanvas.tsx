import React from "react";
import { Icon } from "./Icon";
import { Canvas } from '@react-three/fiber';

export function IconCanvas(): JSX.Element {
    return(
        <Canvas>
            <Icon/>
        </Canvas>
    );
}