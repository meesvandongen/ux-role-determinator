import React from "react";
import { useSnapshot } from "valtio";
import { selfAssessmentState } from "../../../state";
import { SkillAssessment } from "../../../components/SkillAssessment/SkillAssessment";

export function UiTheory(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.uiTheory = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.uiTheory}
      subject="User Interface Theorie"
      description={
        <>
          <p>
            <em>Heuristische evaluatie</em> — Beoordeling van het ontwerp op
            basis van verworven kennis en bekende beste praktijken of
            vuistregels. Aan de hand van deze evaluatie kunnen voorstellen
            worden gedaan over hoe het ontwerp kan worden verbeterd. Hiermee
            komt men snel en efficiënt tot een gebruiksvriendelijk ontwerp.
          </p>
          <p>
            Ontwerp keuzes / oplossingen onderbouwen met theoretische kennis.
          </p>
        </>
      }
    />
  );
}
