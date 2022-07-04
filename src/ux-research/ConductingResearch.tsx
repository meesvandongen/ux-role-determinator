import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../components/TaskSection";
import { selfAssessmentState } from "../state";

export function ConductingResearch(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      skillAssessmentValue={selfAssessmentSnapshot.conductingResearch}
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.conductingResearch = newValue;
      }}
      title="Uitvoeren onderzoeken"
      description={
        <>
          <p>kwalitatieve en kwantitatieve onderzoeken uitvoeren.</p>
          <p>uitvoeren van user experience tests.</p>
        </>
      }
    />
  );
}
