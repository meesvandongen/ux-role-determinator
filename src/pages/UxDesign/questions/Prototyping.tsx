import { useSnapshot } from "valtio";
import { selfAssessmentState } from "../../../state";
import { SkillAssessment } from "../../../components/SkillAssessment/SkillAssessment";

export function Prototyping(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <SkillAssessment
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.prototyping = newValue;
      }}
      skillAssessmentValue={selfAssessmentSnapshot.prototyping}
      subject="Prototyping"
      description={
        <>
          <p>
            Het maken van prototypes met een verschillende mate van getrouwheid.
            Van low fidelity tot high fidelity.
          </p>
          <p>
            Vertalen van de gebruikerswensen en -doelen naar concrete
            specificaties en eventueel mockups (demonstratie- / testmodellen) en
            prototypes.
          </p>
        </>
      }
    />
  );
}
