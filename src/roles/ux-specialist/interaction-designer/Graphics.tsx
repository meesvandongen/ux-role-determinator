import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.graphics);

export function Graphics(): JSX.Element {
  const graphicsAssessment = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.graphics,
            levelOfCompetency: newValue,
          })
        );
      }}
      skillAssessmentValue={graphicsAssessment}
      keywords={[
        "Grafische vormgeving",
        "Illustratie",
        "Kleurtheorie",
        "Iconography",
        "Typography",
        "Branding",
      ]}
      title="Graphics"
      description={
        <>
          <p>
            Creëren van ontwerp artefacten en grafische elementen. Deze
            elementen zullen een (eind)gebruiker context geven, alsook emoties
            oproepen. Denk hierbij aan o.a. webdesign, infographics, video,
            presentaties, etc.
          </p>
        </>
      }
    ></TaskSection>
  );
}
