import React from "react";
import {useSnapshot} from "valtio";
import {selfAssessmentState} from "../../../state";
import {SkillAssessment} from "../../../components/SkillAssessment/SkillAssessment";

export function DesignImplementation(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.designImplementation = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.designImplementation}
      subject="Design Implementatie"
      description={
        <>
          <p>
            De vertaling van de visual- en interaction designs naar werkende,
            efficiënte en toegankelijke code. Jij bent de belangrijkste schakel
            om design en development aan elkaar te lijmen.
          </p>
          <p>
            User stories / projecten uitvoeren (development) binnen frontend
            development stacks in JavaScript en de bekende frameworks
            (Angular/React/Vue, etc).
          </p>
          <p>
            Implementeren en onderhouden van o.a. A/B tests, E2E tests, Unit
            tests binnen bestaande frameworks/stacks.
          </p>
        </>
      }
    />
  );
}
