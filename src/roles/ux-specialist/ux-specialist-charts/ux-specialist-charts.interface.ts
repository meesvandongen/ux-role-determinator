import { AssessmentState } from "../../../state/assessment.types";

export type StateWithName = AssessmentState["uxSpecialist"] & {
  name: string;
};

export interface TeamResult {
  key: string;
  value: string;
  name: string;
}

export interface ChartData {
  category: string | number;
  [name: string]: string | number;
}
