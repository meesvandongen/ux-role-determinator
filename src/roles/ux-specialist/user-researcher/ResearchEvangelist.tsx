import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { state } from "../../../state";

export function ResearchEvangelist() {
  const assessmentValue = useSelector(
    (state) => state.researchEvangelistAssessment
  );
  const dispatch = useDispatch();

  return (
    <TaskSection
      skillAssessmentValue={assessmentValue}
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.researchEvangelistAssessmentSliderMoved({
            value: newValue,
          })
        );
      }}
      title="Research Evangeliseren"
      description={
        <>
          <p>Resultaten uit onderzoeken verspreiden.</p>
          <p>
            Adviseren van bijv. developers en visual designers op het gebied van
            user centered design.
          </p>
          <p>
            Ondersteunen van de Visual/Interaction designer rol op het gebied
            van prototyping en mockups.
          </p>
        </>
      }
    />
  );
}
