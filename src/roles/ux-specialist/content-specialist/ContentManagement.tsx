import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { state } from "../../../state";

export function ContentManagement() {
  const assessment = useSelector((state) => state.contentManagementAssessment);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          state.actions.contentManagementAssessmentSliderMoved({
            value: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="Contentbeheer"
      description={
        <>
          <p>Content Management in meerdere gangbare CMS systemen</p>
          <p>
            Ervoor zorgen dat online uitingen zijn geoptimaliseerd voor
            zoekmachines.
          </p>
          <p>verspreiden en vindbaar maken van digitale content.</p>
        </>
      }
      keywords={[
        "Content management systemen (AEM, Wordpress, etc)",
        "Basiskennis SEO",
        "Basiskennis HTML",
      ]}
    ></TaskSection>
  );
}
