import { proxy } from "valtio";
import { watch } from "valtio/utils";
import { Assessment } from "./calculations";

const initialState: Assessment = (() => {
  const str = localStorage.getItem("selfAssessmentState");
  if (str) {
    return JSON.parse(str);
  }
  return {
    // VisualInteractionDesignerAssessment
    graphics: 0,
    prototyping: 0,
    uiTheory: 0,
    ui: 0,
    // UserResearcherAssessment
    dataAnalysis: 0,
    researchEvangelist: 0,
    conductingResearch: 0,
    definingResearch: 0,
    // UxWriterAssessment
    campaigning: 0,
    contentManagement: 0,
    contentStrategy: 0,
    contentWriting: 0,
    // CreativeDeveloperAssessment
    designImplementation: 0,
    richInteraction: 0,
    codeUxAdvocate: 0,
  };
})();

export const selfAssessmentState = proxy<Assessment>(initialState);

watch((get) => {
  localStorage.setItem(
    "selfAssessmentState",
    JSON.stringify(get(selfAssessmentState))
  );
});
