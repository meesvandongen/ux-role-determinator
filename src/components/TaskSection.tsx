import { CirclesRange } from "./CirclesRange/CirclesRange";

interface TaskSectionProps {
  title: string;
  description: React.ReactNode;
  skillAssessmentValue: number;
  onSkillAssessmentChange: (value: number) => void;
}
export function TaskSection({
  title,
  description,
  skillAssessmentValue,
  onSkillAssessmentChange,
}: TaskSectionProps): JSX.Element {
  return (
    <div className="grid grid-cols-2 items-center gap-x-8 gap-y-8 md:grid-cols-[auto,minmax(0,65ch),auto]">
      <div className="prose prose-invert prose-purple col-span-2 pb-8 md:col-span-1 md:col-start-2">
        <h3>{title}</h3>
        {description}
      </div>

      <div className="col-span-2 w-full md:col-span-1 md:col-start-2">
        <CirclesRange
          min={1}
          max={9}
          value={skillAssessmentValue}
          onChange={(value) => {
            onSkillAssessmentChange(value);
          }}
        />
      </div>
      <button
        className="text-left text-sm font-bold md:col-start-1 md:row-start-2 md:text-right"
        onClick={() => {
          const nextValue =
            typeof skillAssessmentValue === "number"
              ? skillAssessmentValue - 1
              : 1;
          onSkillAssessmentChange(nextValue < 1 ? 1 : nextValue);
        }}
      >
        Junior
      </button>
      <button
        className="text-right text-sm font-bold md:col-start-3 md:row-start-2 md:text-left"
        onClick={() => {
          const nextValue =
            typeof skillAssessmentValue === "number"
              ? skillAssessmentValue + 1
              : 1;
          onSkillAssessmentChange(nextValue > 10 ? 10 : nextValue);
        }}
      >
        Senior
      </button>
    </div>
  );
}
