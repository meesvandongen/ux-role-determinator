import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(
  uxSpecialistSelector,
  (s) => s.definingResearch
);

export function DefiningResearch(): JSX.Element {
  const assessmentValue = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      skillAssessmentValue={assessmentValue}
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.definingResearch,
            levelOfCompetency: newValue,
          })
        );
      }}
      title="Onderzoek definiëren"
      description={
        <>
          <p>
            Iteratief verbeteren van de customer journey als onderdeel van ‘het
            development team’
          </p>
          <p>
            Actief bijdragen aan optimalisaties op het gebied van conversie /
            leads
          </p>
          <p>
            Bepalen van de doelgroep door middel van onder andere user story’s
            en persona’s
          </p>
          <p>Het ontwerpen van tests (Usability tests, A/B)</p>
          <p>Kwantitatieve en kwalitatieve onderzoeken definiëren.</p>
        </>
      }
      keywords={["Onderzoeksdoelen bepalen", "brainstormen"]}
    />
  );
}
