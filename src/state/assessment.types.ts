//
// OVERALL ASSESSMENT STATE
//

import type { Competency } from "../competency";

export interface AssessmentState {
  uxSpecialist: Record<UxSpecialistAssessment, Competency>;
}

//
// UX SPECIALIST
//

export enum UxSpecialistAssessment {
  // VisualInteractionDesignerAssessment
  graphics = "graphics",
  prototyping = "prototyping",
  uiTheory = "uiTheory",
  ui = "ui",

  // UserResearcherAssessment
  dataAnalysis = "dataAnalysis",
  researchEvangelist = "researchEvangelist",
  conductingResearch = "conductingResearch",
  definingResearch = "definingResearch",

  // UxWriterAssessment
  campaigning = "campaigning",
  contentManagement = "contentManagement",
  contentStrategy = "contentStrategy",
  contentWriting = "contentWriting",

  // CreativeDeveloperAssessment
  designImplementation = "designImplementation",
  richInteraction = "richInteraction",
  codeUxAdvocate = "codeUxAdvocate",
}
