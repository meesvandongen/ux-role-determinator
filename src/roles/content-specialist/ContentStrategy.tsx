import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../../components/TaskSection";
import { selfAssessmentState } from "../../state";

export function ContentStrategy(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.contentStrategy = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.contentStrategy}
      title="Content strategie"
      description={
        <>
          <p>
            Opstellen van contentstrategie: welke kanalen zet je waarvoor in,
            welke doelgroep bereik je via welk kanaal en welke boodschappen wil
            je verkondigen.
          </p>
          <p>
            Voeren van overleg met opdrachtgever over de eisen die aan de tekst
            worden gesteld, bijvoorbeeld op gebied inhoud, doelgroep en omvang.
          </p>
        </>
      }
    />
  );
}
