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
    <div className="grid grid-cols-2 items-center gap-x-8 gap-y-8 md:grid-cols-[minmax(0,1fr),1fr,minmax(0,1fr)]">
      <div className="prose prose-invert prose-purple col-span-2 pb-8 md:col-span-1 md:col-start-2">
        <h3>{title}</h3>
        {description}
      </div>

      <div className="col-span-2 w-full md:col-span-1 md:col-start-2">
        <CirclesRange
          min={1}
          max={10}
          value={skillAssessmentValue}
          onChange={(value) => {
            onSkillAssessmentChange(value);
          }}
        />
      </div>
      <div className="text-left text-sm font-bold md:col-start-1 md:row-start-2 md:text-right">
        Junior
      </div>
      <div className="text-right text-sm font-bold md:col-start-3 md:row-start-2 md:text-left">
        Senior
      </div>
    </div>
  );
}
