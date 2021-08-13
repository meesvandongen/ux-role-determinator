import { createSelector } from "@reduxjs/toolkit";
import { assessmentSelector } from "../../state/assessment";

export const uxSpecialistSelector = createSelector(
  assessmentSelector,
  (assessment) => assessment.uxSpecialist
);
