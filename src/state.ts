import { proxy } from "valtio";

interface SelfAssessment {
  // VisualInteractionDesignerAssessment
  graphics: "unset" | number;
  prototyping: "unset" | number;
  uiTheory: "unset" | number;
  ui: "unset" | number;
  // UserResearcherAssessment
  dataAnalysis: "unset" | number;
  researchEvangelist: "unset" | number;
  conductingResearch: "unset" | number;
  definingResearch: "unset" | number;
  // UxWriterAssessment
  campaigning: "unset" | number;
  contentManagement: "unset" | number;
  contentStrategy: "unset" | number;
  contentWriting: "unset" | number;
  // CreativeDeveloperAssessment
  designImplementation: "unset" | number;
  richInteraction: "unset" | number;
  codeUxAdvocate: "unset" | number;
}

export const selfAssessmentState = proxy<SelfAssessment>({
  // VisualInteractionDesignerAssessment
  graphics: "unset",
  prototyping: "unset",
  uiTheory: "unset",
  ui: "unset",
  // UserResearcherAssessment
  dataAnalysis: "unset",
  researchEvangelist: "unset",
  conductingResearch: "unset",
  definingResearch: "unset",
  // UxWriterAssessment
  campaigning: "unset",
  contentManagement: "unset",
  contentStrategy: "unset",
  contentWriting: "unset",
  // CreativeDeveloperAssessment
  designImplementation: "unset",
  richInteraction: "unset",
  codeUxAdvocate: "unset",
});
