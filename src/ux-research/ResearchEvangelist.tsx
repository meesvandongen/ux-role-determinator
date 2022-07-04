import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../components/TaskSection";
import { selfAssessmentState } from "../state";

export function ResearchEvangelist(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      skillAssessmentValue={selfAssessmentSnapshot.researchEvangelist}
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.researchEvangelist = newValue;
      }}
      title="Research Evangeliseren"
      description={
        <>
          <p>Resultaten uit onderzoeken verspreiden.</p>
          <p>
            Adviseren van bijv. developers en visual designers op het gebied van
            user centered design.
          </p>
          <p>
            Ondersteunen van de Visual/Interaction designer rol op het gebied
            van prototyping en mockups.
          </p>
        </>
      }
    />
  );
}
