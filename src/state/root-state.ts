import { combineReducers } from "@reduxjs/toolkit";
import { persistedAssessmentStateReducer } from "./assessment";


export const rootReducer = combineReducers({
  assessment: persistedAssessmentStateReducer,
})

export type State = ReturnType<typeof rootReducer>;


