import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../components/TaskSection";
import { selfAssessmentState } from "../state";

export function Prototyping(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.prototyping = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.prototyping}
      title="Prototyping"
      description={
        <>
          <p>
            Het maken van prototypes met een verschillende mate van getrouwheid.
            Van low fidelity tot high fidelity.
          </p>
          <p>
            Vertalen van de gebruikerswensen en -doelen naar concrete
            specificaties en eventueel mockups (demonstratie- / testmodellen) en
            prototypes.
          </p>
        </>
      }
    ></TaskSection>
  );
}
