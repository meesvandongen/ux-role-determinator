import React from "react";
import { useSnapshot } from "valtio";
import { selfAssessmentState } from "../../../state";
import { SkillAssessment } from "../../../components/SkillAssessment/SkillAssessment";

export function DataAnalysis(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      skillAssessmentValue={selfAssessmentSnapshot.dataAnalysis}
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.dataAnalysis = newValue;
      }}
      subject="Data analyseren & interpreteren"
      description={
        <>
          <p>Analyseren van gebruikservaringen, -wensen, -knelpunten</p>
          <p>
            Visualisatie of groeperen van trends zijn hulpmiddelen die kunnen
            worden gebruikt voor dataverwerking.
          </p>
          <p>Uitwerken van user scenarios of user stories.</p>
          <p>
            conclusies trekken en richting geven aan het ontwikkelingsproces,
            bijvoorbeeld uit A/B-tests of andere verzamelde gegevens.
          </p>
        </>
      }
    />
  );
}
