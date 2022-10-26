import { useSnapshot } from "valtio";
import { selfAssessmentState } from "../../../state";
import { SkillAssessment } from "../../../components/SkillAssessment/SkillAssessment";

export function ConductingResearch(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      skillAssessmentValue={selfAssessmentSnapshot.conductingResearch}
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.conductingResearch = newValue;
      }}
      subject="Uitvoeren onderzoeken"
      description={
        <>
          <p>kwalitatieve en kwantitatieve onderzoeken uitvoeren.</p>
          <p>uitvoeren van user experience tests.</p>
        </>
      }
    />
  );
}
