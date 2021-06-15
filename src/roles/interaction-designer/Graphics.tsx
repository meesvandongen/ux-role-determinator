import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../components/TaskSection";
import { state } from "../../state";

export function Graphics() {
  const graphicsAssessment = useSelector((state) => state.graphicsAssessment);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.graphicsAssessmentSliderMoved({
            value: newValue,
          })
        );
      }}
      skillAssessmentValue={graphicsAssessment}
      keywords={[
        "Grafische vormgeving",
        "Illustratie",
        "Kleurtheorie",
        "Iconography",
        "Typography",
        "Branding",
      ]}
      title="Graphics"
      description={
        <>
          <p>
            Creëren van ontwerp artefacten en grafische elementen. Deze
            elementen zullen een (eind)gebruiker context geven, alsook emoties
            oproepen. Denk hierbij aan o.a. webdesign, infographics, video,
            presentaties, etc.
          </p>
        </>
      }
    ></TaskSection>
  );
}
