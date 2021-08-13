import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.conductingResearch);

export function ConductingResearch(): JSX.Element {
  const assessmentValue = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      skillAssessmentValue={assessmentValue}
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.conductingResearch,
            levelOfCompetency: newValue,
          })
        );
      }}
      title="Uitvoeren onderzoeken"
      description={
        <>
          <p>kwalitatieve en kwantitatieve onderzoeken uitvoeren.</p>
          <p>uitvoeren van user experience tests.</p>
        </>
      }
    />
  );
}
