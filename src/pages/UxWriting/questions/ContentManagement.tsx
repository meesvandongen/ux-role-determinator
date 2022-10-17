import React from "react";
import {useSnapshot} from "valtio";
import {selfAssessmentState} from "../../../state";
import {SkillAssessment} from "../../../components/SkillAssessment/SkillAssessment";

export function ContentManagement(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.contentManagement = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.contentManagement}
      subject="Contentbeheer"
      description={
        <>
          <p>Content Management in meerdere gangbare CMS systemen.</p>
          <p>
            Ervoor zorgen dat online uitingen zijn geoptimaliseerd voor
            zoekmachines.
          </p>
          <p>verspreiden en vindbaar maken van digitale content.</p>
        </>
      }
   
    />
  );
}
