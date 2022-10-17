import React from "react";
import {KnowledgeDomain} from "../../models/knowledge-domain.models";
import {Icon, Icons} from "../Icon/Icon";
import * as S from './knowledge-domain-card.styles';
import {Progress} from "./knowledge-domain-card.styles";


interface KnowledgeDomainCardProps {
    domain: KnowledgeDomain,
    title: string;
    progress: number
}

export function KnowledgeDomainCard(
    {
        title,
        domain,
        progress,
    }: KnowledgeDomainCardProps): JSX.Element {


    return (
        <S.KnowledgeDomainCard to={domain}>
            <Icon icon={domain}/>
            <h2>{title}</h2>
            <Icon icon={Icons.CHEVRON}/>
            <S.ProgressBar>
                <S.Progress width={(progress - 1) * 10} />
            </S.ProgressBar>
        </S.KnowledgeDomainCard>
    );
}
