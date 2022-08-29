import React from "react";
import {useSnapshot} from "valtio";
import {selfAssessmentState} from "../../state";
import {SkillAssessment} from "../../components/SkillAssessment/SkillAssessment";

export function ContentWriting(): JSX.Element {
    const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

    return (
        <SkillAssessment
            onSkillAssessmentChange={(newValue) => {
                selfAssessmentState.contentWriting = newValue;
            }}
            skillAssessmentValue={selfAssessmentSnapshot.contentWriting}
            subject="Content schrijven"
            description={
                <>
                    <p>
                        Bijdragen aan het creatieve proces in samenwerking met de Creative
                        Frontend Developer, User Researcher en Visual/Interaction Designer.
                    </p>
                    <p>Creëren van microcopy in de juiste tone of voice.</p>
                    <p>
                        Vertalen van de wensen van business naar de juiste copy voor de
                        (eind)gebruiker.
                    </p>
                </>
            }

        />
    );
}
