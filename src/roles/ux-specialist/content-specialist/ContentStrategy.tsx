import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { state } from "../../../state";

export function ContentStrategy(): JSX.Element {
  const assessment = useSelector((state) => state.contentStrategyAssessment);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.contentStrategyAssessmentSliderMoved({
            value: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="Content strategie"
      description={
        <>
          <p>
            Opstellen van contentstrategie: welke kanalen zet je waarvoor in,
            welke doelgroep bereik je via welk kanaal en welke boodschappen wil
            je verkondigen.
          </p>
          <p>
            Voeren van overleg met opdrachtgever over de eisen die aan de tekst
            worden gesteld, bijvoorbeeld op gebied inhoud, doelgroep en omvang.
          </p>
        </>
      }
    ></TaskSection>
  );
}
