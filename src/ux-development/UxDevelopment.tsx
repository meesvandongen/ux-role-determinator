import React from "react";
import {CodeUxAdvocate} from "./questions/CodeUxAdvocate";
import {DesignImplementation} from "./questions/DesignImplementation";
import {RichInteraction} from "./questions/RichInteraction";
import {QuestionnaireLayout} from "../components/QuestionnaireLayout/QuestionnaireLayout";

export function UxDevelopment(): JSX.Element {
    return (
        <QuestionnaireLayout
            title={"UX Development"}
            description={
                <>
                    <p>
                        Bij UX Development verbindt een UX Specialist creativiteit en
                        techniek. Met een ultieme gebruikerservaring als uitgangspunt,
                        schrijft een UX Specialist code om designs en architecturen tot
                        leven te brengen.
                    </p>
                    <p>
                        Een UX Specialist houdt zich up-to-date met de nieuwste
                        technologieën en weet welke technologische toepassingen het beste
                        aansluiten bij de gebruikersbehoefte en bedrijfsstrategie.
                    </p>
                </>
            }
            questions={
                <>
                    <DesignImplementation/>
                    <RichInteraction/>
                    <CodeUxAdvocate/>
                </>
            }
            three={"placeholder"}
        />
    );
}
