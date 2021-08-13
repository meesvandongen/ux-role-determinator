import React from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.campaigning);

export function Campaigning(): JSX.Element {
  const assessment = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.campaigning,
            levelOfCompetency: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="Campagne voeren"
      description={
        <>
          <p>
            Beheren van social media-activiteiten met als doel het stimuleren
            van de interactie met de doelgroep.
          </p>
          <p>Uitvoeren van e-mailcampagnes</p>
        </>
      }
      keywords={["Social platforms", "Marketing"]}
    />
  );
}
