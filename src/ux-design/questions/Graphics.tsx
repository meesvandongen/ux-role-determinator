import React from "react";
import { useSnapshot } from "valtio";
import { selfAssessmentState } from "../../state";
import {SkillAssessment} from "../../components/SkillAssessment/SkillAssessment";

export function Graphics(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.graphics = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.graphics}
      subject="Graphics"
      description={
        <p>
          Creëren van ontwerp artefacten en grafische elementen. Deze elementen
          zullen een (eind)gebruiker context geven, alsook emoties oproepen.
          Denk hierbij aan o.a. webdesign, infographics, video, presentaties,
          etc.
        </p>
      }
    />
  );
}
