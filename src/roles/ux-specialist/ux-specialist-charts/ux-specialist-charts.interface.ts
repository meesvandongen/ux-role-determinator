import { State } from "../../../state/root-state";

export interface StateWithName extends State {
  name: string;
}

export interface TeamResult {
  key: string;
  value: string;
  name: string;
}

export interface ChartData {
  category: string | number;
  [name: string]: string | number;
}
