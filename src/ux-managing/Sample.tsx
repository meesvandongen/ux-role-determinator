import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../components/TaskSection";
import { selfAssessmentState } from "../state";

export function Sample(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.contentManagement = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.contentManagement}
      title="Kevin zijn"
      description={<p>Het zijn van Kevin</p>}
    />
  );
}
