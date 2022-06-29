import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../../components/TaskSection";
import { selfAssessmentState } from "../../state";

export function CodeUxAdvocate(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.codeUxAdvocate = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.codeUxAdvocate}
      title="UX vertegenwoordiger in code"
      description={
        <>
          <p>Beheren en bewaken van styleguides in de code</p>
          <p>
            Browser en device limitaties omzeilen door middel van progressive
            enhacement / graceful degredation en daarmee de gebruikerservaring
            gelijk te trekken / verbeteren crossplatform.
          </p>
        </>
      }
    />
  );
}
