import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { state } from "../../../state";

export function RichInteraction() {
  const assessment = useSelector((state) => state.richInteractionAssessment);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.richInteractionAssessmentSliderMoved({
            value: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="Rich Interaction"
      description={
        <>
          <p>
            Het creëren van gedetailleerde en efficiënte interfaces met o.a.
            (micro)animaties / gedrag in o.a. JavaScript.
          </p>
        </>
      }
      keywords={["Digital graphics (SVG / Canvas)", "Motion design"]}
    />
  );
}
