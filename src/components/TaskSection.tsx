import React from "react";
import { CirclesRange } from "./CirclesRange";

interface TaskSectionProps {
  title: string;
  description: React.ReactNode;
  skillAssessmentValue: number | "unset";
  onSkillAssessmentChange: (value: number | "unset") => void;
}
export function TaskSection({
  title,
  description,
  skillAssessmentValue,
  onSkillAssessmentChange,
}: TaskSectionProps): JSX.Element {
  return (
    <div className="grid-cols-[1fr,auto,1fr] grid items-center gap-y-12 gap-x-8">
      <div className="prose prose-invert prose-purple col-start-2">
        <h3>{title}</h3>
        {description}
      </div>

      <div className="col-start-1 text-right font-bold text-sm">Junior</div>
      <div className="col-start-2">
        <CirclesRange
          min={1}
          max={10}
          value={skillAssessmentValue}
          onChange={(value) => {
            onSkillAssessmentChange(value);
          }}
        />
      </div>
      <div className="col-start-3 text-left font-bold text-sm">Senior</div>
    </div>
  );
}
