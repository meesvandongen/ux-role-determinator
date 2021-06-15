import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../components/TaskSection";
import { state } from "../../state";

export function DefiningResearch() {
  const assessmentValue = useSelector(
    (state) => state.definingResearchAssessment
  );
  const dispatch = useDispatch();

  return (
    <TaskSection
      skillAssessmentValue={assessmentValue}
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.definingResearchAssessmentSliderMoved({
            value: newValue,
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
