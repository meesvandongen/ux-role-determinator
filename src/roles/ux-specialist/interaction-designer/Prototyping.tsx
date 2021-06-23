import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { state } from "../../../state";

export function Prototyping(): JSX.Element {
  const prototypingAssessment = useSelector(
    (state) => state.prototypingAssessment
  );
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.prototypingAssessmentSliderMoved({
            value: newValue,
          })
        );
      }}
      skillAssessmentValue={prototypingAssessment}
      keywords={["Wireframing", "Mock-ups"]}
      title="Prototyping"
      description={
        <>
          <p>
            Het maken van prototypes met een verschillende mate van getrouwheid.
            Van low fidelity tot high fidelity.
          </p>
          <p>
            Vertalen van de gebruikerswensen en -doelen naar concrete
            specificaties en eventueel mockups (demonstratie- / testmodellen) en
            prototypes.
          </p>
        </>
      }
    ></TaskSection>
  );
}
