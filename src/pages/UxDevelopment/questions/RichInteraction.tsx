import { useSnapshot } from "valtio";
import { selfAssessmentState } from "../../../state";
import { SkillAssessment } from "../../../components/SkillAssessment/SkillAssessment";

export function RichInteraction(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.richInteraction = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.richInteraction}
      subject="Rich Interaction"
      description={
        <p>
          Het creëren van gedetailleerde en efficiënte interfaces met o.a.
          (micro)animaties / gedrag in o.a. JavaScript.
        </p>
      }
    />
  );
}
