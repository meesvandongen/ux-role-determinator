import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.uiTheory);

export function UiTheory(): JSX.Element {
  const uiTheoryAssessment = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.uiTheory,
            levelOfCompetency: newValue,
          })
        );
      }}
      skillAssessmentValue={uiTheoryAssessment}
      title="User Interface Theorie"
      description={
        <>
          <p>
            <em>Heuristische evaluatie</em> — Beoordeling van het ontwerp op
            basis van verworven kennis en bekende beste praktijken of
            vuistregels. Aan de hand van deze evaluatie kunnen voorstellen
            worden gedaan over hoe het ontwerp kan worden verbeterd. Hiermee
            komt men snel en efficiënt tot een gebruiksvriendelijk ontwerp.
          </p>
          <p>
            Ontwerp keuzes / oplossingen onderbouwen met theoretische kennis.
          </p>
        </>
      }
    ></TaskSection>
  );
}
