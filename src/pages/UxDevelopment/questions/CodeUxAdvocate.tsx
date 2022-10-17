import React from "react";
import {useSnapshot} from "valtio";
import {selfAssessmentState} from "../../../state";
import {SkillAssessment} from "../../../components/SkillAssessment/SkillAssessment";

export function CodeUxAdvocate(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.codeUxAdvocate = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.codeUxAdvocate}
      subject="UX vertegenwoordiger in code"
      description={
        <>
          <p>Beheren en bewaken van styleguides in de code</p>
          <p>
            Browser en device limitaties omzeilen door middel van progressive
            enhacement / graceful degredation en daarmee de gebruikerservaring
            gelijk te trekken / verbeteren crossplatform.
          </p>
        </>
      }
    />
  );
}
