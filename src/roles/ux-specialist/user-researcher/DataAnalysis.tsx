import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.dataAnalysis);

export function DataAnalysis(): JSX.Element {
  const dataAnalysis = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      skillAssessmentValue={dataAnalysis}
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.dataAnalysis,

            levelOfCompetency: newValue,
          })
        );
      }}
      title="Data analyseren & interpreteren"
      description={
        <>
          <p>Analyseren van gebruikservaringen, -wensen, -knelpunten</p>
          <p>
            Visualisatie of groeperen van trends zijn hulpmiddelen die kunnen
            worden gebruikt voor dataverwerking.
          </p>
          <p>Uitwerken van user scenarios of user stories.</p>
          <p>
            conclusies trekken en richting geven aan het ontwikkelingsproces,
            bijvoorbeeld uit A/B-tests of andere verzamelde gegevens.
          </p>
        </>
      }
      keywords={["Persona", "User journey mapping"]}
    />
  );
}
