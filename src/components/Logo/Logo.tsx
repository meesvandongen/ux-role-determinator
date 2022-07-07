import React from "react";
import * as S from './logo.styles';
import {LogoSvg} from "./logo.styles";

export function Logo(): JSX.Element {
    return (
        <S.Logo>
        <S.LogoSvg viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3205 1.96392C17.9393 1.60665 18.7017 1.60665 19.3205 1.96392L34.641 10.8092C35.2598 11.1665 35.641 11.8267 35.641 12.5413V30.2319C35.641 30.9464 35.2598 31.6067 34.641 31.9639L19.3205 40.8092C18.7017 41.1665 17.9393 41.1665 17.3205 40.8092L2 31.9639C1.3812 31.6067 1 30.9464 1 30.2319V12.5413C1 11.8267 1.3812 11.1665 2 10.8092L17.3205 1.96392Z" stroke="#150C21" stroke-width="2"/>
            <path d="M35.641 11.3866L1.00001 31.3866" stroke="#150C21"/>
            <path d="M1.00002 11.3866L35.641 31.3866" stroke="#150C21"/>
            <path d="M18.3205 11.3866L26.9808 16.3866V26.3866L18.3205 31.3866L9.66026 26.3866V16.3866L18.3205 11.3866Z" stroke="#150C21"/>
            <path d="M18.3205 1V41.3866" stroke="#150C21"/>
        </S.LogoSvg>
            <span>UX Kennismatrix</span>
        </S.Logo>
    );
}