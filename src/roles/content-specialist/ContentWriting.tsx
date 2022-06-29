import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../../components/TaskSection";
import { selfAssessmentState } from "../../state";

export function ContentWriting(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.contentWriting = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.contentWriting}
      title="Content schrijven"
      description={
        <>
          <p>
            Bijdragen aan het creatieve proces in samenwerking met de Creative
            Frontend Developer, User Researcher en Visual/Interaction Designer.
          </p>
          <p>Creëren van microcopy in de juiste tone of voice.</p>
          <p>
            Vertalen van de wensen van business naar de juiste copy voor de
            (eind)gebruiker.
          </p>
        </>
      }
      keywords={[
        "Pyramide schrijven",
        "Tone of Voice",
        "Empatisch schrijven",
        "Talenkennis (Engels, Nederlands)",
        "Combineren beeld & tekst",
        "Copywriting",
        "e-commerce",
      ]}
    />
  );
}
