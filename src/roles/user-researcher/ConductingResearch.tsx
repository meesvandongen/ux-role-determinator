import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../components/TaskSection";
import { state } from "../../state";

export function ConductingResearch() {
  const assessmentValue = useSelector(
    (state) => state.conductingResearchAssessment
  );
  const dispatch = useDispatch();

  return (
    <TaskSection
      skillAssessmentValue={assessmentValue}
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.conductingResearchAssessmentSliderMoved({
            value: newValue,
          })
        );
      }}
      title="Uitvoeren onderzoeken"
      description={
        <>
          <p>kwalitatieve en kwantitatieve onderzoeken uitvoeren.</p>
          <p>uitvoeren van user experience tests.</p>
        </>
      }
    />
  );
}
