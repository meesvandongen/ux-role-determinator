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
    graphics: 1,
    prototyping: 1,
    uiTheory: 1,
    ui: 1,
    // UserResearcherAssessment
    dataAnalysis: 1,
    researchEvangelist: 1,
    conductingResearch: 1,
    definingResearch: 1,
    // UxWriterAssessment
    campaigning: 1,
    contentManagement: 1,
    contentStrategy: 1,
    contentWriting: 1,
    // CreativeDeveloperAssessment
    designImplementation: 1,
    richInteraction: 1,
    codeUxAdvocate: 1,
  };
})();

export const selfAssessmentState = proxy<Assessment>(initialState);

watch((get) => {
  localStorage.setItem(
    "selfAssessmentState",
    JSON.stringify(get(selfAssessmentState))
  );
});
