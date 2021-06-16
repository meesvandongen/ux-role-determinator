import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { state } from "../../../state";

export function Campaigning() {
  const assessment = useSelector((state) => state.campaigningAssessment);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.campaigningAssessmentSliderMoved({
            value: newValue,
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
      keywords={["Social platforms", 'Marketing']}
    />
  );
}
