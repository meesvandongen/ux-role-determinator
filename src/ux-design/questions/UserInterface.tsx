import React from "react";
import {useSnapshot} from "valtio";
import {selfAssessmentState} from "../../state";
import {SkillAssessment} from "../../components/SkillAssessment/SkillAssessment";

export function UserInterface(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.ui = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.ui}
      subject="User Interface"
      description={
        <>
          <p>
            Creëren van een user interface design van websites of applicaties.
          </p>
          <p>
            (Mede) ontwerpen van front-end-functionaliteit binnen de kaders van
            het creatieve concept.
          </p>
        </>
      }
    />
  );
}
