import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.prototyping);

export function Prototyping(): JSX.Element {
  const prototypingAssessment = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.prototyping,
            levelOfCompetency: newValue,
          })
        );
      }}
      skillAssessmentValue={prototypingAssessment}
      keywords={["Wireframing", "Mock-ups"]}
      title="Prototyping"
      description={
        <>
          <p>
            Het maken van prototypes met een verschillende mate van getrouwheid.
            Van low fidelity tot high fidelity.
          </p>
          <p>
            Vertalen van de gebruikerswensen en -doelen naar concrete
            specificaties en eventueel mockups (demonstratie- / testmodellen) en
            prototypes.
          </p>
        </>
      }
    ></TaskSection>
  );
}
