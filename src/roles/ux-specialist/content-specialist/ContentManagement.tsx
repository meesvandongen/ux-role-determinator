import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskSection } from "../../../components/TaskSection";
import { assessmentState } from "../../../state/assessment";
import { UxSpecialistAssessment } from "../../../state/assessment.types";
import { uxSpecialistSelector } from "../ux-specialist.selector";

const selector = createSelector(
  uxSpecialistSelector,
  (s) => s.contentManagement
);

export function ContentManagement(): JSX.Element {
  const assessment = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <TaskSection
      onSkillAssessmentChange={(newValue) => {
        dispatch(
          assessmentState.actions.slideUxSpecialistCompetencyLevel({
            competency: UxSpecialistAssessment.contentManagement,
            levelOfCompetency: newValue,
          })
        );
      }}
      skillAssessmentValue={assessment}
      title="Contentbeheer"
      description={
        <>
          <p>Content Management in meerdere gangbare CMS systemen.</p>
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
