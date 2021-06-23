import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Competency } from "./competency";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

type CompetencyValuePayloadAction = PayloadAction<{
  value: Competency;
}>;

export type State = ReturnType<typeof state.reducer>;

export function createInitialState() {
  return {
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
    // UX Writer
    campaigningAssessment: Competency.noLevelOfCompetency,
    contentManagementAssessment: Competency.noLevelOfCompetency,
    contentStrategyAssessment: Competency.noLevelOfCompetency,
    contentWritingAssessment: Competency.noLevelOfCompetency,
    // Creative Developer
    designImplementationAssessment: Competency.noLevelOfCompetency,
    richInteractionAssessment: Competency.noLevelOfCompetency,
    codeUxAdvocateAssessment: Competency.noLevelOfCompetency,
  };
}

export const state = createSlice({
  name: "state",
  initialState: createInitialState(),
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
    campaigningAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.campaigningAssessment = action.payload.value;
    },
    contentManagementAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.contentManagementAssessment = action.payload.value;
    },
    contentStrategyAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.contentStrategyAssessment = action.payload.value;
    },
    contentWritingAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.contentWritingAssessment = action.payload.value;
    },
    designImplementationAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.designImplementationAssessment = action.payload.value;
    },
    richInteractionAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.richInteractionAssessment = action.payload.value;
    },
    codeUxAdvocateAssessmentSliderMoved: (
      state,
      action: CompetencyValuePayloadAction
    ) => {
      state.codeUxAdvocateAssessment = action.payload.value;
    },
  },
});

export const persistedStateReducer = persistReducer(
  {
    key: state.name,
    storage: storage,
  },
  state.reducer
);
