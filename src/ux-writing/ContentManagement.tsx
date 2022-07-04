import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../components/TaskSection";
import { selfAssessmentState } from "../state";

export function ContentManagement(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.contentManagement = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.contentManagement}
      title="Contentbeheer"
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
