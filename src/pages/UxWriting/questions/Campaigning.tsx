import React from "react";
import { useSnapshot } from "valtio";
import { selfAssessmentState } from "../../../state";
import { SkillAssessment } from "../../../components/SkillAssessment/SkillAssessment";

export function Campaigning(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.campaigning = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.campaigning}
      subject="Campagne voeren"
      description={
        <>
          <p>
            Beheren van social media-activiteiten met als doel het stimuleren
            van de interactie met de doelgroep.
          </p>
          <p>Uitvoeren van e-mailcampagnes</p>
        </>
      }
    />
  );
}
