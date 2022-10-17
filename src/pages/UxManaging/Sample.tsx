import React from "react";
import {useSnapshot} from "valtio";
import {selfAssessmentState} from "../../state";
import {SkillAssessment} from "../../components/SkillAssessment/SkillAssessment";

export function Sample(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.contentManagement = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.contentManagement}
      subject="Kevin zijn"
      description={<p>Het zijn van Kevin</p>}
    />
  );
}
