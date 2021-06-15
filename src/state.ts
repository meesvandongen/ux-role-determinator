import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Competency } from "./competency";

type CompetencyValuePayloadAction = PayloadAction<{
  value: Competency;
}>;

export type State = ReturnType<typeof state.reducer>;

export const state = createSlice({
  name: "state",
  initialState: {
    // Visual / Interaction Designer
    graphicsAssessment: Competency.noLevelOfCompetency,
    prototypingAssessment: Competency.noLevelOfCompetency,
    uiTheoryAssessment: Competency.noLevelOfCompetency,
    uiAssessment: Competency.noLevelOfCompetency,
    // User Researcher
    dataAnalysisAssessment: Competency.noLevelOfCompetency,
    researchEvangelistAssessment: Competency.noLevelOfCompetency,
    conductingResearchAssessment: Competency.noLevelOfCompetency,
    definingResearchAssessment: Competency.noLevelOfCompetency,
  },
  reducers: {
    graphicsAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.graphicsAssessment = action.payload.value;
    },
    prototypingAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.prototypingAssessment = action.payload.value;
    },
    uiTheoryAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.uiTheoryAssessment = action.payload.value;
    },
    uiAssessmentSliderMoved: (state, action: CompetencyValuePayloadAction) => {
      state.uiAssessment = action.payload.value;
    },
    dataAnalysisAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.dataAnalysisAssessment = action.payload.value;
    },
    researchEvangelistAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.researchEvangelistAssessment = action.payload.value;
    },
    conductingResearchAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.conductingResearchAssessment = action.payload.value;
    },
    definingResearchAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.definingResearchAssessment = action.payload.value;
    },
  },
});
