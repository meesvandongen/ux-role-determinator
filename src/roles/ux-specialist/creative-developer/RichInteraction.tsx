import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.richInteraction);

export function RichInteraction(): JSX.Element {
  const assessment = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.richInteraction,
            levelOfCompetency: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="Rich Interaction"
      description={
        <>
          <p>
            Het creëren van gedetailleerde en efficiënte interfaces met o.a.
            (micro)animaties / gedrag in o.a. JavaScript.
          </p>
        </>
      }
      keywords={["Digital graphics (SVG / Canvas)", "Motion design"]}
    />
  );
}
