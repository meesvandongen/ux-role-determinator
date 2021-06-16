import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { state } from "../../../state";

export function CodeUxAdvocate() {
  const assessment = useSelector((state) => state.codeUxAdvocateAssessment);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.codeUxAdvocateAssessmentSliderMoved({
            value: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="UX vertegenwoordiger in code"
      description={
        <>
          <p>Beheren en bewaken van styleguides in de code</p>
          <p>
            Browser en device limitaties omzeilen door middel van progressive
            enhacement / graceful degredation en daarmee de gebruikerservaring
            gelijk te trekken / verbeteren crossplatform.
          </p>
        </>
      }
      keywords={["Functional Accessibility"]}
    />
  );
}
