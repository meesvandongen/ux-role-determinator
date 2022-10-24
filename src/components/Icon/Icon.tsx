import React from "react";
import { VisualDesignIcon } from "./icons/VisualDesign.icon";
import { DevelopmentIcon } from "./icons/Development.icon";
import * as S from "./icon.styles";
import { IconSvg } from "./icon.styles";
import { WritingIcon } from "./icons/Writing.icon";
import { ResearchIcon } from "./icons/Research.icon";
import { ManagingIcon } from "./icons/Managing.icon";
import { ChevronIcon } from "./icons/Chevron.icon";
import { KnowledgeDomain } from "../../models/knowledge-domain.models";

export enum Icons {
  CHEVRON,
}

interface IconProps {
  hoverable?: boolean;
  icon: Icons | KnowledgeDomain;
}

export function Icon({ hoverable = false, icon }: IconProps): JSX.Element {
  return (
    <S.IconSvg
      className={hoverable ? "hoverable" : ""}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon === KnowledgeDomain.DEVELOPMENT && <DevelopmentIcon />}

      {icon === KnowledgeDomain.WRITING && <WritingIcon />}

      {icon === KnowledgeDomain.RESEARCH && <ResearchIcon />}

      {icon === KnowledgeDomain.MANAGING && <ManagingIcon />}

      {icon === Icons.CHEVRON && <ChevronIcon />}

      {icon === KnowledgeDomain.VISUAL_DESIGN && <VisualDesignIcon />}
    </S.IconSvg>
  );
}
