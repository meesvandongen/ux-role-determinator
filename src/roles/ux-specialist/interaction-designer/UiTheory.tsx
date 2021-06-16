import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { state } from "../../../state";

export function UiTheory() {
  const uiTheoryAssessment = useSelector((state) => state.uiTheoryAssessment);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.uiTheoryAssessmentSliderMoved({
            value: newValue,
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
