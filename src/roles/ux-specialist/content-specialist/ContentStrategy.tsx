import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.contentStrategy);

export function ContentStrategy(): JSX.Element {
  const assessment = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.contentStrategy,
            levelOfCompetency: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="Content strategie"
      description={
        <>
          <p>
            Opstellen van contentstrategie: welke kanalen zet je waarvoor in,
            welke doelgroep bereik je via welk kanaal en welke boodschappen wil
            je verkondigen.
          </p>
          <p>
            Voeren van overleg met opdrachtgever over de eisen die aan de tekst
            worden gesteld, bijvoorbeeld op gebied inhoud, doelgroep en omvang.
          </p>
        </>
      }
    ></TaskSection>
  );
}
