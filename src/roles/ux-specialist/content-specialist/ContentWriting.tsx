import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(uxSpecialistSelector, (s) => s.contentWriting);


export function ContentWriting(): JSX.Element {
  const assessment = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.contentWriting,
            levelOfCompetency: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="Content schrijven"
      description={
        <>
          <p>
            Bijdragen aan het creatieve proces in samenwerking met de Creative
            Frontend Developer, User Researcher en Visual/Interaction Designer.
          </p>
          <p>Creëren van microcopy in de juiste tone of voice.</p>
          <p>
            Vertalen van de wensen van business naar de juiste copy voor de
            (eind)gebruiker.
          </p>
        </>
      }
      keywords={[
        "Pyramide schrijven",
        "Tone of Voice",
        "Empatisch schrijven",
        "Talenkennis (Engels, Nederlands)",
        "Combineren beeld & tekst",
        "Copywriting",
        "e-commerce",
      ]}
    />
  );
}
