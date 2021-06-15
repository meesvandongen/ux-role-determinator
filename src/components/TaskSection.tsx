import React from "react";
import kurasu from "kurasu";
import { Competency, competencyTranslations } from "../competency";
import { FlexSpacer } from "./FlexSpacer";

const Keyword = kurasu.span(
  "italic bg-gray-100 py-1 px-2 rounded text-sm mr-2 mb-2"
);

interface TaskSectionProps {
  title: string;
  description: React.ReactNode;
  keywords?: string[];
  skillAssessmentValue: Competency;
  onSkillAssessmentChange: (value: Competency) => void;
}
export function TaskSection({
  title,
  description,
  keywords,
  skillAssessmentValue,
  onSkillAssessmentChange,
}: TaskSectionProps): JSX.Element {
  return (
    <>
      <h3>{title}</h3>
      {description}
      <div>
        <div className="flex flex-col">
          <label className="text-sm italic" htmlFor={title}>
            {title} vaardigheidsbeoordeeling:{" "}
            <span className="font-medium">
              {competencyTranslations[skillAssessmentValue]}
            </span>
          </label>
          <input
            type="range"
            min={0}
            max={4}
            step={1}
            name={title}
            id={title}
            value={skillAssessmentValue}
            onChange={(e) => {
              onSkillAssessmentChange(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex">
          <span className="text-xs text-gray-500 uppercase">
            {competencyTranslations[Competency.noLevelOfCompetency]}
          </span>
          <FlexSpacer />
          <span className="text-xs text-gray-500 uppercase">
            {competencyTranslations[Competency.highLevelOfCompetency]}
          </span>
        </div>
      </div>
      {keywords && (
        <div className="pt-1">
          <span className="uppercase text-xs font-bold">Trefwoorden</span>
          <div className="flex flex-wrap">
            {keywords.map((keyword) => (
              <Keyword key={keyword}>{keyword}</Keyword>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
