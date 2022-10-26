import * as S from "./skill-assessment.styles";
import { CirclesRange } from "../CirclesRange/CirclesRange";

interface SkillAssessmentProps {
  subject: string;
  description: React.ReactNode;
  skillAssessmentValue: number;
  onSkillAssessmentChange: (value: number) => void;
}

export function SkillAssessment({
  subject,
  description,
  skillAssessmentValue,
  onSkillAssessmentChange,
}: SkillAssessmentProps): JSX.Element {
  return (
    <S.SkillAssessment>
      <S.SkillAssessmentHeader>
        <h2>{subject}</h2>
        {description}
      </S.SkillAssessmentHeader>
      <span className="label">Junior</span>
      <S.SkillAssessmentRange>
        <CirclesRange
          min={1}
          max={9}
          value={skillAssessmentValue}
          onChange={(value) => {
            onSkillAssessmentChange(value);
          }}
        />
      </S.SkillAssessmentRange>
      <span className="label">Senior</span>
    </S.SkillAssessment>
  );
}
