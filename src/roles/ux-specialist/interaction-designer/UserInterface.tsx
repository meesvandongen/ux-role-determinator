import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.ui);

export function UserInterface(): JSX.Element {
  const uiAssessment = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.ui,
            levelOfCompetency: newValue,
          })
        );
      }}
      skillAssessmentValue={uiAssessment}
      keywords={[
        "Interaction Design",
        "Ontwikkeling & Implementatie Design systems",
        "Layout & Compositie",
        "Visual Accessibilty",
        "Design systems",
        "Layout/composition",
      ]}
      title="User Interface"
      description={
        <>
          <p>
            Creëren van een user interface design van websites of applicaties.
          </p>
          <p>
            (Mede) ontwerpen van front-end-functionaliteit binnen de kaders van
            het creatieve concept.
          </p>
        </>
      }
    ></TaskSection>
  );
}
