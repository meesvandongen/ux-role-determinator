import React from "react";
import {VisualDesignIcon} from "./icons/VisualDesign.icon";
import {DevelopmentIcon} from "./icons/Development.icon";
import * as S from './icon.styles';
import {IconSvg} from "./icon.styles";
import {WritingIcon} from "./icons/Writing.icon";
import {ResearchIcon} from "./icons/Research.icon";
import {ManagingIcon} from "./icons/Managing.icon";
import {ChevronIcon} from "./icons/Chevron.icon";

export enum Icons {
    VISUAL_DESIGN,
    DEVELOPMENT,
    WRITING,
    RESEARCH,
    MANAGING,
    CHEVRON
}

interface IconProps {
    hoverable?: boolean;
    icon: Icons
}

export function Icon(
    {
        hoverable = false,
        icon,
    }: IconProps): JSX.Element {
    return (
        <S.IconSvg className={hoverable ? 'hoverable' : ''}
             viewBox="0 0 56 56" fill="none"
             xmlns="http://www.w3.org/2000/svg">

            {icon === Icons.VISUAL_DESIGN && (
                <VisualDesignIcon />
            )}

            {icon === Icons.DEVELOPMENT && (
                <DevelopmentIcon />
            )}

            {icon === Icons.WRITING && (
                <WritingIcon />
            )}

            {icon === Icons.RESEARCH && (
                <ResearchIcon />
            )}

            {icon === Icons.MANAGING && (
                <ManagingIcon />
            )}

            {icon === Icons.CHEVRON && (
                <ChevronIcon />
            )}
        </S.IconSvg>
    );
}