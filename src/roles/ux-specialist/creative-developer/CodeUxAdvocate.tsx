import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.codeUxAdvocate);

export function CodeUxAdvocate(): JSX.Element {
  const assessment = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.codeUxAdvocate,
            levelOfCompetency: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="UX vertegenwoordiger in code"
      description={
        <>
          <p>Beheren en bewaken van styleguides in de code</p>
          <p>
            Browser en device limitaties omzeilen door middel van progressive
            enhacement / graceful degredation en daarmee de gebruikerservaring
            gelijk te trekken / verbeteren crossplatform.
          </p>
        </>
      }
      keywords={["Functional Accessibility"]}
    />
  );
}
