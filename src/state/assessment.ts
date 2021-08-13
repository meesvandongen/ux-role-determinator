import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { Competency } from "../competency";
import { AssessmentState } from "./assessment.types";
import storage from "redux-persist/lib/storage";
import { State } from "./root-state";

function createInitialState(): AssessmentState {
  return {
    uxSpecialist: {
      // VisualInteractionDesignerAssessment
      graphics: Competency.noLevelOfCompetency,
      prototyping: Competency.noLevelOfCompetency,
      uiTheory: Competency.noLevelOfCompetency,
      ui: Competency.noLevelOfCompetency,
      // UserResearcherAssessment
      dataAnalysis: Competency.noLevelOfCompetency,
      researchEvangelist: Competency.noLevelOfCompetency,
      conductingResearch: Competency.noLevelOfCompetency,
      definingResearch: Competency.noLevelOfCompetency,
      // UxWriterAssessment
      campaigning: Competency.noLevelOfCompetency,
      contentManagement: Competency.noLevelOfCompetency,
      contentStrategy: Competency.noLevelOfCompetency,
      contentWriting: Competency.noLevelOfCompetency,
      // CreativeDeveloperAssessment
      designImplementation: Competency.noLevelOfCompetency,
      richInteraction: Competency.noLevelOfCompetency,
      codeUxAdvocate: Competency.noLevelOfCompetency,
    },
  };
}

export const assessmentState = createSlice({
  name: "assessmentState",
  initialState: createInitialState(),
  reducers: {
    slideUxSpecialistCompetencyLevel: (
      state,
      {
        payload: { competency, levelOfCompetency },
      }: PayloadAction<{
        competency: keyof AssessmentState["uxSpecialist"];
        levelOfCompetency: Competency;
      }>
    ): AssessmentState | void => {
      state.uxSpecialist[competency] = levelOfCompetency;
    },
  },
});

export const persistedAssessmentStateReducer = persistReducer(
  {
    key: assessmentState.name,
    storage: storage,
  },
  assessmentState.reducer
);

export const assessmentSelector = (state: State): AssessmentState =>
  state.assessment;
