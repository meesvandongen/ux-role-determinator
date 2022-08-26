import React from 'react';
import {IconCanvas} from "../IconCanvas";
import {Logo} from "../Logo/Logo";
import * as S from './questionnaire-layout.styles';
import {IconCanvasContainer} from "./questionnaire-layout.styles";


interface QuestionnaireLayoutProps {
    title: string;
    description: React.ReactNode;
    questions: React.ReactNode;
    three: React.ReactNode;
}

export function QuestionnaireLayout(
    {
        description,
        questions,
        three,
        title,
    }: QuestionnaireLayoutProps): JSX.Element {

    return (
        <S.QuestionnaireLayout>
            <S.QuestionnaireHeader>
                <S.IconCanvasContainer className="bg-gradient-radial from-blue-50 to-blue-200">
                    <IconCanvas>{three}</IconCanvas>
                </S.IconCanvasContainer>
                <S.QuestionnaireHeaderContent>
                    <Logo/>
                    <div className="foreword">
                        <h1>{title}</h1>
                        {description}
                        <S.ButtonLink href="#questionnaire">
                            <span>Naar vragenlijst</span>
                        </S.ButtonLink>
                    </div>
                </S.QuestionnaireHeaderContent>
            </S.QuestionnaireHeader>
            <S.Questionnaire id="questionnaire">
                {questions}
            </S.Questionnaire>
        </S.QuestionnaireLayout>
    );
}