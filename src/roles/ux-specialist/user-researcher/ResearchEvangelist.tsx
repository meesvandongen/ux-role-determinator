import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(
  uxSpecialistSelector,
  (s) => s.researchEvangelist
);

export function ResearchEvangelist(): JSX.Element {
  const assessmentValue = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      skillAssessmentValue={assessmentValue}
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.researchEvangelist,
            levelOfCompetency: newValue,
          })
        );
      }}
      title="Research Evangeliseren"
      description={
        <>
          <p>Resultaten uit onderzoeken verspreiden.</p>
          <p>
            Adviseren van bijv. developers en visual designers op het gebied van
            user centered design.
          </p>
          <p>
            Ondersteunen van de Visual/Interaction designer rol op het gebied
            van prototyping en mockups.
          </p>
        </>
      }
    />
  );
}
