import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../../components/TaskSection";
import { selfAssessmentState } from "../../state";

export function UserInterface(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.ui = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.ui}
      keywords={[
        "Interaction Design",
        "Ontwikkeling & Implementatie Design systems",
        "Layout & Compositie",
        "Visual Accessibilty",
        "Design systems",
        "Layout/composition",
      ]}
      title="User Interface"
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
    ></TaskSection>
  );
}
