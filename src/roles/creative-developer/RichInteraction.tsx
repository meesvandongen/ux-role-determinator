import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../../components/TaskSection";
import { selfAssessmentState } from "../../state";

export function RichInteraction(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.richInteraction = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.richInteraction}
      title="Rich Interaction"
      description={
        <p>
          Het creëren van gedetailleerde en efficiënte interfaces met o.a.
          (micro)animaties / gedrag in o.a. JavaScript.
        </p>
      }
      keywords={["Digital graphics (SVG / Canvas)", "Motion design"]}
    />
  );
}
