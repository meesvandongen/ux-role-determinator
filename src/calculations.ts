import { mean } from "lodash-es";

export interface CategoryScores {
  design: number;
  writing: number;
  development: number;
  research: number;
  managing: number;
}

export interface Assessment {
  // VisualInteractionDesignerAssessment
  graphics: number;
  prototyping: number;
  uiTheory: number;
  ui: number;
  // UserResearcherAssessment
  dataAnalysis: number;
  researchEvangelist: number;
  conductingResearch: number;
  definingResearch: number;
  // UxWriterAssessment
  campaigning: number;
  contentManagement: number;
  contentStrategy: number;
  contentWriting: number;
  // CreativeDeveloperAssessment
  designImplementation: number;
  richInteraction: number;
  codeUxAdvocate: number;
}

export function assessmentToCategoryScores(
  assessment: Assessment
): CategoryScores {
  return {
    design: Math.round(
      mean([
        assessment.graphics,
        assessment.prototyping,
        assessment.uiTheory,
        assessment.ui,
      ])
    ),
    research: Math.round(
      mean([
        assessment.dataAnalysis,
        assessment.researchEvangelist,
        assessment.conductingResearch,
        assessment.definingResearch,
      ])
    ),
    writing: Math.round(
      mean([
        assessment.contentManagement,
        assessment.contentStrategy,
        assessment.contentWriting,
        assessment.campaigning,
      ])
    ),
    development: Math.round(
      mean([
        assessment.designImplementation,
        assessment.richInteraction,
        assessment.codeUxAdvocate,
      ])
    ),
    managing: Math.round(mean([1])),
  };
}
