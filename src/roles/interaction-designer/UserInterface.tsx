import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../components/TaskSection";
import { state } from "../../state";

export function UserInterface() {
  const uiAssessment = useSelector((state) => state.uiAssessment);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.uiAssessmentSliderMoved({
            value: newValue,
          })
        );
      }}
      skillAssessmentValue={uiAssessment}
      keywords={[
        "Interaction Design",
        "Ontwikkeling & Implementatie Design systems",
        "Layout & Compositie",
        "Visual Accessibilty",
        "Design systems",
        "Layout/composition",
      ]}
      title="User Interface"
      description={
        <>
          <p>
            Creëren van een user interface design van websites of applicaties.
          </p>
          <p>
            (Mede) ontwerpen van front-end-functionaliteit binnen de kaders van
            het creatieve concept.
          </p>
        </>
      }
    ></TaskSection>
  );
}
