import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../../components/TaskSection";
import { selfAssessmentState } from "../../state";

export function Graphics(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.graphics = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.graphics}
      keywords={[
        "Grafische vormgeving",
        "Illustratie",
        "Kleurtheorie",
        "Iconography",
        "Typography",
        "Branding",
      ]}
      title="Graphics"
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
