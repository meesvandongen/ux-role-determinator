import React from "react";
import kurasu from "kurasu";
import { FlexSpacer } from "./FlexSpacer";

const Keyword = kurasu.span(
  "italic bg-gray-100 py-1 px-2 rounded text-sm mr-2 mb-2"
);

function SkillAssessmentDescription({ value }: { value: number | "unset" }) {
  if (value === 0) {
    return <>Geen ervaring</>;
  }
  if (value === 1) {
    return <>Laag niveau</>;
  }
  if (value === 2) {
    return <>Gemiddeld niveau</>;
  }
  if (value === 3) {
    return <>Tamelijk hoog niveau</>;
  }
  if (value === 4) {
    return <>Hoog niveau</>;
  }
  if (value === "unset") {
    return <>Niet beoordeeld</>;
  }

  return <></>;
}

interface TaskSectionProps {
  title: string;
  description: React.ReactNode;
  keywords?: string[];
  skillAssessmentValue: number | "unset";
  onSkillAssessmentChange: (value: number | "unset") => void;
}
export function TaskSection({
  title,
  description,
  keywords,
  skillAssessmentValue,
  onSkillAssessmentChange,
}: TaskSectionProps): JSX.Element {
  return (
    <div className="prose prose-invert prose-purple">
      <h3>{title}</h3>
      {description}
      <div>
        <div className="flex flex-col">
          <label className="text-sm italic" htmlFor={title}>
            {title} vaardigheidsbeoordeeling:{" "}
            <span className="font-medium">
              <SkillAssessmentDescription value={skillAssessmentValue} />
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
            <SkillAssessmentDescription value={0} />
          </span>
          <FlexSpacer />
          <span className="text-xs text-gray-500 uppercase">
            <SkillAssessmentDescription value={4} />
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
    </div>
  );
}
