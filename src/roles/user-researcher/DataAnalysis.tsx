import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../components/TaskSection";
import { state } from "../../state";

export function DataAnalysis() {
  const dataAnalysis = useSelector((state) => state.dataAnalysisAssessment);
  const dispatch = useDispatch();

  return (
    <TaskSection
    skillAssessmentValue={dataAnalysis}
    onSkillAssessmentChange={(newValue) => {
      dispatch(
        state.actions.dataAnalysisAssessmentSliderMoved({
          value: newValue,
        })
      )
    }}
      title="Data analyseren & interpreteren"
      description={
        <>
          <p>Analyseren van gebruikservaringen, -wensen, -knelpunten</p>
          <p>
            Visualisatie of groeperen van trends zijn hulpmiddelen die kunnen
            worden gebruikt voor dataverwerking.
          </p>
          <p>Uitwerken van user scenarios of user stories</p>
          <p>
            conclusies trekken en richting geven aan het ontwikkelingsproces,
            bijvoorbeeld uit A/B-tests of andere verzamelde gegevens.
          </p>
        </>
      }
      keywords={["Persona", "User journey mapping"]}
    />
  );
}
