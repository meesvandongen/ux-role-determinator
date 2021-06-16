import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { state } from "../../../state";

export function DesignImplementation() {
  const assessment = useSelector(
    (state) => state.designImplementationAssessment
  );
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.designImplementationAssessmentSliderMoved({
            value: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="Design Implementatie"
      description={
        <>
          <p>
            De vertaling van de visual- en interaction designs naar werkende,
            efficiënte en toegankelijke code. Jij bent de belangrijkste schakel
            om design en development aan elkaar te lijmen.
          </p>
          <p>
            User stories / projecten uitvoeren (development) binnen frontend
            development stacks in JavaScript en de bekende frameworks
            (Angular/React/Vue, etc)
          </p>
          <p>
            Implementeren en onderhouden van o.a. A/B tests, E2E tests, Unit
            tests binnen bestaande frameworks/stacks
          </p>
        </>
      }
      keywords={[
        "Typescript, JavaScript",
        "Frameworks (Angular/React/Vue/Mobile/etc.)",
        "Design Systems",
        "HTML",
        "CSS",
        "Testing (A/B, Unit, E2E)",
        "Browser skills",
        "Debugging",
      ]}
    />
  );
}
