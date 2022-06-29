import React from "react";
import { TaskSection } from "../../components/TaskSection";
import { useSnapshot } from "valtio";
import { selfAssessmentState } from "../../state";

export function Campaigning(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.campaigning = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.campaigning}
      title="Campagne voeren"
      description={
        <>
          <p>
            Beheren van social media-activiteiten met als doel het stimuleren
            van de interactie met de doelgroep.
          </p>
          <p>Uitvoeren van e-mailcampagnes</p>
        </>
      }
      keywords={["Social platforms", "Marketing"]}
    />
  );
}
